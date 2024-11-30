import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => { 
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => { 
            let action = (updateNewPostTextActionCreator(text));
            dispatch(action)
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

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