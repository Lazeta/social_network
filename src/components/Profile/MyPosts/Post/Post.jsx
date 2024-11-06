import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676296367166243426.png" alt="this is element is not haven`t avatar"/>
            {props.message}
            <div className={'likes'}>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;
