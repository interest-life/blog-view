import React from 'react';
import Axios from 'axios';

export default class Login extends React.Component{
    constructor(props){
        super();
        this.props = props;
        console.log(this.props);
        this.state = {
            showLoginComponent:true
        }
    }

    changeComponent(e){
        var target = e.target;
        e.stopPropagation();
        if(target.id=="login"){
            this.setState({showLoginComponent:true});
        }
        else{
            this.setState({showLoginComponent:false});
        }
    }

    render(){
        return(
            <div className="blog_login">
                <div className="login_container">
                    <div className="login_register_options">
                        <a href="#" javascript="void(0)" id="login" onClick={this.changeComponent.bind(this)}>登陆</a>
                        <a href="#" javascript="void(0)" id="register" onClick={this.changeComponent.bind(this)}>注册</a>
                    </div>
                    {this.state.showLoginComponent?<LoginComponent/>:<RegisterComponent register={this.register}/>}
                </div>
            </div>
        );
    }
}

class LoginComponent extends React.Component{
    constructor(props){
        super();
        this.props = props;
    }

    login(){
        var no = this.loginNoInput.value;
        var pwd = this.loginPwdInput.value;
        Axios.post("/api/user/login",{
            data:{no:no,pwd:pwd},
            withCredentials: true
        }).then((result)=>{
            console.log(result);
            if(result.data.user){
                localStorage.setItem("user",result.data.user);
            }
            else{
                alert(result.data.message);
            }
        })
    }
    render(){
        return (
            <div className="login_register_div">
                <div>
                    <label>账号</label><input type="text" ref={(input)=>{this.loginNoInput = input}}/><br/>
                </div>
                <div>
                    <label>密码</label><input type="password" ref={(input)=>{this.loginPwdInput=input}}/>
                </div>
                <div>
                    <button onClick={this.login.bind(this)}>登陆</button>
                </div>
            </div>
        );
    }
}

class RegisterComponent extends React.Component{
    constructor(props){
        super();
        this.props = props;
    }

    register(){
        var userName = this.registerUserNameInput.value;
        var no = this.registerNoInput.value;
        var pwd = this.registerPwdInput.value;
        var comfirmPwd = this.comfirmPwdInput.value;
        if(this.validataUserMes(userName,no,pwd,comfirmPwd)){
            var user = {userName:userName,no:no,pwd:pwd}
            Axios.post("/api/user/register",{
                data:{user:user},
                withCredentials:true
            }).then((result)=>{
                if(result.data.message == "注册成功"){
                    alert("注册成功！");
                }
            })
        }
    }

    validataUserMes(userName,no,pwd,comfirmPwd){
        if(userName==""||no==""||pwd==""||comfirmPwd==""){
            alert("您输入的信息不完整");
            return false;
        }
        else if(pwd!=comfirmPwd){
            alert("两次密码不一致！");
            return false;
        }
        return true;
    }

    render(){
        return (
            <div className="login_register_div">
                <div>
                    <label>用户名</label><input type="text" ref={(input)=>{this.registerUserNameInput=input}}/>
                </div>
                <div>
                    <label>账号</label><input type="text" ref={(input)=>{this.registerNoInput=input}}/>
                </div>
                <div>
                    <label>密码</label><input type="password" ref={(input)=>{this.registerPwdInput=input}}/>
                </div>
                <div><label>确认密码</label><input type="password" ref={(input)=>{this.comfirmPwdInput=input}}/>
                </div>
                <div>
                    <button onClick={this.register.bind(this)}>注册</button>
                </div>
            </div>
        );
    }
}