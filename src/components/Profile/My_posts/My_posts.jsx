import React from "react";
import classes from './My_posts.module.css';
import Post from "./Post/Post";


const My_posts = () => {
    return (
        <div className={classes.my_posts}>
            <p>My posts:</p>
            <div className={classes.new_post}>
                <textarea placeholder="new post"></textarea>
                <button>Add post</button>
            </div>
            <Post message="Hi people!" likes="15"/>
            <Post message="It's looks much easier on videos :(" likes="20"/>
        </div>
    );
}

export default My_posts;