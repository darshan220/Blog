import React from 'react';
import "./header.css"


function Header(props) {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src="https://images.unsplash.com/photo-1415650328328-1909c4ceabdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt=""></img>
        </div>
    );
}

export default Header;          