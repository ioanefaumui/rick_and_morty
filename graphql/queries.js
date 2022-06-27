import { gql } from "@apollo/client";

export const GET_CHARS_BY_NAME = gql`
  query GET_CHAR_BY_NAME($name: String) {
    characters(page: 1, filter: { name: $name }) {
      results {
        id
        name
        image
      }
    }
  }
`;

export const GET_CHARS_BY_NAME_AND_PAGE = gql`
  query GET_CHARS_BY_PAGE($page: Number!, $name: String!) {
    characters(page: $page, filter: { name: $name }) {
      results {
        name
        image
      }
    }
  }
`;
