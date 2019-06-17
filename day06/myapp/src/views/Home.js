import React from 'react';
import Prolist from '@/components/common/Prolist';
import Banner from '@/components/common/Banner';
import { Tabs } from 'antd-mobile';

class Com extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      prolist: [],
      bannerlist: [],
      tabs: [
        { title: '1st Tab'},
        { title: '2st Tab'},
        { title: '3st Tab'},
        { title: '4st Tab'},
        { title: '5st Tab'},
        { title: '6st Tab'},
        { title: '7st Tab'},
        { title: '8st Tab'},
        { title: '9st Tab'},
      ],
      activeIndex: 0
    }
  }
  componentDidMount () {
    fetch('http://www.daxunxun.com/douban').then(res => res.json()).then(data => {
      this.setState({
        prolist: data
      })
    })
    fetch('http://www.daxunxun.com/banner').then(res => res.json()).then(data => {
      this.setState({
        bannerlist: data
      })
    })
  }
  renderContent (tab) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
        <p>Content of {tab.title}</p>
      </div>
    )
    // let ta = ''
    // this.state.activeIndex === 0 ? ta = <Com1 /> : ''
    // this.state.activeIndex === 1 ? ta = <Com2 /> : ''
    // this.state.activeIndex === 2 ? ta = <Com3 /> : ''
    // this.state.activeIndex === 3 ? ta = <Com4 /> : ''
    // this.state.activeIndex === 4 ? ta = <Com5 /> : ''
    // return ta
  }
  ClickTab (tabs, index) {
    console.log(index)
    this.setState({
      activeIndex: index
    })
  }
  render () {
    return(
      <div className="box">
        <header className="header">首页头部</header>
        <section className="content">
          <Tabs tabs={this.state.tabs} onChange = {this.ClickTab.bind(this) } onTabClick = { this.ClickTab.bind(this) }
          renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
            {this.renderContent}
          </Tabs>
          <Banner bannerlist = { this.state.bannerlist }/>
          <Prolist prolist = { this.state.prolist } { ...this.props }/>
          </section>
      </div>
    )
  }
}

export default Com;