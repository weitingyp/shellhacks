import React from 'react'
import './Post.css';
import {Avatar} from "@material-ui/core";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

function Post({displayName, username, verified, text, image, avatar }) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src={avatar}/>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post_headerText">
                        <h3>
                            {displayName}{" "}
                            <span className="post__headerSpecial">
    {verified && <VerifiedUserIcon className="post__badge"/>} @{username}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>
                            {text}
                        </p>
                    </div>
                </div>
                <img 
                src={image}
                alt=""/>

                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small"/>
                    <RepeatIcon fontSize="small"/>
                    <FavoriteBorderIcon fontSize="small"/>
                    <OpenInBrowserIcon fontSize="small"/>
                </div>
                
            </div>
        </div>
    )
}
export default Post
