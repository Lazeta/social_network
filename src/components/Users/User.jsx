import React from "react";
import s from './Users.module.css';
import userPhoto from '../../assets/images/profile-logo.png';
import { NavLink } from "react-router-dom";

const User = ({ user, followingInProgress, subscribe, unsubscribe }) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={`/profile/${user.userId}`} >
                        {/* используем фото из ответа или стандартное, если фото пользователя не 
                        загружено и возвращаем фото по умолчанию*/}
                        <img src={user.photos.large || user.photos.small || userPhoto}
                            className={s.userPhoto} alt={user.name} />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.userId)}
                            onClick={() => { unsubscribe(user.userId) }}>
                            Unsubscribe
                        </button>
                        : <button disabled={followingInProgress.some(id => id === user.userId)}
                            onClick={() => { subscribe(user.userId) }}>
                            Subscribe
                        </button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    {/* {console.log(user)} */}
                </span>
                <span>
                    <div>Contacts:</div>
                    
                </span>
            </span>
        </div>)
}

export default User