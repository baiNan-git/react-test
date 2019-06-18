import React from 'react';
import Prolist from '@/components/common/Prolist';
// import Banner from '@/components/common/Banner';
import { Tabs } from 'antd-mobile';

class Com extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      prolist: [],
      bannerlist: [1,2],
      tabs: [
        { title: '精选'},
        { title: '女装'},
        { title: '美食'},
        { title: '男装'},
        { title: '美妆'},
        { title: '居家日用'},
        { title: '鞋品'},
        { title: '数码家电'},
        { title: '内衣'},
        { title: '箱包'},
        { title: '配饰'},
      ],
      activeIndex: 0
    }
  }
  componentDidMount () {
    fetch('http://www.daxunxun.com/banner').then(res => res.json()).then(data => {
      this.setState({
        bannerlist: data
      })
    })
    fetch('api/index.php?r=index/ajaxnew&page=1').then(res => res.json()).then(data => {
      console.log(data.data.data)
      this.setState({
        prolist: data.data.data
      })
    })
  }
  renderContent () {
    // console.log(this)
    // return (
    //   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
    //     <p>Content of {tab.title}</p>
    //   </div>
    // )
    let ta = <div>还没有数据</div>
    this.state.activeIndex === 0 ? ta = <Prolist prolist = { this.state.prolist }  { ...this.props } bannerlist = { this.state.bannerlist } { ...this.props }/> : ta = <div></div>;
    return ta
  }
  ClickTab (tabs, index) {
    // console.log(index)
    this.setState({
      activeIndex: index
    })
  }
  render () {
    return(
      <div className="box">
        <header className="header">
          <div className='search'>
            <span className = 'iconfont icon-xiazai17'></span>
            <p>输入您需要的商品名称</p>
          </div>
          <div className='cartshop'>
            <span className = 'iconfont icon-gouwuche'></span>
          </div>
        </header>
        <section className="content">
          <Tabs tabs={this.state.tabs} 
          onChange = {this.ClickTab.bind(this) } 
          onTabClick = { this.ClickTab.bind(this) }
          tabBarBackgroundColor = '#fff'
          tabBarActiveTextColor = '#FF1493'
          tabBarInactiveTextColor = '#666'
          tabBarUnderlineStyle = 'overline'
          renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}>
            {this.renderContent.bind(this)}
          </Tabs>
          {/* <Banner bannerlist = { this.state.bannerlist }/> */}
          {/* <Prolist prolist = { this.state.prolist } { ...this.props }/> */}
          </section>
      </div>
    )
  }
}

export default Com;