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
    $datePlanted: String!
    $expectedPlantHeight: String!
    $daysToGerminate: String!
    $notes: String!
    $sunExposure: String!
    $userId: ID!
  ){
    createSeed(
        name: $name
        plantingDepth: $plantingDepth
        timeToHarvest: $timeToHarvest
        datePlanted: $datePlanted
        daysToGerminate: $daysToGerminate
        expectedPlantHeight: $expectedPlantHeight
        notes: $notes
        sunExposure: $sunExposure
        userId: $userId
    )
    {
      name
      plantingDepth
      timeToHarvest
      datePlanted
      expectedPlantHeight
      daysToGerminate
      notes
      sunExposure
      userId
    }
  }
`
// line 19-23 is the spot what happens after the mutation
// what is returned
