import React from 'react';
import {Link,Route} from 'react-router-dom'
import Axios from 'axios';
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
        this.state = {
            user:null,
            isLogined:false
        }
    }

    componentWillMount(){
        var userJson = sessionStorage.getItem("user");
        if(userJson){
            this.setState({user:JSON.parse(userJson)});
        }
        else {
            this.setState({user:null});
        }
    }

    goLogin(){
        this.props.history.push("/login");
    }

    logOut(){
        Axios.get("/api/user/logout",{
            withCredentials: true
        }).then((result)=>{

        }).catch((err)=>{
            console.log(err);
        })
    }

    render(){
        return(
            <div className="blog_header">
                <div className="blog_logo">LOGO</div>
                <div className="blog_nav">
                    {
                        this.state.user == null ?
                            (
                                <ul>
                                    <li onClick={this.goLogin.bind(this)}>登陆/注册</li>
                                </ul>
                            ):
                            (
                                <div>
                                    <div>
                                        <Link to="home/newArticle">写文章</Link>
                                    </div>
                                    <div className="blog_user_label">
                                        {"欢迎您！"+this.state.user.userName}
                                        <span><a href="javascript:void(0)" onClick={this.logOut.bind(this)}>退出</a></span>
                                    </div>
                                </div>
                            )
                    }
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
