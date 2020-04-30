import React, {
  Suspense,
  lazy
} from 'react';
import {
  Link,
  Redirect,
  Route,
  HashRouter as Router,
  Switch
} from 'react-router-dom';

const Home = React.lazy(() => import('./pages/home'));
const MyCenter = React.lazy(() => import('./pages/myCenter'));

export default  function RootContainer(){
  return(
    <React.Suspense fallback={<div>loading...</div>}>
      <Router >
        <Switch>
          <Route path="/user" render={(props) => <Home {...props} />}/>
          <Route path="/myCenter" render={(props) => <myCenter {...props} />}/>
        </Switch>
      </Router>
    </React.Suspense>
  )
}

//  <redirect from='/home' to="/activity/home" auto />
// <Route path="/my" render={(props) => <MyCenter {...props} />}/>
