import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p =>
        <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        console.log(props);
        props.dispatch(addPostActionCreator(text));

    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = (updateNewPostTextActionCreator(text))
        props.dispatch(action);
    }

    return <div className={s.postsBlock}>
        <h3>"My posts"</h3>
        <div>
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostText}
                          cols="30" rows="5">
                </textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts;