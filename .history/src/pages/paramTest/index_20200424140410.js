import React from 'react';

class Param extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  componentDidMount(){
    console.log("param",this.props.history)
  }
  render(){
    return(
      <div id="param">
        我是param测试页面
      </div>
    )
  }
}
export default Param;