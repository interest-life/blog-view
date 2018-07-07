import React from 'react';
import {Route,Link} from 'react-router-dom';
import Header from '../header/Header';

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
                <Header {...this.props}/>
                <Body {...this.props}/>
            </div>
        );
    }
}

class Body extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className="blog_body">

            </div>
        );
    }
}
