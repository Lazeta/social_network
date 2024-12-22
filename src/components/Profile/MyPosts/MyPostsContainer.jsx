import React from "react";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { addPost } from "../../../redux/profile-reducer";

const MyPostsContainer = (props) => {
    return <MyPosts {...props} />
}

const mapStateToProps = ({ profilePage }) => {
    return {
        posts: profilePage.posts,
        newPostText: profilePage.newPostText,
    }
}

export default connect(mapStateToProps, { addPost })(MyPostsContainer);