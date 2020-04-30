import React from 'react';

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state={}
  }
  UNSAFE_componentWillReceiveProps(nextprops){
    console.log(nextprops)
  }
  componentDidMount(){

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