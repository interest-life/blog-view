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
                    {this.state.showLoginComponent?<LoginComponent {...this.props}/>:<RegisterComponent {...this.props} register={this.register}/>}
                </div>
            </div>
        );
    }
}

class LoginComponent extends React.Component{
    constructor(props){
        super();
        this.props = props;
        console.log(this.props)
    }

    login(){
        var no = this.loginNoInput.value;
        var pwd = this.loginPwdInput.value;
        if(this.validataLoginMes(no,pwd)){
            Axios.post("/api/user/login",{
                data:{no:no,pwd:pwd},
                withCredentials: true
            }).then((result)=>{
                if(result.data.message == "loginSuccess"){
                    console.log(result);
                    sessionStorage.setItem("user",JSON.stringify(result.data.user))
                    this.props.history.push("/");
                }else{
                    alert(result.data.message);
                }
            }).catch((err)=>{
                console.log(err);
            })
        }
    }
    render(){
        return (
            <div className="login_register_div">
                <div>
                    <label>账号</label><input type="text" ref={(input)=>{this.loginNoInput = input}}/><br/>
                </div>
                <div>
                    <label>密码</label><input type="text" ref={(input)=>{this.loginPwdInput=input}}/>
                </div>
                <div>
                    <button onClick={this.login.bind(this)}>登陆</button>
                </div>
            </div>
        );
    }

    validataLoginMes(no,pwd){
        if(no==""||pwd==""){
            alert("请输入用户名和密码！");
            return false;
        }
        return true;
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
            }).catch((err)=>{
                console.log(err);
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