import React from 'react'
import './TweetBox.css';
import {Avatar, Button} from "@material-ui/core";
import ImageIcon from '@material-ui/icons/Image';
import GifIcon from '@material-ui/icons/Gif';
import PollIcon from '@material-ui/icons/Poll';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="http://t2.gstatic.com/images?q=tbn:ANd9GcS4QaTYDXxUfYqmm3IohrEKYxl8HkyukFg-QWJCQtZ5f_JqsXvUBSR5dIHIu7reOKCvgyXoozSNceVHXFEMS7g"/>
                    <input placeholder="What's Happpening?" type="text" />

                </div>
                {/* <input className="tweetBox__inputImage" placeholder="Optional: Enter image URL" type="text"/>
                Include a row of icons: image, gif, poll, emoji, schedule */}


                <div className="tweetBox__footer">
                    <ImageIcon font-size="small"/>
                    <GifIcon font-size="small"/>
                    <PollIcon font-size="small"/>
                    <EmojiEmotionsIcon font-size="small"/>
                    <InsertInvitationIcon font-size="small"/>
                    <Button className="tweetBox__tweetButton">Tweet</Button>
                </div>



            </form>    
        </div>
    )
}

export default TweetBox