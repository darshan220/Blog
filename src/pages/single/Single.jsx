import React from 'react';
import Sidebar from '../../components/sidebar/sidebar';
import SinglePost from '../../components/singlePost/SinglePost';
import "./Single.css"


function Single(props) {
    return (
        <div className="single">
            <SinglePost/>
            <Sidebar/>
        </div>
    );
}

export default Single;