

function addCounter(state, action) {
  switch(action.type) {
    case 'increment': 
      return state + 1
  }
} 