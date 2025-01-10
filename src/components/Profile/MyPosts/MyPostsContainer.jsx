import React from "react";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { addPost } from "../../../redux/profileReducer/profile-reducer";

const MyPostsContainer = ({ addPost, posts }) => {
    return <MyPosts addPost={addPost} posts={posts} />
}

const mapStateToProps = ({ profilePage }) => {
    return {
        posts: profilePage.posts,
        newPostText: profilePage.newPostText
    }
}

// 1.5
// добавляем addPost в пропсы компонента и диспатчим его в редьюсер
export default connect(mapStateToProps, { addPost })(MyPostsContainer);