import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";

let postData = [
    {id: 1, message: "Hi, how are you?", likesCount: 40},
    {id: 2, message: "It's my first post", likesCount: 20},
    {id: 3, message: "This is strange post", likesCount: 37},
    {id: 4, message: "Whats up", likesCount: 6},
    {id: 5, message: "Are you here?", likesCount: 0},
    {id: 6, message: "Come on!", likesCount: 62},
]

let postElements = postData.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={postElements}/>
        </div>
    );
}

export default Profile;