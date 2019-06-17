import React, { Component } from 'react';
import Prolist from '@/components/Prolist';

class Com extends Component {
  constructor (props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
    this.state = {
      value: ''
    }
  }
  changeHandler (event) {
    this.setState({
      value: event.target.value.toUpperCase()
    })
  }
  submitHandler (event) {
    console.log(this.state.value);
    event.preventDefault();
  }
  render () {
    return (
      <div className = 'box'>
        <header className = 'header'>头部</header>
        <section className= 'content'>
          <form onSubmit = { this.submitHandler }>
            <input type = 'text' name = 'username' onChange = { this.changeHandler }/>{ this.state.value }
            <input type = 'submit' value = '提交' />
          </form>
        </section>
      </div>
    )
  }
}

export default Com;