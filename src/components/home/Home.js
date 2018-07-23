import React from 'react';
import {Route,Link} from 'react-router-dom';
import Header from '../header/Header';
import ArticleItem from '../article/ArticleItem';

const style = {
    comtainer:{

    }
}
export default class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div style={style.comtainer}>
                <Route path="/home">
                    <div>
                        <Header {...this.props}/>
                        <Body {...this.props}/>
                    </div>
                </Route>
            </div>
        );
    }
}

class Body extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="blog_body">
                <div className="article_container">
                    <ArticleItem/>
                    <ArticleItem/>
                    <ArticleItem/>
                    <Route path={`${this.props.match.url}/newArticle`} render={()=>{return <ArticleItem/>}}/>
                </div>
                <div className="right_nav_container"></div>
            </div>
        );
    }
}
