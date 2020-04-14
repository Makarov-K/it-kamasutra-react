import React from "react";
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.post}>
            <img src={props.photo}/>
            <textarea>{props.message}</textarea>
            <div className={style.like_area}>
                <p>Likes:{props.likes}</p>
                <button>Like</button>
            </div>
        </div>
    );
};

export default Post;