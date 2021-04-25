import {gql} from '@apollo/client';

export const GET_PEOPLE = gql`
  query people($after: String, $limit: Int){
    allPeople(after: $after,first:$limit){
      people{
        id
        name
        species{
          name
        }
        homeworld{
          name
        }
      }
      pageInfo{
        endCursor
        hasNextPage
      }
    }
        
  }
  
`

/* 
//I previously tried to ask for all the data 
//in one query because the requirements did not 
//specify an error message to display the data per 
//character, but this results in an inconvenient 
//and impractical query.

export const GET_PEOPLE = gql`
  query people($after: String, $limit: Int){
    allPeople(after: $after,first:$limit){
      people{
        name
        species{
          name
        }
        homeworld{
          name
        }
        eyeColor
        hairColor
        skinColor
        birthYear
        vehicleConnection{
          edges{
            node{
              name
            }
          }
        }
      }
      pageInfo{
        endCursor
        hasNextPage
      }
    }
        
  }
  
`*/