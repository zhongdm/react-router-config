

const initialState = [
  {
    counter: 0
  }
]
function addCounter(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT': 
      return state.counter + 1
    case 'DECREMENT': 
      return state.counter - 1
    default: 
      return state.counter
  }
} 

export default addCounter