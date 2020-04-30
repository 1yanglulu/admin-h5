import React, {Component, Suspense, lazy} from 'react';
import { Link, Redirect, Route, Router, Switch } from 'react-router-dom';

let layLoader=function (pageUrl) {
  let comp=lazy(()=>import(pageUrl) )
  comp= (<Suspense fallback={<div>loading...</div>}>
            <comp />
        </Suspense>)
}