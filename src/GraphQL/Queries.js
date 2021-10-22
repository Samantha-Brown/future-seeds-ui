import {gql} from '@apollo/client'

export const LOAD_ALL_USERS = gql`
{
  users {
    firstName
    lastName
    id
    intentions
    seeds {
      name
    }
    journalEntries {
      description
      date
    }
  }
}
`