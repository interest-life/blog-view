import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import Blog from './components/Blog';
require("./css/common.css");


ReactDOM.render(
    <BrowserRouter>
        <Blog/>
    </BrowserRouter>
    ,document.getElementById("app")
)


/*
* 进行网站（将会运行在浏览器环境中）构建，我们应当安装react-router-dom。react-router-dom暴露出react-router中暴露的对象与方法，
* 因此你只需要安装并引用react-router-dom即可。
* */