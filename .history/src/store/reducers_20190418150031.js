

function addCounter(state, action) {
  switch(action.type) {
    case 'INCREMENT': 
      return state + 1
    default: 
      return state
  }
} 

export default addCounter