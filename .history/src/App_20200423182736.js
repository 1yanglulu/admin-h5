import React from 'react';
// import logo from './logo.svg';
// import CSSModules from 'react-css-modules';
import RootContainer from './pageRoute'
import './App.less';

function App() {
  return (
    <div styleName="App">
      <routes/>
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