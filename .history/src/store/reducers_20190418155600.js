import { combineReducers } from "redux";


const initialState = [
  {
    counter: 0
  }
]
function addCounter(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT': 
      return Object.assign({}, state, {conter: state.counter + 1})
    case 'DECREMENT': 
      return Object.assign({}, state, {conter: state.counter - 1})
    default: 
      return state
  }
} 

const mapStateToProps = state => {
  return {
    counter: state.counter + 1
  }
}
export const mapStateToProps
export default combineReducers({
  addCounter
})