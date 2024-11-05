import s from "./MyPosts.module.css";

const MyPost = ({ posts }) => {
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
                { posts }
            </div>
        </div>
    )
}

export default MyPost;