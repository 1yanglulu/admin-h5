import React from 'react';
import * as utils from '../../utils/utils'
import Calendar from '../../components/calendar'
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
          <div>请选择日期区间</div>
        </div>
      )
    }
}
export default Home
