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
    constructor(props){
        super(props);
    }

    goLogin(){
        this.props.history.push("/login");
    }

    render(){
        return(
            <div className="blog_header">
                <div className="blog_logo">LOGO</div>
                <div className="blog_nav">
                    <ul>
                        <li onClick={this.goLogin.bind(this)}>登陆</li>
                    </ul>
                    <div className="blog_user_label">欢迎您！李桥</div>
                </div>
            </div>
        )
    }
}

class DynamicUserState extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>


            </div>
        );
    }
}
