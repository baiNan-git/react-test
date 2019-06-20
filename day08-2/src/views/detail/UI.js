import React, { Component } from 'react';

class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: ''
    }
  }
  componentDidMount () {
    this.props.getDetailprolist()
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props)
    console.log(nextProps)
    const id  = nextProps.match.params.id;
    console.log(nextProps.detailprolist)
    
    for (let i = 0; i<nextProps.detailprolist.length; i++) {
      if (nextProps.detailprolist[i].id === id) {
        this.setState({
          title: nextProps.detailprolist[i].title
        })
      }
    }
  }

  render () {
    return(
      <div className = 'box'>
        <header className = 'header'>详情页头部</header>
        <section className = 'content'>
          { this.state.title }
        </section>
      </div>
    )
  }
}

export default Com