import { gql } from '@apollo/client';

export const LOAD_ALL_USERS = gql`
  {
    users {
      firstName
      lastName
      id
      journalEntries {
        description
        date
      }
    }
  }
`
