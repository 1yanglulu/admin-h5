import React from 'react';

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state={}
  }
  componentDidMount(){
    console.log("home",this.props,this.props.location.state)
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