import React from 'react';
import "./header.css"
import headerImg from '../../assect/header-bg.jpeg'

function Header(props) {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src={headerImg} alt=""></img>
        </div>
    );
}

export default Header;          