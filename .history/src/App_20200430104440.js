import React from 'react';
// import logo from './logo.svg';
// import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import {Router,withRouter} from 'react-router-dom';
import RootContainer from './pageRoute'
import * as utils from './utils/utils'
import Main from './pages/MainCenter'
import Login from './pages/Login'
import './App.less';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      isLogin:false
    }
  }
  getAuth=()=>{
    let loginData=localStorage.getItem('isLogin');
    if(loginData){
      loginData=JSON.parse(loginData)
      this.setState({
        isLogin:loginData.isLogin
      })
    }else{
      this.setState({
        isLogin:false
      })
    }
  }
  authen=()=>{
    return(
      <Main>
       {RootContainer(this.props)}
      </Main>
    )
  }
  unAuthen=()=>{
    return(
      <Login/>
    )
  }
  componentDidMount(){

    console.log('this.props====',this.props.tiger,this.props)
    this.props.FetchFriends()
    // console.log("----------",this.props.history,RootContainer())
  }
        //   <React.Suspense fallback={<div>loading...</div>}>
        //     <Home/>
        // </React.Suspense>
  render(){
    const { PayIncrease, PayDecrease } = this.props;
    return(
      <div styleName="App">
      {this.state.isLogin?this.authen():this.unAuthen()}
      <h2>{this.props.tiger}</h2>
        <button onClick={PayIncrease}>+++++</button>
        <button onClick={PayDecrease}>-----</button>
      </div>
    )
  }
}
//需要渲染什么数据
function mapStateToProps(state,ownProps) {
  console.log("ownProps",state,ownProps)
  return {
    tiger: state.num
  }
}
//需要触发什么行为
function mapDispatchToProps(dispatch,ownProps) {
  return {
    PayIncrease: () => dispatch({ type: '加'}),
    PayDecrease: () => dispatch({ type: '减'}),
    FetchFriends:()=>{
      dispatch({type:'FETCH_FRIENDS'});
      return utils.apiClient.get('http://localhost:3000/list.json',{params:{}}).then(res=>{
        console.log("home页面请求结果",res)
        dispatch({type:'RECEIVE_FRIENDS',payload:res})
        dispatch({type:'STOP_FETCH_FRIENDS'});
      })
    }
  }
}

export default withRouter(App=connect(mapStateToProps, mapDispatchToProps)(App));

// 模块热替换的 API
if (module.hot) {
    module.hot.accept();
}
      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header>