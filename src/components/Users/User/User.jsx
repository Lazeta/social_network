import React from "react";
import s from './../Users.module.css';
import userPhoto from '../../../assets/images/profile-logo.png';
import { NavLink } from "react-router-dom";

const User = ({ user, followingInProgress, subscribe, unsubscribe }) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={`/profile/${user.id}`} >
                        {/* используем фото из ответа или стандартное, если фото пользователя не 
                        загружено и возвращаем фото по умолчанию*/}
                        <img src={user.photos.large || user.photos.small || userPhoto}
                            className={s.userPhoto} alt={user.name} />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                    // у user есть только id никакого userId не добавлять
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
            </span>
            <span>
                <span>
                    {/* отображаем имя пользователя */}
                    <div>{user.name}</div>
                    {/* {console.log(user)} */}
                </span>
                <span>
                    <div>Contacts:</div>
                    {/* опционально отображаем контакты пользователя если их можно получить через api */}
                </span>
            </span>
        </div>)
}

export default User