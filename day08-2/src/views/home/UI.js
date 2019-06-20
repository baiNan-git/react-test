import React, { Component } from 'react';
import Banner from '@/components/Banner';
import Prolist from '@/components/Prolist';

class Com extends Component {
  
  componentDidMount () {
    this.props.getbannerlist()
    this.props.getprolist()
  }
  render () {
    return(
      <div className = 'box'>
        <header className = 'header'>首页头部</header>
        <section className = 'content'>
          <Banner bannerlist = { this.props.bannerlist} />
          <Prolist prolist = { this.props.prolist} { ...this.props }/>
        </section>
      </div>
    )
  }
}

export default Com