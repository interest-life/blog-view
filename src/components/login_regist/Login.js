import React from 'react';
import Axios from 'axios';

export default class Login extends React.Component{
    constructor(props){
        super();
        this.props = props;
        console.log(this.props);
    }

    login(){
        alert("用户登陆");
    }

    render(){
        return(
            <div className="blog_login">
                <div className="login_container">
                    <label>用户名</label><input type="text"/><br/><br/>
                    <label>密码</label><input type="text" /><br/>
                    <button onClick={this.login}>登陆</button>
                </div>
            </div>
        );
    }
}