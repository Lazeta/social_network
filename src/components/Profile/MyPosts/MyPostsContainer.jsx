import React from "react";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { addPost } from "../../../redux/profile-reducer";

const MyPostsContainer = (props) => {
    return <MyPosts {...props} />
}

const mapStateToProps = ({ profilePage }) => {
    return {
        posts: profilePage.posts
    }
}

// 1.5
// добавляем addPost в пропсы компонента и диспатчим его в редьюсер
export default connect(mapStateToProps, { addPost })(MyPostsContainer);