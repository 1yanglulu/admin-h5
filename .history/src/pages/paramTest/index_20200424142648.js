import React from './node_modules/react';

class Param extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  componentDidMount(){
    console.log("param",this.props.match.params.id,window.location.search)
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