import { gql } from '@apollo/client';

export const LOAD_ALL_USERS = gql`
  {
    users {
      firstName
      lastName
      id
    }
  }
`

export const LOAD_SELECTED_USER = gql`
  query ($id: ID!) {
    user (id: $id) {
      firstName
      lastName
      id
      journalEntries {
        description
        date
        id
      }
      seeds {
        name
        notes
      }
    }
  }
`