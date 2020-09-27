import React from 'react'
import './Widgets.css'
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';
function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon"/>
                <input placeholder="Search Twitter" type="text"></input>
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1310001525234626560"}></TwitterTweetEmbed>
                <TwitterTimelineEmbed
                    sourceType={"profile"}
                    screenName="ItsGianDe"
                    options={{height: 400}}>    
                </TwitterTimelineEmbed>
                <TwitterShareButton
                    url={"https://shellhacks.net"}
                    options={{text: "#ShellhacksTweetUp20 #reactjs is awesome! Thank you for the opportunity!", via: "Mcdonald'sBrokenIcecreamMachine"}}>
                </TwitterShareButton>
            </div>

        </div>
    )
}

export default Widgets
