import React from "react";

import styles from './login.css';
import router from 'umi/router';

import { Login } from "ant-design-pro"
import { connect } from 'dva'

const { UserName, Password, Submit } = Login;

export default connect()(function ({dispatch}) {
  // let from = props.location.state.from || "/"; // 重定向地址

  const onSubmit = (err, values) => {
    console.log(err, values);

    if (!err) {

      //登录
      dispatch({ type: 'user/login', payload: values })
    }
  };


  return (
    <div className={styles.loginForm}>
      {/* logo */}
      <img className={styles.logo} alt='logo' />
      {/* 登录表单 */}
      <Login onSubmit={onSubmit}>
        <UserName
          name="username"
          placeholder="guest"
          rules={[{ required: true, message: "请输入用户名" }]}
        />
        <Password
          name="password"
          placeholder="guest"
          rules={[{ required: true, message: "请输入密码" }]}
        />
        <Submit>登录</Submit>
      </Login>
    </div>
  );
})
