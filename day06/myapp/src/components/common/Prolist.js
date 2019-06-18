import React from 'react';
// import { Link } from 'react-router-dom';
// import Banner from '@/components/common/Banner';
import { Carousel } from 'antd-mobile';
import { NavLink } from 'react-router-dom';
import '@/prolist.scss';

class Com extends React.Component {
  goDetail (id) {
    console.log(this.props)
    this.props.history.push('/detail/'+ id)
  }
  
  render () {
    return(
      <div>
        <Carousel
          autoplay
          infinite
          style={{ display: 'block', width: '100%', height: 176 }}
        >
          {this.props.bannerlist.map((item, index) => (
            <a
              key={index}
              href="http://www.alipay.com"
              style={{ display: 'block', width: '100%', height: '100%' }}
            >
              <img
                src={'http://www.daxunxun.com' + item}
                alt=""
                style={{ width: '100%', verticalAlign: 'top', height: '100%' }}
              />
            </a>
          ))}
        </Carousel>
        <div className = 'guanggao'>
          <img src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN01QrNlKM2JJhx1FgdEe_!!2053469401.gif" alt="" />
        </div>
        <div className = 'hot'>
        <ul>
          <NavLink to=''>
              <img src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01G3iWXH2JJhwyMvzY4_!!2053469401.png" alt=""/>              
            <p>疯狂排行</p>
          </NavLink>
          <NavLink to=''>
              <img src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01bfTHAx2JJhx0QV3BI_!!2053469401.png" alt=""/>
            <p>咚咚抢</p>
          </NavLink>
          <NavLink to=''>
              <img src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN01dD8p5n2JJhwyv5LQB_!!2053469401.png" alt=""/>
            <p>6.18精选</p>
          </NavLink>
          <NavLink to=''>
              <img src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN01NFPu5w2JJhwsvNz8h_!!2053469401.png" alt=""/>
            <p>每日半价</p>
          </NavLink>
          <NavLink to=''>
              <img src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN013JV8Ew2JJhx0Mcq2P_!!2053469401.png" alt=""/>
            <p>折上折</p>
          </NavLink>
        </ul>
        </div>
        <ul className = 'prolist'>
          {
            this.props.prolist.map(item => (
                <li key = { item.id } onClick = { this.goDetail.bind(this, item.id) }>
                  <div className="img">
                    <img src={item.pic} alt="" />
                  </div>
                  <div className="cent">
                    <h4>{ item.d_title }</h4>
                    <div className="num">
                      <span className="tianmao">天猫价￥{ item.yuanjia }</span>
                      <span className="yishou">已售{ parseInt(item.xiaoliang / 10000) }万件</span>
                    </div>
                    <div className="money">
                      <span className="juanhou">卷后价￥{ item.jiage }</span>
                      <span className="juan">用卷{ item.quan_jine }</span>
                    </div>
                  </div>
                </li>)
              )
            }
        </ul>
      </div>
    )
  }
}



export default Com;