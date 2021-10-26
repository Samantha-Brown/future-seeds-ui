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

export const CREATE_SEED_MUTATION = gql`
mutation (
    $name: String!
    $plantingDepth: String!
    $timeToHarvest: String!
    $datePlanted: Sting!
    $expectedPlantHeight: String!
    $notes: String!
    $sunExposure: String!
    $userId: ID!
  ){
    createSeedEntry(input {
        name: $name
        plantingDepth: $plantingDepth
        timeToHarvest: $timeToHarvest
        datePlanted: $datePlanted
        expectedPlantHeight: $expectedPlantHeight
        notes: $notes
        sunExposure: $sunExposure
        userId: $userID
    )}
    {
      name
      plantingDepth
      timeToHarvest
      datePlanted
      expectedPlantHeight
      notes
      sunExposure
      userId
    }
  }
`
// line 19-23 is the spot what happens after the mutation
// what is returned
