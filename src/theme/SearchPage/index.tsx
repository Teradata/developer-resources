/* eslint-disable jsx-a11y/no-autofocus */

import React, { useEffect, useReducer, useRef, useState } from 'react';
import clsx from 'clsx';

import algoliaSearchHelper from 'algoliasearch-helper';
import algoliaSearch from 'algoliasearch/lite';

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import { useAllDocsData } from '@docusaurus/plugin-content-docs/client';
import {
  HtmlClassNameProvider,
  useEvent,
  usePluralForm,
  useSearchQueryString,
} from '@docusaurus/theme-common';
import { useTitleFormatter } from '@docusaurus/theme-common/internal';
import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  useAlgoliaThemeConfig,
  useSearchResultUrlProcessor,
} from '@docusaurus/theme-search-algolia/client';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Very simple pluralization: probably good enough for now
function useDocumentsFoundPlural() {
  const { selectMessage } = usePluralForm();
  return (count: number) =>
    selectMessage(
      count,
      translate(
        {
          id: 'theme.SearchPage.documentsFound.plurals',
          description:
            'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: '1 Result|{count} Results',
        },
        { count }
      )
    );
}

function useDocsSearchVersionsHelpers() {
  const allDocsData = useAllDocsData();

  // State of the version select menus / algolia facet filters
  // docsPluginId -> versionName map
  const [searchVersions, setSearchVersions] = useState<{
    [pluginId: string]: string;
  }>(() =>
    Object.entries(allDocsData).reduce(
      (acc, [pluginId, pluginData]) => ({
        ...acc,
        [pluginId]: pluginData.versions[0]!.name,
      }),
      {}
    )
  );

  // Set the value of a single select menu
  const setSearchVersion = (pluginId: string, searchVersion: string) =>
    setSearchVersions((s) => ({ ...s, [pluginId]: searchVersion }));

  const versioningEnabled = Object.values(allDocsData).some(
    (docsData) => docsData.versions.length > 1
  );

  return {
    allDocsData,
    versioningEnabled,
    searchVersions,
    setSearchVersion,
  };
}

// We want to display one select per versioned docs plugin instance
function SearchVersionSelectList({
  docsSearchVersionsHelpers,
}: {
  docsSearchVersionsHelpers: ReturnType<typeof useDocsSearchVersionsHelpers>;
}) {
  const versionedPluginEntries = Object.entries(
    docsSearchVersionsHelpers.allDocsData
  )
    // Do not show a version select for unversioned docs plugin instances
    .filter(([, docsData]) => docsData.versions.length > 1);

  return (
    <div
      className={clsx(
        'col',
        'col--3',
        'padding-left--none',
        styles.searchVersionColumn
      )}
    >
      {versionedPluginEntries.map(([pluginId, docsData]) => {
        const labelPrefix =
          versionedPluginEntries.length > 1 ? `${pluginId}: ` : '';
        return (
          <select
            key={pluginId}
            onChange={(e) =>
              docsSearchVersionsHelpers.setSearchVersion(
                pluginId,
                e.target.value
              )
            }
            defaultValue={docsSearchVersionsHelpers.searchVersions[pluginId]}
            className={styles.searchVersionInput}
          >
            {docsData.versions.map((version, i) => (
              <option
                key={i}
                label={`${labelPrefix}${version.label}`}
                value={version.name}
              />
            ))}
          </select>
        );
      })}
    </div>
  );
}

type ResultDispatcherState = {
  items: {
    title: string;
    url: string;
    summary: string;
    breadcrumbs: string[];
  }[];
  query: string | null;
  totalResults: number | null;
  totalPages: number | null;
  lastPage: number | null;
  hasMore: boolean | null;
  loading: boolean | null;
};

type ResultDispatcher =
  | { type: 'reset'; value?: undefined }
  | { type: 'loading'; value?: undefined }
  | { type: 'update'; value: ResultDispatcherState }
  | { type: 'advance'; value?: undefined };

function SearchPageContent(): JSX.Element {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();
  const {
    algolia: { appId, apiKey, indexName },
  } = useAlgoliaThemeConfig();
  const processSearchResultUrl = useSearchResultUrlProcessor();
  const documentsFoundPlural = useDocumentsFoundPlural();

  const docsSearchVersionsHelpers = useDocsSearchVersionsHelpers();
  const [searchQuery, setSearchQuery] = useSearchQueryString();
  const initialSearchResultState: ResultDispatcherState = {
    items: [],
    query: null,
    totalResults: null,
    totalPages: null,
    lastPage: null,
    hasMore: null,
    loading: null,
  };
  const [searchResultState, searchResultStateDispatcher] = useReducer(
    (prevState: ResultDispatcherState, data: ResultDispatcher) => {
      switch (data.type) {
        case 'reset': {
          return initialSearchResultState;
        }
        case 'loading': {
          return { ...prevState, loading: true };
        }
        case 'update': {
          if (searchQuery !== data.value.query) {
            return prevState;
          }

          return {
            ...data.value,
            items:
              data.value.lastPage === 0
                ? data.value.items
                : prevState.items.concat(data.value.items),
          };
        }
        case 'advance': {
          const hasMore = prevState.totalPages! > prevState.lastPage! + 1;

          return {
            ...prevState,
            lastPage: hasMore ? prevState.lastPage! + 1 : prevState.lastPage,
            hasMore,
          };
        }
        default:
          return prevState;
      }
    },
    initialSearchResultState
  );

  const algoliaClient = algoliaSearch(appId, apiKey);
  const algoliaHelper = algoliaSearchHelper(algoliaClient, indexName, {
    hitsPerPage: 15,
    advancedSyntax: true,
    disjunctiveFacets: ['language', 'docusaurus_tag'],
  });

  algoliaHelper.on(
    'result',
    ({ results: { query, hits, page, nbHits, nbPages } }) => {
      if (query === '' || !Array.isArray(hits)) {
        searchResultStateDispatcher({ type: 'reset' });
        return;
      }

      const sanitizeValue = (value: string) =>
        value.replace(
          /algolia-docsearch-suggestion--highlight/g,
          'search-result-match'
        );

      const items = hits.map(
        ({
          url,
          _highlightResult: { hierarchy },
          _snippetResult: snippet = {},
        }: {
          url: string;
          _highlightResult: { hierarchy: { [key: string]: { value: string } } };
          _snippetResult: { content?: { value: string } };
        }) => {
          const titles = Object.keys(hierarchy).map((key) =>
            sanitizeValue(hierarchy[key]!.value)
          );
          return {
            title: titles.pop()!,
            url: processSearchResultUrl(url),
            summary: snippet.content
              ? `${sanitizeValue(snippet.content.value)}...`
              : '',
            breadcrumbs: titles,
          };
        }
      );

      searchResultStateDispatcher({
        type: 'update',
        value: {
          items,
          query,
          totalResults: nbHits,
          totalPages: nbPages,
          lastPage: page,
          hasMore: nbPages > page + 1,
          loading: false,
        },
      });
    }
  );

  const [loaderRef, setLoaderRef] = useState<HTMLDivElement | null>(null);
  const prevY = useRef(0);
  const observer = useRef(
    ExecutionEnvironment.canUseIntersectionObserver &&
      new IntersectionObserver(
        (entries) => {
          const {
            isIntersecting,
            boundingClientRect: { y: currentY },
          } = entries[0]!;

          if (isIntersecting && prevY.current > currentY) {
            searchResultStateDispatcher({ type: 'advance' });
          }

          prevY.current = currentY;
        },
        { threshold: 1 }
      )
  );

  const getTitle = () =>
    searchQuery
      ? translate(
          {
            id: 'theme.SearchPage.existingResultsTitle',
            message: 'Search results for "{query}"',
            description: 'The search page title for non-empty query',
          },
          {
            query: searchQuery,
          }
        )
      : translate({
          id: 'theme.SearchPage.emptyResultsTitle',
          message: 'Search the documentation',
          description: 'The search page title for empty query',
        });

  const makeSearch = useEvent((page: number = 0) => {
    algoliaHelper.addDisjunctiveFacetRefinement('docusaurus_tag', 'default');
    algoliaHelper.addDisjunctiveFacetRefinement('language', currentLocale);

    Object.entries(docsSearchVersionsHelpers.searchVersions).forEach(
      ([pluginId, searchVersion]) => {
        algoliaHelper.addDisjunctiveFacetRefinement(
          'docusaurus_tag',
          `docs-${pluginId}-${searchVersion}`
        );
      }
    );

    algoliaHelper.setQuery(searchQuery).setPage(page).search();
  });

  useEffect(() => {
    if (!loaderRef) {
      return undefined;
    }
    const currentObserver = observer.current;
    if (currentObserver) {
      currentObserver.observe(loaderRef);
      return () => currentObserver.unobserve(loaderRef);
    }
    return () => true;
  }, [loaderRef]);

  useEffect(() => {
    searchResultStateDispatcher({ type: 'reset' });

    if (searchQuery) {
      searchResultStateDispatcher({ type: 'loading' });

      setTimeout(() => {
        makeSearch();
      }, 300);
    }
  }, [searchQuery, docsSearchVersionsHelpers.searchVersions, makeSearch]);

  useEffect(() => {
    if (!searchResultState.lastPage || searchResultState.lastPage === 0) {
      return;
    }

    makeSearch(searchResultState.lastPage);
  }, [makeSearch, searchResultState.lastPage]);

  return (
    <Layout>
      <Head>
        <title>{useTitleFormatter(getTitle())}</title>
        {/*
         We should not index search pages
          See https://github.com/facebook/docusaurus/pull/3233
        */}
        <meta property="robots" content="noindex, follow" />
      </Head>

      <div className={styles.searchBarWrapper}>
        <form
          className={`container ${styles.searchBar}`}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="row">
            <div className="col col--2"></div>
            <div className={clsx('col', 'col--8', styles.searchQueryColumn)}>
              <i
                data-v-8fa474e2=""
                className="material-symbols-outlined"
                aria-hidden="true"
              >
                search
              </i>
              <input
                type="search"
                name="q"
                className={styles.searchQueryInput}
                placeholder={translate({
                  id: 'theme.SearchPage.inputPlaceholder',
                  message: 'Search Teradata...',
                  description: 'The placeholder for search page input',
                })}
                aria-label={translate({
                  id: 'theme.SearchPage.inputLabel',
                  message: 'Search',
                  description: 'The ARIA label for search page input',
                })}
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
                autoComplete="off"
                autoFocus
              />
            </div>

            {docsSearchVersionsHelpers.versioningEnabled && (
              <SearchVersionSelectList
                docsSearchVersionsHelpers={docsSearchVersionsHelpers}
              />
            )}
          </div>
        </form>
      </div>
      <div className={`container margin-bottom--lg`}>
        <div className="row">
          <div className="col col--2"></div>
          <div className={clsx('col', 'col--8', styles.searchResultsColumn)}>
            {!!searchResultState.totalResults &&
              documentsFoundPlural(searchResultState.totalResults)}
          </div>
          <div className="col col--2"></div>
        </div>

        {searchResultState.items.length > 0 ? (
          <main>
            {searchResultState.items.map(
              ({ title, url, summary, breadcrumbs }, i) => (
                <div className="row" key={i}>
                  <div className="col col--2"></div>
                  <Link className={styles.card} to={url}>
                    <article
                      className={clsx(
                        'col',
                        'col--8',
                        'doc-card',
                        styles.searchResultItem
                      )}
                    >
                      <Heading
                        as="h2"
                        className={styles.searchResultItemHeading}
                        dangerouslySetInnerHTML={{ __html: title }}
                      ></Heading>

                      {summary && (
                        <p
                          className={styles.searchResultItemSummary}
                          // Developer provided the HTML, so assume it's safe.
                          // eslint-disable-next-line react/no-danger
                          dangerouslySetInnerHTML={{ __html: summary }}
                        />
                      )}
                    </article>
                  </Link>
                  <div className="col col--2"></div>
                </div>
              )
            )}
          </main>
        ) : (
          [
            searchQuery && !searchResultState.loading && (
              <div className="row" key="no-results">
                <div className="col col--2"></div>
                <p className="col col--8">
                  <Translate
                    id="theme.SearchPage.noResultsText"
                    description="The paragraph for empty search result"
                  >
                    No results were found
                  </Translate>
                </p>
              </div>
            ),
            !!searchResultState.loading && (
              <div key="spinner" className={styles.loadingSpinner} />
            ),
          ]
        )}

        {searchResultState.hasMore && (
          <div className={styles.loader} ref={setLoaderRef}>
            <Translate
              id="theme.SearchPage.fetchingNewResults"
              description="The paragraph for fetching new search results"
            >
              Fetching new results...
            </Translate>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default function SearchPage(): JSX.Element {
  return (
    <HtmlClassNameProvider className="search-page-wrapper">
      <SearchPageContent />
    </HtmlClassNameProvider>
  );
}
