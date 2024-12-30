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
                        <img src={user.photos.small || user.photos.large || userPhoto}
                            className={s.userPhoto} alt={user.fullName} />
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
                    {/* <div>Github: {user.contacts.github}</div> */}
                    {/* <div>VK: {user.contacts.vk}</div> */}
                    {/* <div>Facebook: {user.contacts.facebook}</div> */}
                    {/* <div>Instagram: {user.contacts.instagram}</div> */}
                    {/* <div>Twitter: {user.contacts.twitter}</div> */}
                    {/* <div>Website: {user.contacts.website}</div> */}
                    {/* <div>YouTube: {user.contacts.youtube}</div> */}
                    {/* <div>Main Link: {user.contacts.mainLink}</div> */}
                </span>
            </span>
        </div>)
}

export default User