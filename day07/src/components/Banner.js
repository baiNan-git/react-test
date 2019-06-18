import React from 'react';

const Com = ({ bannerlist }) => (
  <div>
    {
      bannerlist.map((item, index) => {
        return <img key={ index }src={'http://www.daxunxun.com' + item}/>
      })
    }
  </div>
)

export default Com;