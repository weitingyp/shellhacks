import './Feed.css';
import Post from './Post.js';
import React, {useState, useEffect} from "react";
import TweetBox from './TweetBox';
// import db from "./firebase";

function Feed() {

    const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     db.collection("posts").onSnapshot(snapshot =>
    //       setPosts(snapshot.docs.map((doc) => doc.data()))
    //     );
    //   }, []);

    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            {/* TweetBox */}
            <TweetBox />
            {/* Timeline */}

            {/* {posts.map(post => (
                <Post 
                displayName={post.displayName}
                username={post.username}
                verified={post.verified}
                text={post.text}
                avatar={post.avatar}
                image={post.image}/>
            ))} */}
              <Post
                displayName="Uncle Bob Martin"
                username="unclebobmartin"
                verified="false"
                text="Software craftsmanship is not driven by fad and fashion."
                avatar="https://pbs.twimg.com/profile_images/1102364992/clean_code_72_color_400x400.png"
                image=" "/>

            <Post
                displayName="LoverDream"
                username="L0vetodream"
                verified="false"
                text="Reliable: @markgurman make a great job for everybody.
                respect"
                avatar="https://static.hollywoodreporter.com/sites/default/files/2018/10/tom_and_jerry_-_photofest_-_h_2018-928x523.jpg"
                image=" "/>
            <Post
                displayName="Andrew Yang"
                username="AndrewYang"
                verified="true"
                text="The challenge is to make dysfunctional institutions work again."
                avatar="https://pbs.twimg.com/profile_images/1282151845364932608/pBpRlBlt_400x400.jpg"
                image=" "
                ></Post>
            <Post
                displayName="Linus Tech Tips"
                username="LinusTech"
                verified="true"
                text="Ladies & Gentlemen.
                We did it.
                
                (video in 10mins)"
                avatar="https://pbs.twimg.com/profile_images/1034493707553140736/cDlQGimm_400x400.jpg"
                image="https://pbs.twimg.com/media/Ei2qvaOUYAAd8im?format=jpg&name=small"/>
            <Post
                displayName="j̶o̶j̷o̴"
                username="sadboysolo"
                verified="false"
                text="in among us i call everyone by their ign because i dont see color "
                avatar="https://pbs.twimg.com/profile_images/1303414212216012801/CwrcXGdB_400x400.jpg"
                image=" "/>

        </div>
    )
}

export default Feed
