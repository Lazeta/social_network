import { Field, reduxForm } from "redux-form";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React, { memo } from "react";

let maxLength30 = maxLengthCreator(30);

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

const AddNewPostForm = (props) => {
    return <form onSubmit={ props.handleSubmit }>
        <div>
            <Field component={'textarea'} name={'newPostText'} 
            validate={[required, maxLength30]} />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

AddNewPostForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;