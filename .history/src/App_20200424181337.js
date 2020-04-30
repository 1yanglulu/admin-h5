import React from 'react';
// import logo from './logo.svg';
// import CSSModules from 'react-css-modules';

import { connect } from 'react-redux';
import {Router,withRouter} from 'react-router-dom';
import RootContainer from './pageRoute'
// import Home from './pages/home'
import './App.less';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  componentDidMount(){
    // console.log("----------",this.props.history,RootContainer())
  }
        //   <React.Suspense fallback={<div>loading...</div>}>
        //     <Home/>
        // </React.Suspense>
  render(){
    return(
      <div styleName="App">
      {RootContainer(this.props)}
      </div>
    )
  }
}

export default withRouter(App);

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