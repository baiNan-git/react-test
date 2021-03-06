import React from 'react';

class Com extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: ''
    }
  }
  componentDidMount () {
    console.log(this.props)
    const { id } = this.props.match.params;
    console.log(id)
    fetch('http://www.daxunxun.com/detail?id=' + id).then(res => res.json()).then(data => {
      console.log(data)
      this.setState({
        title: data[0].title
      })
    })
  }
  render () {
    return (
      <div className = 'container'>
        <div className = 'box'>
          <header className = 'header'>详情头部</header>
          <section className = 'content'>
          { this.state.title }
          </section>
        </div>
        <footer className = 'footer'>底部</footer>
      </div>
    )
  }
}

export default Com;