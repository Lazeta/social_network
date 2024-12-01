import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => { 
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: () => { 
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;












// const MyPostsContainer = () => {
//     return <StoreContext.Consumer>
//         {(store) => {
//             let onAddPost = () => {
//                 store.dispatch(addPostActionCreator());
//             }
//             let onPostChange = (text) => {
//                 store.dispatch(updateNewPostTextActionCreator(text));
//             }

//             return <MyPosts updateNewPostText={onPostChange}
//                 addPost={onAddPost}
//                 posts={store.getState().profilePage.posts}
//                 newPostText={store.getState().profilePage.newPostText}
//             />
//         }}
//     </StoreContext.Consumer>
// }