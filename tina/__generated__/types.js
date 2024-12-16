export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const DocPartsFragmentDoc = gql`
    fragment DocParts on Doc {
  __typename
  title
  description
  sidebar_label
  sidebar_position
  displayed_sidebar
  pagination_prev
  pagination_next
  tags
  body
}
    `;
export const QuickstartsPartsFragmentDoc = gql`
    fragment QuickstartsParts on Quickstarts {
  __typename
  title
  description
  sidebar_label
  sidebar_position
  displayed_sidebar
  pagination_prev
  pagination_next
  tags
  body
}
    `;
export const DocDocument = gql`
    query doc($relativePath: String!) {
  doc(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...DocParts
  }
}
    ${DocPartsFragmentDoc}`;
export const DocConnectionDocument = gql`
    query docConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: DocFilter) {
  docConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...DocParts
      }
    }
  }
}
    ${DocPartsFragmentDoc}`;
export const QuickstartsDocument = gql`
    query quickstarts($relativePath: String!) {
  quickstarts(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...QuickstartsParts
  }
}
    ${QuickstartsPartsFragmentDoc}`;
export const QuickstartsConnectionDocument = gql`
    query quickstartsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: QuickstartsFilter) {
  quickstartsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...QuickstartsParts
      }
    }
  }
}
    ${QuickstartsPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    doc(variables, options) {
      return requester(DocDocument, variables, options);
    },
    docConnection(variables, options) {
      return requester(DocConnectionDocument, variables, options);
    },
    quickstarts(variables, options) {
      return requester(QuickstartsDocument, variables, options);
    },
    quickstartsConnection(variables, options) {
      return requester(QuickstartsConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
