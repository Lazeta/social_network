import React from 'react';
import { useState } from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import AddNewPostForm from "./addNewPostForm/AddNewPostForm";

const MyPosts = ({ posts, addPost }) => {
    const [newPostText, setNewPostText] = useState('');

    const onAddPost = () => {
        addPost(newPostText);
        setNewPostText(''); // Сбросить текстовое поле после добавления поста
    }

    return (
        <div className={s.postsBlock}>
            <h3>"My posts"</h3>
            <AddNewPostForm onAddPost={onAddPost} newPostText={newPostText} setNewPostText={setNewPostText} />
            <div className={s.posts}>
                {posts.map(p => (
                    <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} />
                ))}
            </div>
        </div>
    );
}

export default MyPosts;