import React from "react";
import s from './../Users.module.css';
import userPhoto from '../../../assets/images/profile-logo.png';
import { NavLink } from "react-router-dom";
import HorizontalLine from "../../common/Line/HorizontalLine";

const User = ({ user, followingInProgress, subscribe, unsubscribe }) => {
    return (
        <>  <HorizontalLine />
            <div className={s.user}>
                <span>
                    <div className={s.userPhotoWrapper}>
                        <NavLink to={`/profile/${user.id}`} >
                            {/* 4 */}
                            <img src={user.photos.large || user.photos.small || userPhoto}
                                className={s.userPhoto} alt={user.name} />
                        </NavLink>
                    </div>
                </span>
                <span className={s.userMainInfo}>
                    <div className={s.userName}>
                        {/* 1 */}
                        <div>{user.name}</div>
                    </div>
                    <div className={s.userFollow}>
                        {user.followed
                            // 3
                            ? <button disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => { unsubscribe(user.id) }}>
                                Unsubscribe
                            </button>
                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => { subscribe(user.id) }}>
                                Subscribe
                            </button>
                        }
                    </div>
                    <div className={s.userContacts}>
                        <div>Contacts: </div>
                        {/* 2 */}
                    </div>
                </span>
            </div>
        </>
    )
}

export default User;

// 1 отображаем имя пользователя
// 2 опционально отображаем контакты пользователя
// 3 у user есть только id никакого userId не добавлять
// 4 используем фото из ответа или стандартное, если фото пользователя не
//   загружено и возвращаем фото по умолчанию