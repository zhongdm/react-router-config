

function addCounter(state, action) {
  switch(action.type) {
    case 'increment': 
      return state + 1
    default: 
      return state
  }
} 

export default addCounter