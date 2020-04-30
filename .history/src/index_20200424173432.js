import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom'
import * as utils from './utils/utils'
import 'antd-mobile/dist/antd-mobile.less'
import moment from 'moment'
import 'moment/locale/zh-cn'
import './index.less';
import App from './App';
import * as serviceWorker from './serviceWorker';
moment.locale('zhCN')
let app=(
  // <React.StrictMode>
    <Router>
      <App />
    </Router>
  // </React.StrictMode>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept()
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
