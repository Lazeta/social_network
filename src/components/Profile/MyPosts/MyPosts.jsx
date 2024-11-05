import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPost = () => {
    let postData = [
        {id: 1, message: "Hi, how are you?", likesCount: 40},
        {id: 1, message: "It's my first post", likesCount: 20},
        {id: 1, message: "This is strange post", likesCount: 37},
        {id: 1, message: "Whats up", likesCount: 6},
        {id: 1, message: "Are you here?", likesCount: 0},
        {id: 1, message: "Come on!", likesCount: 62},
    ]

    let postElements = postData.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>"My posts"</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postElements }
            </div>
        </div>
    )
}

export default MyPost;