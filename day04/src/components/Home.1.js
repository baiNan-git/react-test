import React, { Component } from 'react';
import Prolist from '@/components/Prolist'
class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      prolist: [],
      count: 0
    }
  }
  componentDidMount () {
    fetch('http://www.daxunxun.com/douban').then(res => res.json()).then(data => {
      // console.log(data)
      this.setState({
        prolist: data
      })
    })
  }
  getCountFn (data) {
    this.setState ({
      count: data
    }) 
  }
  render () {
    return (
      <div className = 'box'>
        <header className = 'header'>头部</header>
        <section className= 'content'>
          { this.state.count }
          <Prolist  prolist = { this.state.prolist } getCountFn = { this.getCountFn.bind(this) } /> 
        </section>
      </div>
    )
  }
}

export default Com;