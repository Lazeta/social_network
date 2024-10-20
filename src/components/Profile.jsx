import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://idg.net.ua/blog/wp-content/uploads/hand-coding-700x325.jpg" alt="coding hands"/>
            </div>
            <div className={s.ava}>
                {/*<img src="https://avatarzo.ru/wp-content/uploads/squid-game.jpg" alt="my avatar"/>*/}
                ava + description
            </div>
            <div>
                "My posts"
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;