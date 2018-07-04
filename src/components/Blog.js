import React from 'react';
import Header from './header/Header';
import {Route,Link,Switch} from 'react-router-dom';
import Login from './login_regist/Login_register';
import Home from './home/Home';

export default class Blog extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className="blog_container">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </div>
        );
    }
}