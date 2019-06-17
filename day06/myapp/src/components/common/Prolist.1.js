import React from 'react';
import { Link } from 'react-router-dom';

// const Com = (props) => (
//   <ul> //不写大括号就不用return返回值
//       props.prolist.map(item => {
//          return <li key = { item.id }>{ item.title}</li>
//       })
//   </ul>
// )

const Com = ({ prolist }) => (  //此处用了解构赋值和上面意思一样
  <ul className = 'prolist'>
    {  // 写了大括号就要写retuen返回值
      prolist.map(item => {
       return <li key = { item.id }>
        <Link to= {'/detail/' + item.id}>
       { item.title }
       </Link>
       </li>
      })
    }
  </ul>
)


export default Com;