import React from "react";
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.post}>
            <img src="https://im0-tub-by.yandex.net/i?id=b5b08e3e39e0bd1863f0bfc14fddd326&n=13"/>
            <textarea>{props.message}</textarea>
            <div className={style.like_area}>
                <p>Likes:{props.likes}</p>
                <button>Like</button>
            </div>
        </div>
    );
};

export default Post;