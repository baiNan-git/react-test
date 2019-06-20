import React from 'react';

class Com extends React.Component {
  goDetail (id) {
    console.log(this.props)
    console.log(id)
    this.props.history.push('/detail/' + id)
  }
  render () {
    return (
      <ul>
        {
          this.props.prolist.map(item => {
            return <li key = { item.id } onClick = { this.goDetail.bind(this, item.id) }>{ item.title }</li>
          })
        }
      </ul>
    )
  }
}
export default Com;