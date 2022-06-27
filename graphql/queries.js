import { gql } from "@apollo/client";

export const GET_CHARS = gql`
  query GET_CHAR_BY_NAME($name: String, $species: String, $page: Int) {
    characters(page: $page, filter: { name: $name, species: $species }) {
      results {
        id
        image
        name
        status
        species
        created
        episode {
          id
        }
      }
      info {
        next
        prev
      }
    }
  }
`;
