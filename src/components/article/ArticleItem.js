import React from 'react';
import {Link,Route} from 'react-router-dom';

export default class ArticleItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="articleItem_container">
                <div className="articleItem_header">JavaScript正则表达式</div>
                <div className="articleItem_body">对象属性、字符类、js正则提供预定义类来匹配常见的字符类、js正则提供几个常用的边界匹配字符、量词、贪婪模式、利用()进行分组.....</div>
                <div className="articleItem_footer">
                    <div>李桥</div>
                    <div>2018-08-10</div>
                </div>
            </div>
        );
    }
}
