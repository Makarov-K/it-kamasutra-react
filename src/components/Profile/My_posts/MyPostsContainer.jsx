import React from "react";
import {changeNewPostTextCreator, addPostCreator} from "./../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


/*const MyPostsContainer = (props) => {

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
};*/

const mapStateToProps = (state) => {
  return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeNewPostText(newText) {dispatch(changeNewPostTextCreator(newText))},
        addPost() {dispatch(addPostCreator())}
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;