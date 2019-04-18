import { combineReducer, createStore } from 'redux'
import {connect} from 'react-redux'

const reducer = combineReducer({})
const store = createStore(reducer)
store.subscribe(() => console.log(store.getState()))


export default store

// import { createStore } from 'redux'

// function counter(state = 0, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1
//     case 'DECREMENT':
//       return state - 1
//     default:
//       return state
//   }
// }

// let store = createStore(counter)
// store.subscribe(() => console.log(store.getState()))

// export default store
