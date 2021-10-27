import { gql } from '@apollo/client';

export const LOAD_ALL_USERS = gql`
  query getUsers {
    users {
      firstName
      lastName
      id
    }
  }
`

export const LOAD_SELECTED_USER = gql`
  query getSelectedUser ($id: ID!) {
    user (id: $id) {
      firstName
      lastName
      city
      state
      id
      journalEntries {
        description
        date
        id
      }
      seeds {
        name
        daysToGerminate
        plantingDepth
        timeToHarvest
        datePlanted
        expectedPlantHeight
        sunExposure
        notes
      }
    }
  }
`
