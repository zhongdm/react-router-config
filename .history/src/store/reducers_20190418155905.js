import { combineReducers } from "redux";


const initialState = [
  {
    counter: 0
  }
]
function addCounter(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT': 
    console.log('add', Object.assign({}, state, {conter: state.counter + 1}))
      return Object.assign({}, state, {conter: state.counter + 1})
    case 'DECREMENT': 
      return Object.assign({}, state, {conter: state.counter - 1})
    default: 
      return state
  }
} 


export default combineReducers({
  addCounter
})