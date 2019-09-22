import { GET_DEFAULTSTATE, CHANGE_INPUT,  ADD_TODO, DEL_TODO } from './actionType';
import Axios from 'axios';

export const getDefaultState = (value) => ({
  type: GET_DEFAULTSTATE,
  value
})

// 网络请求写在action里面,thunk形式
// export const getDefaultState2 = () => {
//   return function(dispatch) {
//     Axios.get('https://easy-mock.com/mock/5d8616daef4e69787bdfa226/redux/initData')
//     .then(res => {
//       dispatch(getDefaultState(res.data.data))
//       console.log('axios 获取数据成功2：',res)
//     })
//     .catch(err => console.log('获取数据失败2：',err))
//   }
// }

// saga形式，具体见saga.js文件
export const getDefaultState3 = (value) => {
  return {
    type: GET_DEFAULTSTATE,
    value
  }
}

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value
})

export const addTodoAction = (value) => ({
  type: ADD_TODO,
  value
})

export const delTodoAction = (value) => ({
  type: DEL_TODO,
  value
})