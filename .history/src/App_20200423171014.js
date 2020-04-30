import React from 'react';
// import logo from './logo.svg';
// import CSSModules from 'react-css-modules';
import './App.less';

function App() {
  return (
    <div styleName="App">
      hello vw-layout
      <div styleName="haha">hahahhahahahhahah</div>
      <If condition={true}>
        <span styleName="nihao row-cell">
          你好你好你好你好111111111
        </span>
      </If>
      <div styleName="heihei">
        <div>111</div>
        <div>2222</div>
        <img src="./assets/images/banner2.jpeg" alt="" styleName="oneImg"/>
      </div>
    </div>
  );
}

export default App;

// 模块热替换的 API
if (module.hot) {
    module.hot.accept();
}
      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header>