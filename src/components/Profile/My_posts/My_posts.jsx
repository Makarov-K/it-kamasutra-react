import React from "react";
import style from './My_posts.module.css';
import Post from "./Post/Post";
import {changeNewPostTextCreator, addPostCreator} from "./../../../redux/store";


const My_posts = (props) => {

    let PostList = props.posts.map(post => <Post message={post.message} likes={post.likes}/>);


    let addPost = () => {
        let action = addPostCreator();
        props.dispatch(action);
    };

    let changeNewPostText = (event) => {
        let newText = event.target.value;
        let action = changeNewPostTextCreator(newText);
        props.dispatch(action);
    }

    return (
        <div className={style.my_posts}>
            <p>My posts:</p>
            <div className={style.new_post}>
                <textarea
                    value={props.newPostText}
                    onChange={changeNewPostText}/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={style.posts}>
                {PostList}
            </div>
        </div>
    );
};

export default My_posts;