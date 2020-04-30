import React from 'react';

class Calendar extends React.Component{

  render(){
    const {props}=this
    return(
      <Calendar
        {....config}
        visible={this.state.show}
        onCancel={this.onCancel}
        onConfirm={this.onConfirm}
        onSelectHasDisableDate={this.onSelectHasDisableDate}
        getDateExtra={this.getDateExtra}
        defaultDate={now}
        minDate={new Date(+now - 5184000000)}
        maxDate={new Date(+now + 31536000000)}
      />
    )
  }
}