import React from 'react';

class MyCenter extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  componentDidMount(){
    console.log("myCenter",this.props)
  }
  goForHome=()=>{
    this.props.history.push('/user')
  }
  render(){
    return(
      <div id="my">
        这是我的个人中心页面1111
        <button onClick={this.goForHome}>跳转home页面</button>
      </div>
    )
  }
}
export default MyCenter