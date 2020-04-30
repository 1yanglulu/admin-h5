import React from 'react';
import * as utils from '../../utils/utils'
import { Button, List } from 'antd-mobile';
import Calendar from '../../components/calendar'
import icon1 from '../../assets/images/banner5.jpg';
import './index.less'
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
  calendarHandler=()=>{

  }
    render(){
      return(
        <div id="home">
          <div>我是home页面1111222</div>
          <Calendar/>
          <Button type="ghost" size="small" inline>small</Button>
          <Button type="primary" size="small" inline>small</Button>
          <img src={icon1} alt="" styleName="iconImg"/>
        </div>
      )
    }
}
export default Home
