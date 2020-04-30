import React from 'react';
import { List, Switch, Calendar } from 'antd-mobile';
import * as utils from '../../utils/utils'
import Calendar from '../../components/calendar'
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

        </div>
      )
    }
}
export default Home