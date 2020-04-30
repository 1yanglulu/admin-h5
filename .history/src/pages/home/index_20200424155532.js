import React from 'react';
import * as utils from '../../utils/utils'
import { throwError } from 'rxjs';
class Home extends React.Component{
  constructor(props){
    super(props)
    this.state={}
  }
  componentDidMount(){
    console.log("home",this.props)
    try{
      utils.apiClient('get','http://localhost:3000/list.json').then((res)=>{
        console.log("home页面数据",res)
      })
    }catch(err){
      throwError('请求逻辑错误')
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