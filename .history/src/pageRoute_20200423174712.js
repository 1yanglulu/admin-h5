import React, {Component, Suspense, lazy} from 'react';
import { Link, Redirect, Route, Router, Switch } from 'react-router-dom';

const layLoader=function (pageUrl) {
  let comp=lazy(()=>import(pageUrl) )
}