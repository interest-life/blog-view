import React from 'react';

export default class ArticleForm extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="articleForm_container">
                <div className="articleForm_write">
                    <textarea id="article_content">
                        这是博客的编辑器
                    </textarea>
                </div>
                <div className="articleForm_display" id="article_display">

                </div>
            </div>
        );
    }
}