import React from 'react';
import { List, Switch, Calendar } from 'antd-mobile';
import * as utils from '../../utils/utils'

const extra = {
  '2017/07/15': { info: 'Disable', disable: true },
};
const now = new Date();
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 8)] = { info: 'Disable', disable: true };

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state={}
  }
  componentDidMount(){
    console.log("home",this.props,utils)
    try{
      utils.apiClient.get('http://localhost:3000/list.json',{params:{}}).then(res=>{
        console.log("home页面请求结果",res)
      })
    }catch(err){
      throw Error('请求逻辑错误')
    }
  }
    render(){
      return(
        <div id="home">
          <div>我是home页面</div>
          <Calendar
            {...this.state.config}
            visible={this.state.show}
            onCancel={this.onCancel}
            onConfirm={this.onConfirm}
            onSelectHasDisableDate={this.onSelectHasDisableDate}
            getDateExtra={this.getDateExtra}
            defaultDate={now}
            minDate={new Date(+now - 5184000000)}
            maxDate={new Date(+now + 31536000000)}
          />
        </div>
      )
    }
}
export default Home