import React from 'react';
// import logo from './logo.svg';
// import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import {Router,withRouter} from 'react-router-dom';
import RootContainer from './pageRoute'
// import Home from './pages/home'
import './App.less';


class App extends React.Component{
  // constructor(props){
  //   super(props)
  //   this.state={

  //   }
  // }
  componentDidMount(){

    console.log('this.props====',this.props.tiger,this.props)
    // console.log("----------",this.props.history,RootContainer())
  }
        //   <React.Suspense fallback={<div>loading...</div>}>
        //     <Home/>
        // </React.Suspense>
  render(){
    const { PayIncrease, PayDecrease } = this.props;
    return(
      <div styleName="App">
      {RootContainer(this.props)}
      <h2>{this.props.tiger}</h2>
        <button onClick={PayIncrease}>+++++</button>
        <button onClick={PayDecrease}>-----</button>
      </div>
    )
  }
}
//需要渲染什么数据
function mapStateToProps(state,ownProps) {
  console.log("ownProps",ownProps)
  return {
    tiger: state
  }
}
//需要触发什么行为
function mapDispatchToProps(dispatch,ownProps) {
  return {
    PayIncrease: () => dispatch({ type: '加' }),
    PayDecrease: () => dispatch({ type: '减' })
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