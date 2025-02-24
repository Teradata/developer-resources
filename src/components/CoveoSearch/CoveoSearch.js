import { useEffect } from 'react';

function CoveoSearch() {
  useEffect(() => {
    const hspApiKey = 'xx4ac4bcbd-1c8b-4482-b60b-bc0ebdc55e01';
    const siApiKey = 'xx116e6fc7-3430-4f29-9115-fde53bc5cd24';
    const orgId = 'teradataxrkwxj74';
    const siPageId = 'cda56b93-b731-4e51-9a46-6a2498b40cb0';
    const orgEndpont = `https://${orgId}.admin.org.coveo.com`;
    const redirectionUrl = '/coveo-search';

    function isSearchPage() {
      return window.location.href.indexOf('/coveo-search') !== -1;
    }

    function injectExternalSearchbox(searchboxID) {
      const box = document.createElement('atomic-search-box');
      box.setAttribute('clear-filters', 'false');
      const wrapper = document.createElement('atomic-external');
      wrapper.appendChild(box);
      document.getElementById(searchboxID)?.appendChild(wrapper);
    }

    async function initSearchBox() {
      const searchInterface = document.querySelector("atomic-search-interface#searchbox");
      if (searchInterface) {
        await searchInterface.initialize({
          accessToken: siApiKey,
          organizationId: orgId,
          organizationEndpoints: { admin: orgEndpont },
        });

        searchInterface.querySelector('atomic-search-box').redirectionUrl = redirectionUrl;
      }
    }

    async function initSearchPage() {
      const hsp = document.querySelector('atomic-hosted-page#searchPage');
      if (hsp) {
        await hsp.initialize({
          accessToken: hspApiKey,
          organizationId: orgId,
          organizationEndpoints: { admin: orgEndpont },
          pageId: siPageId
        });
      }

      await customElements.whenDefined("atomic-search-interface");

      const searchInterface = document.querySelector("atomic-search-interface#search");
      injectExternalSearchbox('atomicExternalSearchBox');

      if (searchInterface) {
        await searchInterface.initialize({
          accessToken: siApiKey,
          organizationId: orgId,
          organizationEndpoints: { admin: orgEndpont }
        });

        searchInterface.executeFirstSearch();
      }
    }

    if (isSearchPage()) {
      initSearchPage();
    } else {
      initSearchBox();
    }
  }, []);

  return (
    <>
      {/* Search Box */}
      <div id="atomicExternalSearchBox"></div>
      <div>
        <atomic-search-interface id="searchbox">
          <atomic-search-box clear-filters="false"></atomic-search-box>
        </atomic-search-interface>
      </div>

      {/* Search Page */}
      <atomic-hosted-page id="searchPage"></atomic-hosted-page>
    </>
  );
}

export default CoveoSearch;
