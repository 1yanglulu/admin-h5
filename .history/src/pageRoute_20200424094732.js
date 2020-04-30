import React, {Suspense, lazy} from 'react';
import { Link, Redirect, Route, Router, Switch } from 'react-router-dom';

function layLoader ({loader}) {
  let comp=lazy(loader)
  comp= (<Suspense fallback={<div>loading...</div>}>
            <comp />
        </Suspense>)
  return comp
}

const $$Home=layLoader({
  loader:async ()=> {
   return await import(/* webpackChunkName: "home" */ './pages/home');
  },
})

export default  function RootContainer(){
  return(
    // <Router>
      <Switch>
        <Route path="/user" render={(props) => <$$Home {...props} />}/>
      </Switch>
    // </Router>
  )
}

//  <redirect from='/home' to="/activity/home" auto />
