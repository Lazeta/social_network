import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPost = (props) => {
    return (
        <div>
            "My posts"
            <div>
                New post
            </div>
            <div className={s.posts}>
                <Post message={'Hi, how are you?'} likesCount={"40"}/>
                <Post message={"It's my first post"} likesCount={"20"}/>
                <Post message={"This is strange post"} likesCount={"37"}/>
                <Post message={"Whats up"} likesCount={"6"}/>
                <Post message={"Are you here?"} likesCount={"0"}/>
                <Post message={"Come on!"} likesCount={"62"}/>
            </div>
        </div>
    )
}

export default MyPost;


// let users = {
//     user1: {
//         name: 'Vova',
//         age: '26',
//     },
//     user2: {
//         name: 'Misha',
//         age: '35',
//     },
//     user3: {
//         name: 'Vlad',
//         age: '50',
//     },
//     user4: {
//         name: 'Sanya',
//         age: '16',
//     },
//     user5: {
//         name: 'Kolya',
//         age: '20',
//     },
//     user6: {
//         name: 'Leonid',
//         age: '45',
//     },
// }