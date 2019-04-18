import { combineReducer, createStore } from 'redux'

const reducer = combineReducer({})
const store = createStore(reducer)
store.subscribe(() => console.log(store.getState()))


export default store