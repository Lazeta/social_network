import s from './Profile.module.css';
import MyPosts from "../MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://idg.net.ua/blog/wp-content/uploads/hand-coding-700x325.jpg" alt="coding hands"/>
            </div>
            <div className={s.ava}>
                {/*<img src="https://avatarzo.ru/wp-content/uploads/squid-game.jpg" alt="my avatar"/>*/}
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;