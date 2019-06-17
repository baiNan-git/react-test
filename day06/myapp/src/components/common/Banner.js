import React from 'react';
import { Carousel } from 'antd-mobile';

const Com = ({ bannerlist }) => (
  <Carousel
    autoplay
    infinite
    style={{ display: 'inline-block', width: '100%', height: 176 }}
  >
    {bannerlist.map((item, index) => (
      <a
        key={index}
        href="http://www.alipay.com"
        style={{ display: 'inline-block', width: '100%' }}
      >
        <img
          src={'http://www.daxunxun.com' + item}
          alt=""
          style={{ width: '100%', verticalAlign: 'top' }}
        />
      </a>
    ))}
  </Carousel>
)

export default Com;