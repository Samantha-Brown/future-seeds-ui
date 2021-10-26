import { gql } from '@apollo/client'

export const CREATE_USER_MUTATION = gql`
  mutation (
    $firstName: String!
    $lastName: String!
    $city: String!
    $state: String!
    $intentions: String!
  ){
    createUser(input: {
        firstName: $firstName
        lastName: $lastName
        city: $city
        state: $state
        intentions: $intentions
      })
      {
      firstName
      lastName
      city
      state
      intentions
    }
  }
`

// line 19-23 is the spot what happens after the mutation
// what is returned