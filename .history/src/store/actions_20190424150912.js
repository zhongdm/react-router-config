import { INCREMENT, DECREMENT } from './const'

// const actions = [
//   {
//     type: INCREMENT,
//     // text: '12'
//     completed: true
//   }
// ]
// 封装一个函数
function increment () {
  return {
    type: INCREMENT
  }
}

function decrement () {
  return {
    type: DECREMENT
  }
}

export {
  increment,
  decrement
}