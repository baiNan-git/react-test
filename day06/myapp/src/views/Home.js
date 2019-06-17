import React from 'react';
import Prolist from '@/components/common/Prolist';

class Com extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      prolist: []
    }
  }
  componentDidMount () {
    console.log(this.props)
    fetch('http://www.daxunxun.com/douban').then(res => res.json()).then(data => {
      this.setState({
        prolist: data
      })
    })
  }
  render () {
    return(
      <div className="box">
        <header className="header">首页头部</header>
        <section className="content">
          <Prolist prolist = { this.state.prolist } { ...this.props }/>
          </section>
      </div>
    )
  }
}

export default Com;