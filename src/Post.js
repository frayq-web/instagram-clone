import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';

function Post({ username, caption, imageUrl }) {
    return (
        <div className="post">
                <div className="post__header">
                    <Avatar 
                        className="post__avatar"
                        alt=""
                        src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
                    />
                
                <h3>{username}</h3>
            </div>
            <img className="post__image" src={imageUrl} alt=""/>
            
            <h4 className="post__text"><strong>{username}: </strong>{caption}</h4>
        </div>
    )
}

export default Post
