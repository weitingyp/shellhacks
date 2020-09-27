import React from 'react'
import './Post.css';
import {Avatar} from "@material-ui/core";

function Post({displayName, username, verified, timestamp, text, image, avatar }) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://m.media-amazon.com/images/M/MV5BMjM2OTkyNTY3N15BMl5BanBnXkFtZTgwNzgzNDc2NjE@._V1_CR132,0,761,428_AL_UY268_CR82,0,477,268_AL_.jpg"/>
            </div>
        </div>
    )
}
export default Post
