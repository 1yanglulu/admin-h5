import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd-mobile/lib/locale-provider/zh_CN';
import moment from 'moment'
import 'moment/locale/zh-cn'
import './index.less';
import App from './App';
import * as serviceWorker from './serviceWorker';
moment.locale(zhCN)
let app=(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <Router>
        <App />
      </Router>
    </ConfigProvider>
  </React.StrictMode>
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
