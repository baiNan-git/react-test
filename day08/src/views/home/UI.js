import React from 'react';

class Com extends React.Component {
  componentDidMount () {
    this.props.getBannerListData();
    this.props.getProListData();
  }
  render () {
    return (
      <div>
        {
          this.props.bannerlist.map((item, index) =>{
            return <li key = {index}>{ item }</li>
          })
        }
        {
          this.props.prolist.map(item =>{
            return <li key = {item.id}>{ item.title }</li>
          })
        }
      </div>
    )
  }
}

export default Com;