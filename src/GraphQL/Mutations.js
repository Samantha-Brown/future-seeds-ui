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
      id
    }
  }
`

export const CREATE_SEED_MUTATION = gql`
mutation (
    $name: String!
    $plantingDepth: String!
    $daysToGerminate: String!
    $timeToHarvest: String!
    $datePlanted: String!
    $sunExposure: String!
    $expectedPlantHeight: String!
    $notes: String!
    $userId: ID!
  ){
    createSeed(
      name: $name
      plantingDepth: $plantingDepth
      daysToGerminate: $daysToGerminate
      timeToHarvest: $timeToHarvest
      datePlanted: $datePlanted
      sunExposure: $sunExposure
      expectedPlantHeight: $expectedPlantHeight
      notes: $notes
      userId: $userId
    )
    {
      id
    }
  }
`