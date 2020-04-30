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

const Home = React.lazy(() => import('./pages/home'));
const MyCenter = React.lazy(() => import('./pages/myCenter'));

export default  function RootContainer({history}){
  return(
    <React.Suspense fallback={<div>loading...</div>}>
      <Router history={history}>
        <Switch>
          <Route path="/user" component={Home}/>
          <Route path="/myCenter" render={(props) => <MyCenter {...props} />}/>
        </Switch>
      </Router>
    </React.Suspense>
  )
}

//  <redirect from='/home' to="/activity/home" auto />
// <Route path="/my" render={(props) => <MyCenter {...props} />}/>
