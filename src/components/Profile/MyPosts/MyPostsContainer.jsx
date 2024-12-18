import React from "react";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { addPost } from "../../../redux/profile-reducer";

class MyPostsContainer extends React.Component {
    render() {
        return <MyPosts {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

export default connect(mapStateToProps, { newPostText , addPost})(MyPostsContainer);