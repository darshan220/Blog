import React from 'react';
import "./Home.css"
import Header from '../../header/header';
import Posts from '../../posts/posts';
import Sidebar from '../../sidebar/sidebar';

function Home(props) {
    return (
        <>
            <Header/>
            <div className="home">
               <Posts/>
               <Sidebar/>
            </div>
        </>
    );
}

export default Home;