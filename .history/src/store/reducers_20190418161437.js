import { combineReducers } from "redux";


const initialState = 
  {
    counter: 0
  }

function addCounter(state = initialState, action) {
  console.log(state, Object.assign({}, state, {counter: state.counter + 1}))
  switch(action.type) {
    case 'INCREMENT': 
      return Object.assign({}, state, {counter: state.counter + 1})
    case 'DECREMENT': 
      return Object.assign({}, state, {counter: state.counter - 1})
    default: 
      return state
  }
} 


export default combineReducers({
  addCounter
})