import React from 'react';
import { InputItem,Button, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';

class Login extends React.Component{

  handleClick = () => {
    this.labelFocusInst.focus();
  }
  render(){
    const { getFieldProps } = this.props.form;
    return(
      <div>
        <InputItem
          {...getFieldProps('userName', {
            initialValue: 'lulu',
          })}
          type="userName"
          placeholder="请输入账号"
          ref={el => this.labelFocusInst = el}
        >账号</InputItem>
        <WhiteSpace />
        <InputItem
          {...getFieldProps('password')}
          type="password"
          placeholder="****"
        >密码</InputItem>
      </div>
    )
  }
}
const LoginWrapper = createForm()(Login);
export default LoginWrapper;