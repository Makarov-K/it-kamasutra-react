import React from "react";
import {changeNewPostTextCreator, addPostCreator} from "./../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    let state = props.store.getState().profilePage;

    let addPost = () => {
        let action = addPostCreator();
        props.store.dispatch(action);
    };

    let changeNewPostText = (newText) => {
        let action = changeNewPostTextCreator(newText);
        props.store.dispatch(action);
    };

    return (
        <MyPosts
            addPost={addPost}
            changeNewPostText={changeNewPostText}
            posts={state.posts}
            newPostText={state.newPostText}
        />
    );
};

export default MyPostsContainer;