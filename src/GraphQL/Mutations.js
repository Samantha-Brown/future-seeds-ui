import { gql } from '@apollo/client'

export const CREATE_USER_MUTATION = gql`
  mutation (
    $firstName: String!
    $lastName: String!
    $city: String!
    $state: String!
    $intentions: String!
  ){
    createUser(
        firstName: $firstName
        lastName: $lastName
        city: $city
        state: $state
        intentions: $intentions
      )
    {
      firstName
      lastName
      city
      state
      intentions
      id
    }
  }
`

// line 19-23 is the spot what happens after the mutation
// what is returned

export const CREATE_JOURNAL_MUTATION = gql`
  mutation (
    $userId: ID!
    $date: String!
    $description: String!
  ){
    createJournalEntry(
        userId: $userId
        date: $date
        description: $description
      )
    {
      userId
      date
      description
    }
  }
`