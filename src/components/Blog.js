import React from 'react';
import Header from './header/Header';
import {Route,Link,Switch} from 'react-router-dom';
require('../lib/showdown/showdown.js');
import Login from './login_regist/Login_register';
import Home from './home/Home';
import ArticleForm from './article/ArticleForm';

export default class Blog extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className="blog_container">
                <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route path="/login" component={Login}/>
                    {/*<Route path="/newArticle" component={ArticleForm}/>*/}
                </Switch>
            </div>
        );
    }
}