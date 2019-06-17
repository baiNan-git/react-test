import React from 'react';
// import { Link } from 'react-router-dom';

class Com extends React.Component {
  goDetail (id) {
    console.log(this.props)
    this.props.history.push('/detail/'+ id)
  }
  
  render () {
    return(
      <ul>
        {
          this.props.prolist.map(item => (
              <li key = { item.id } onClick = { this.goDetail.bind(this, item.id) }>
              {item.title} 
              </li>)
            )
          }
      </ul>
    )
  }
}



export default Com;