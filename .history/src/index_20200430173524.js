import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom'
import * as utils from './utils/utils'
import 'antd-mobile/dist/antd-mobile.less'
import moment from 'moment'
import 'moment/locale/zh-cn'
import './styles/common.less'
import './index.less';
import App from './App';
import { createStore ,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import reducer from './index.reducer'
import * as serviceWorker from './serviceWorker';
moment.locale('zhCN')
const rootEl = document.getElementById('root');
//创建store
const store = createStore(reducer,applyMiddleware(thunk));
let app=(
  // <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  // </React.StrictMode>
)

ReactDOM.render(
  app,
  rootEl
);

if (module.hot) {
  module.hot.accept('./App',()=>{
    const NextApp = require('./App').default;
    let app2=(
      // <React.StrictMode>
        <Provider store={store}>
          <NextApp/>
        </Provider>
      // </React.StrictMode>
    )
    ReactDOM.render(
      app2,
      rootEl
    );
  })
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
