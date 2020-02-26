import React from "react";
import classes from './My_posts.module.css';
import Post from "./Post/Post";


const My_posts = () => {

    let postsData = [
        {id: 1, message:'Hi people!', likes: 23},
        {id: 2, message:'It\'s looks much easier on videos :(', likes: 14},
    ];

    return (
        <div className={classes.my_posts}>
            <p>My posts:</p>
            <div className={classes.new_post}>
                <textarea placeholder="new post"></textarea>
                <button>Add post</button>
            </div>
            <Post message={postsData[0].message} likes={postsData[0].likes}/>
            <Post message={postsData[1].message} likes={postsData[1].likes}/>
        </div>
    );
}

export default My_posts;