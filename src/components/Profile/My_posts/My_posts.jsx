import React from "react";
import style from './My_posts.module.css';
import Post from "./Post/Post";


const My_posts = (props) => {

    let PostList = props.posts.map(post => <Post message={post.message} likes={post.likes}/>);

    return (
        <div className={style.my_posts}>
            <p>My posts:</p>
            <div className={style.new_post}>
                <textarea placeholder="new post"></textarea>
                <button>Add post</button>
            </div>
            <div className={style.posts}>
                {PostList}
            </div>
        </div>
    );
}

export default My_posts;