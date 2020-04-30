import React from './node_modules/react';

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state={}
  }
  componentDidMount(){
    console.log("home",this.props)
  }
    render(){
      return(
        <div id="home">
          <div>我是home页面</div>
        </div>
      )
    }
}
export default Home