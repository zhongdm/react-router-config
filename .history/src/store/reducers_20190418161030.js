import { combineReducers } from "redux";


const initialState = 
  {
    counter: 0
  }

function addCounter(state = initialState, action) {
  switch(action.type) {
    
    case 'INCREMENT': 
      return state.counter + 1
    case 'DECREMENT': 
      return Object.assign({}, state, {counter: state.counter - 1})
    default: 
      return state
  }
} 


export default combineReducers({
  addCounter
})