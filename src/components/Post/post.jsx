import React from 'react';
import './post.css'
import { data } from '../../data.js';

function post(props) {

    

    return (<>
        { data.map((blog)=>{

const { imgUrl, headOne, headTwo, mainHead, timing , desc } = blog;

    
       return ( <div className="post">
            <img className="postImg" 
            src={imgUrl}>
            </img>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Feel the beat
                </span>
                {/* <hr/> */}
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Everyone who heard the music was seized by curiosity and went up the mountain. And the conductor of this strange orchestra gave the order, and the musicians began to play.
                From their instruments came small, playful musical notes, that rose and rose into the clouds. The music was so joyous, happy and fun, and the notes started playing with with the clouds' soft, fluffy bellies, running here and three, up and down, and the whole sky turned into one big game of tickle torture. Before long, the giant clouds were thundering with laughter.
            </p>
        </div> 
       )
        })    
    }
        </>
    );
}

export default post;