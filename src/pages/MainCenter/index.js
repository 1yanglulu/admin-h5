import React from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';

class MainCenter extends React.Component {
  renderContent = tab =>
    (<div styleName=''>
      {this.props.children}
    </div>);
  tabChange=(tab,index)=>{
    console.log(tab,index)
  }
  render() {
    const tabs = [
      { title: '1st Tab' },
      { title: '2nd Tab' },
      { title: '3rd Tab' },
      { title: '4th Tab' },
      { title: '5th Tab' },
      { title: '6th Tab' },
      { title: '7th Tab' },
      { title: '8th Tab' },
      { title: '9th Tab' },
    ];

    return (
      <div>
        <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3}  onTabClick={this.tabChange}/>}>
          {this.renderContent()}
        </Tabs>
        <WhiteSpace />
      </div>
    );
  }
}
export default  MainCenter;

