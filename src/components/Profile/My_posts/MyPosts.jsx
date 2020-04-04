import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import AddPostForm from "./AddPostForm";

let MyPosts = React.memo((props) => {
    console.log('myPosts render');
    let PostList = props.posts.map(post => <Post message={post.message} likes={post.likes}/>);

    let onSubmit = (formData) => {
        props.addPost(formData.newPostText)
    };

    return (
        <div className={style.myPosts}>
            <p>My posts:</p>
            <AddPostForm onSubmit={onSubmit}/>
            <div className={style.posts}>
                {PostList}
            </div>
        </div>
    );
});

export default MyPosts;