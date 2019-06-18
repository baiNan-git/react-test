import React from 'react';

class Com extends React.Component {
  componentDidMount () {
    this.props.getBannerlist()
    this.props.getProlist()
    console.log(this.props)
  }
  render() {
    // console.log(this.props)
    return(
      <div>你好react-redux
        {
          this.props.bannerlist.map((item, index) => {
            return <li key = {index}>{item}</li>
          })
        }
        {
          this.props.prolist.map(item => {
            return <li key ={ item.id}>{item.title}</li>
          })
        }
      </div>
    )
  }
}

export default Com;