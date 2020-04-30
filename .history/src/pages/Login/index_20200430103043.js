import React from 'react';
import { InputItem, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';

class Login extends React.Component{

  handleClick = () => {
    this.inputRef.focus();
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
        >受控组件</InputItem>
      </div>
    )
  }
}
const LoginWrapper = createForm()(Login);
export default LoginWrapper;