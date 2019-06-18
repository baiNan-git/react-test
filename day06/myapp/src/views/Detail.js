import React from 'react';
import '@/Detail.scss';

class Com extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      pic:'',
      price: '',
      xiaoliang: '',
      yuanjia: '',
      miaoshou: '',
      super_pic: ''
    }
  }
  componentDidMount () {
    console.log(this.props)
    const  id  = parseInt(this.props.match.params.id);
    fetch('api/index.php?r=index/ajaxnew&page=1').then(res => res.json()).then(data => {
      console.log(data.data.data)
      for (let i=0;i<data.data.data.length;i++) {
        // console.log(data.data.data[0].id === id)
        if (data.data.data[i].id === id) {
          // console.log("1")
          this.setState({
            pic: data.data.data[i].pic,
            price: data.data.data[i].jiage,
            xiaoliang: data.data.data[i].xiaoliang,
            title: data.data.data[i].d_title,
            yuanjia: data.data.data[i].yuanjia,
            miaoshou: data.data.data[i].miaoshu,
            super_pic: data.data.data[i].super_pic
          })
          console.log(this.state.pic)
        }
      }
    })
  }
  goBack () {
    this.props.history.go(-1)
  }
  render () {
    return (
      <div className = 'container'>
        <div className="head" onClick={this.goBack.bind(this)}>
          <span className="iconfont icon-fanhui"></span>
        </div>
        <div className="cont">
          <div className="img">
            <img className="tou" src={this.state.pic} alt="" />
            <img src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN01D4g2Tp2JJhwoRpoZ8_!!2053469401.png" alt="" />
          </div>
          <div className="cont-c">
            <h3 className="tianmao-1">
              <span>天猫</span>
              { this.state.title }
            </h3>
            <div className="money">
              <span className="juanhou">卷后价￥{ this.state.price }</span>
              <span className="yishou">已售{ parseInt(this.state.xiaoliang / 10000) }万件</span>
            </div>
            <div className="num">
              <span className="tianmao">天猫价￥{ this.state.yuanjia }</span>
            </div>
            <div className="img1">
              <img src="https://cmsstatic.dataoke.com//wap_new/main/images/goods_quan.png?v=201906031512" alt="" />
              <span>
                { this.state.miaoshou }
              </span>
              <img className="guanggao" src={this.state.super_pic} alt="" />
            </div>
          </div>
        </div>
        <footer className = 'footer'>底部</footer>
      </div>
    )
  }
}

export default Com;