import React from 'react';
import { InputItem,Button, WhiteSpace,Toast } from 'antd-mobile';
import { createForm,formShape } from 'rc-form';

class Login extends React.Component{
  static propTypes = {
    form: formShape,
  };
  handleClick = () => {
    this.labelFocusInst.focus();
  }
  loginHandler=()=>{
    this.props.form.validateFields((error, value) => {
      console.log(error, value);
      if(error){
        const errors=Object.values(error)
        Toast.fail(errors[0].errors[0].message)
        return
      }
    });
  }
  render(){
    let errors;
    const { getFieldProps , getFieldError} = this.props.form;
    return(
      <div>
        <InputItem
          {...getFieldProps('userName', {
            initialValue: 'lulu',
            rules: [{required: true,message: '请输入账号!'}],
          })}
          type="userName"
          placeholder="请输入账号"
          ref={el => this.labelFocusInst = el}
        >账号</InputItem>
        <WhiteSpace />
        <InputItem
          {...getFieldProps('password',{
            rules: [{required: true,message: '请输入密码!'}],
          })}
          type="password"
          placeholder="****"
        >密码</InputItem>
        {errors = getFieldError('required')}
         { errors ? errors.join(',') : null}
        <WhiteSpace />
        <Button onClick={this.loginHandler}>登录</Button>
      </div>
    )
  }
}
const LoginWrapper = createForm()(Login);
export default LoginWrapper;