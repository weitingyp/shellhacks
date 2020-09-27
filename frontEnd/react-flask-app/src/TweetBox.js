import React from 'react'
import './TweetBox.css';
import {Avatar, Button} from "@material-ui/core";
function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="http://t2.gstatic.com/images?q=tbn:ANd9GcS4QaTYDXxUfYqmm3IohrEKYxl8HkyukFg-QWJCQtZ5f_JqsXvUBSR5dIHIu7reOKCvgyXoozSNceVHXFEMS7g"/>
                    <input placeholder="What's Happpening?" type="text" />
                    {/* <input placeholder="Enter image url"/> */}
                </div>
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>    
        </div>
    )
}

export default TweetBox