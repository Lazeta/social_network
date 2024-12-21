import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React, { PureComponent } from "react";

class MyPosts extends PureComponent {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps !== this.props || nextState !== this.state;
    }

    render () {
        let postsElements = this.props.posts.map(p => {
            return <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} />
        });
    
        let onAddPost = (values) => {
            this.props.addPost(values.newPostText);
        }

        return <div className={s.postsBlock}>
        <h3>"My posts"</h3>
        <AddNewPostForm onSubmit={onAddPost} />
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
    }
}

export default MyPosts;