import React from 'react';
import { List, Switch, Calendar } from 'antd-mobile';

class CalendarComponent extends React.Component{

  render(){
    const {props}=this
    return(
      <Calendar
        {...props.config}
        visible={props.show}
        onCancel={props.onCancel}
        onConfirm={props.onConfirm}
        onSelectHasDisableDate={props.onSelectHasDisableDate}
        getDateExtra={props.getDateExtra}
        defaultDate={props.defaultDate}
        minDate={new Date(+props.now - 5184000000)}
        maxDate={new Date(+props.now + 31536000000)}
      />
    )
  }
}
export default CalendarComponent;