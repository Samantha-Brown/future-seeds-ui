import user_list from '../fixtures/user_list.json';
import selected_user_data from '../fixtures/selected_user_data.json';


//Utility to match GraphQL mutation data based on the operation name
export const hasOperationName = (req, operationName) => {
  const { body } = req;
  return (
    body.hasOwnProperty('operationName') && body.operationName === operationName
    )
  }

// Alias Queries

export const aliasQuery = ( req, operationName ) => {

  if (hasOperationName(req, operationName) && operationName === 'getUsers') {

    req.alias = `gql${operationName}Query`;
    req.reply(res => {
      res.body.data = user_list;
    })
  }
  if (hasOperationName(req, 'getSelectedUser') && operationName == 'getSelectedUser') {
    req.body.variables.id = 11;
      req.alias = `gql${operationName}Query`;
      req.reply(res => {
        res.body.data = selected_user_data
      })
  }
}

// Alias mutation if operationName matches
export const aliasMutation = (req, operationName) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `gql${operationName}Mutation`;
  }
};
