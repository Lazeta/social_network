import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React, { memo } from "react";
import AddNewPostForm from "./AddNewPostForm/AddNewPostForm";

// 1.8
// после того как состояние обновлено, React перерисовывает компонент, который получает 
// обновленный список постов из состояния и отображает их.
const MyPosts = memo((props) => {
    let postsElements = props.posts.map(p => {
        return <Post key={p} id={p.id} message={p.message} likesCount={p.likesCount} />
    });

    // 1.3
    // функция проверяет наличие текста в поле ввода и если он есть то вызывает функцию
    // addPost где values.newPostText — это текст поста
    let onAddPost = (values) => {
        // console.log("Submitted values:", values);
        if (values.newPostText) {
            props.addPost(values.newPostText);
            // console.log("Post added");
        }
    }

    return <div className={s.postsBlock}>
        <h3>"My posts"</h3>
        {/*
        // 1.2 
        в AddNewPostForm передаем в качестве пропса onAddPost функцию под именем 
        onSubmit которая вызывается при сабмите формы в компоненте AddNewPostForm.
        */}
        <AddNewPostForm onSubmit={onAddPost} />
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
});

export default MyPosts;