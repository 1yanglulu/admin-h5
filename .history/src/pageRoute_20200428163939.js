import React, {
  Suspense,
  lazy
} from 'react';
import {
  Link,
  Redirect,
  Route,
  Router,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux';

// //需要渲染什么数据
function mapStateToProps(state,ownProps) {
  console.log("ownProps",state,ownProps)
  return {
    isMobile:state.isFetching,
  }
}
const Home = React.lazy(() => import('./pages/Home'));
const MyCenter = React.lazy(() => import('./pages/MyCenter'));
const ParamPage = React.lazy(() => import('./pages/ParamTest'));

export default  function RootContainer({history}){
  return(
    <React.Suspense fallback={<div>加载中...</div>}>
      <Router history={history}>
        <Switch>
          <Route path="/user" component={connect(mapStateToProps)(Home)}/>
          <Route path="/myCenter" render={(props) => <MyCenter {...props} />}/>
          <Route path="/param/:id" render={(props) => <ParamPage {...props} />}/>
        </Switch>
      </Router>
    </React.Suspense>
  )
}

//  <redirect from='/home' to="/activity/home" auto />
// <Route path="/my" render={(props) => <MyCenter {...props} />}/>
