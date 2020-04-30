import React from 'react';
import enUS from 'antd-mobile/lib/calendar/locale/en_US';
import zhCN from 'antd-mobile/lib/calendar/locale/zh_CN';
import Calendar from './calendar'

const extra = {
  '2017/07/15': { info: 'Disable', disable: true },
};
const now = new Date();
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 8)] = { info: 'Disable', disable: true };

Object.keys(extra).forEach((key) => {
  const info = extra[key];
  const date = new Date(key);
  if (!Number.isNaN(+date) && !extra[+date]) {
    extra[+date] = info;
  }
});
class CommonCalendar extends React.Component{
  originbodyScrollY = document.getElementsByTagName('body')[0].style.overflowY;
   constructor(props) {
    super(props);
    this.state = {
      en: false,
      show: false,
      config: {},
    };
  }
  onSelectHasDisableDate = (dates) => {
    console.warn('onSelectHasDisableDate', dates);
  }
  onConfirm = (startTime, endTime) => {
    document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
    this.setState({
      show: false,
      startTime,
      endTime,
    });
  }
  onCancel = () => {
    document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
    this.setState({
      show: false,
      startTime: undefined,
      endTime: undefined,
    });
  }
  getDateExtra = date => extra[+date];
  render(){
    return(
      <div id="cal">
        <Calendar/>
      </div>
    )
  }
}
export default CommonCalendar