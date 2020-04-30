import React from 'react';
import ReactDOM from 'react-dom';
// import 'antd/dist/antd.css';
// import { Provider } from 'react-redux'
// import store from './store'
import './index.less';
import App from './App';
import * as serviceWorker from './serviceWorker';

let app=(
  <React.StrictMode>
    <Provider store={store}>
    </Provider>
  </React.StrictMode>
)
ReactDOM.render(
    app,
  document.getElementById('root')
);

// 模块热替换的 API
if (module.hot) {
    module.hot.accept();
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
