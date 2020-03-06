import React from "react";
import style from './My_posts.module.css';
import Post from "./Post/Post";
import {changeNewPostTextActionCreator, addPostActionCreator} from "./../../../redux/store";


const My_posts = (props) => {

    let PostList = props.posts.map(post => <Post message={post.message} likes={post.likes}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let action = addPostActionCreator();
        props.dispatch(action);
    };

    let changeNewPostText = () => {
        let newText = newPostElement.current.value;
        let action = changeNewPostTextActionCreator(newText);
        props.dispatch(action);
    }

    return (
        <div className={style.my_posts}>
            <p>My posts:</p>
            <div className={style.new_post}>
                <textarea ref={newPostElement}
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