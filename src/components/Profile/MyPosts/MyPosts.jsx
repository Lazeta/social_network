import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React, { memo } from "react";
import AddNewPostForm from "./addNewPostForm/addNewPostForm";

const MyPosts = memo((props) => {
    let postsElements = props.posts.map(p => {
        return <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} />
    });

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return <div className={s.postsBlock}>
        <h3>"My posts"</h3>
        <AddNewPostForm onSubmit={onAddPost} />
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
});

export default MyPosts;