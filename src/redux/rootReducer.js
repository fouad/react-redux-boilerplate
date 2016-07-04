import { combineReducers } from 'redux'
import merge from 'lodash/merge'
import { routerReducer as router } from 'react-router-redux'
import defaultState from './defaultState'

// Updates an entity cache in response to any action with response.entities.
function entities(state = defaultState, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }

  return state
}

export default combineReducers({
  entities,
  router
})
