import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let PostList = props.posts.map(post => <Post message={post.message} likes={post.likes}/>);


    let onAddPost = () => {
        props.addPost();
    };

    let onChangeNewPostText = (event) => {
        let newText = event.target.value;
        props.changeNewPostText(newText);
    };

    return (
        <div className={style.myPosts}>
            <p>My posts:</p>
            <div className={style.newPost}>
                <textarea
                    value={props.newPostText}
                    onChange={onChangeNewPostText}/>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={style.posts}>
                {PostList}
            </div>
        </div>
    );
};

export default MyPosts;