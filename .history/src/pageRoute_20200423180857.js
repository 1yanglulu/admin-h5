import React, {Component, Suspense, lazy} from 'react';
import { Link, Redirect, Route, Router, Switch } from 'react-router-dom';

let layLoader=function ({loader}) {
  let comp=lazy(loader)
  comp= (<Suspense fallback={<div>loading...</div>}>
            <comp />
        </Suspense>)
  return comp
}

const $$home=layLoader({
  async loader() {
    return await import(/* webpackChunkName: "home" */ './pages/home');
  },
})

export default  function RootContainer({history}){
  return(
    <Router history={history}>
      <Switch>
        <redirect from='/home' to="/activity/home" auto />
      </Switch>
    </Router>
  )
}


