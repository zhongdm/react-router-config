import {INCREMENT } from './const'

const actions = [
  {
    type: INCREMENT,
    // text: '12'
    completed: true
  }
]
// 封装一个函数

function increment () {
  return {
    type: INCREMENT,
    completed: true
  }
}

export {
  increment
}