import React from 'react';
import "./SinglePost.css"

function SinglePost(props) {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src="https://images.unsplash.com/photo-1488376739361-ed24c9beb6d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" alt="" className="singlePostImg" />
           
            <h1 className="singlePostTitle">
                Feel The Beat
            <div className="singlePostEdit">
                 <i className="singlePostIcon fas fa-edit"></i>
                 <i className="singlePostIcon fas fa-trash-alt"></i>
            </div>
            </h1>
           <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Ravan</b></span>
                <span className="singlePostDate"> 1 Hour ago</span>
            </div>
            <p className="singlePostDesc">
            Everyone who heard the music was seized by curiosity and went up the mountain. And the conductor of this strange orchestra gave the order, and the musicians began to play.
            From their instruments came small, playful musical notes, that rose and rose into the clouds. The music was so joyous, happy and fun, and the notes started playing with with the clouds' soft, fluffy bellies, running here and three, up and down, and the whole sky turned into one big game of tickle torture. Before long, the giant clouds were thundering with laughter.
            The musicians continued playing joyfully and a few minutes later the clouds, crying with laughter, soaked the little country below with their precious tears, bringing happiness to all.
            And in memory of that musical rain, everyone in the land learned how to play an instrument and, taking turns, would go up the mountain every day to bring joy to the clouds with their beautiful songs.
            </p>
        </div>
    </div>
    );
}

export default SinglePost;