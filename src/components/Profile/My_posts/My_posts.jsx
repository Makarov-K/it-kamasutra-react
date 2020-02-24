import React from "react";
import classes from './My_posts.module.css';
import Post from "./Post/Post";


const My_posts = () => {
    return (
        <div>
            <div>
                <p>my posts:</p>
                <textarea placeholder="new post"></textarea>
                <button>Add post</button>
            </div>
            <Post message="Hi people!" likes_quantity="15"/>
            <Post message="It's looks much easier on videos :(" likes_quantity="20"/>
        </div>
    );
}

export default My_posts;