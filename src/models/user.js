import axios from 'axios'

import router from 'umi/router'

//localstorage
const userInfo = JSON.parse(localStorage.getItem('userInfo')) || {
  token: "",
  role: "",
  username: "",
  balance: 0
}


//servers api
function login(payload) {
  return axios.post('/api/login', payload)
}

export default {
  namespace: 'user',
  state: userInfo,
  effects: {
    //action:user/login
    *login({ payload }, { call, put }) {

      try {
        const { data: { code, data: userInfo } } = yield call(login, payload)


        if (code === 0) {
          //登录成功
          localStorage.setItem('userInfo', JSON.stringify(userInfo))
          yield put({ type: 'init', payload: userInfo })

          console.log('登陆成功');


          router.push('/')

        }
      } catch (error) {
        //登陆失败
      }
      
    }
  },

  reducers: {
    init(state, action) {
      return action.payload
    }
  }
}