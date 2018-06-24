import React from 'react';
import {Link,Route} from 'react-router-dom'

let style = {
    linkStyle:{
        textDecoration:"none",
        display: "inline-block",
        marginRight: "10px",
        height: "50px",
        lineHeight: "50px",
    }
}

export default class Header extends React.Component{
  render(){
    return(
        <div className="blog_header">
          <div className="blog_logo">LOGO</div>
          <div className="blog_nav">
            <ul>
                <li><Link to="login" style={style.linkStyle}>登陆</Link></li>
                <li>注册</li>
            </ul>
          </div>
        </div>
    )
  }
}
