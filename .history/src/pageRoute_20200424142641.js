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

const Home = React.lazy(() => import('./pages/Home'));
const MyCenter = React.lazy(() => import('./pages/MyCenter'));
const ParamPage = React.lazy(() => import('./pages/ParamTest'));

export default  function RootContainer({history}){
  return(
    <React.Suspense fallback={<div>loading...</div>}>
      <Router history={history}>
        <Switch>
          <Route path="/user" render={(props) => <Home {...props} />}/>
          <Route path="/myCenter" render={(props) => <MyCenter {...props} />}/>
          <Route path="/param/:id" render={(props) => <ParamPage {...props} />}/>
        </Switch>
      </Router>
    </React.Suspense>
  )
}

//  <redirect from='/home' to="/activity/home" auto />
// <Route path="/my" render={(props) => <MyCenter {...props} />}/>
