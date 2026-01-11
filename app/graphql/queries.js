export const PRODUCTS_QUERY = `
  query {
    products(first: 20) {
      nodes {
        id
        title
      }
    }
  }
`;

export const VARIANTS_QUERY = `
  query {
    products(first: 20) {
      nodes {
        variants(first: 10) {
          nodes {
            id
            title
          }
        }
      }
    }
  }
`;

export const COLLECTIONS_QUERY = `
  query {
    collections(first: 20) {
      nodes {
        id
        title
      }
    }
  }
`;
