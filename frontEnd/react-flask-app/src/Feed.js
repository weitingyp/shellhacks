import React from 'react'
import './Feed.css';
import Post from './Post.js';
import TweetBox from './TweetBox';
function Feed() {
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/* TweetBox */}
            <TweetBox />
            {/* Timeline */}
            <Post/>
        </div>
    )
}

export default Feed
