import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://idg.net.ua/blog/wp-content/uploads/hand-coding-700x325.jpg" alt="coding hands"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src="https://avatarzo.ru/wp-content/uploads/squid-game.jpg" alt="my avatar"/>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;