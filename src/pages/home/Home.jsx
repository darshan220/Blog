import React from 'react';
import "./Home.css"
import Header from '../../components/header/header';
import Posts from '../../components/posts/posts';
import Sidebar from '../../components/sidebar/sidebar';

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