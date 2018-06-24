import React from 'react';
import {Route,Link} from 'react-router-dom';
import Header from '../header/Header';

const style = {
    comtainer:{
        border:"1px solid blue",
    }
}
export default class Home extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div style={style.comtainer}>
                <Header/>
                这里是文章列表
            </div>
        );
    }
}