import React from 'react';
import { List, Switch, Calendar } from 'antd-mobile';

class CalendarComponent extends React.Component{

  render(){
    const {props}=this
    return(
      <Calendar
        {...props.config}
        visible={props.visible}
        onCancel={props.onCancel}
        onConfirm={props.onConfirm}
        onSelectHasDisableDate={props.onSelectHasDisableDate}
        getDateExtra={props.getDateExtra}
        defaultDate={props.defaultDate}
        minDate={props.minDate}
        maxDate={props.maxDate}
      />
    )
  }
}
export default CalendarComponent;