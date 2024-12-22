import React from "react";
import s from './Users.module.css';
import userPhoto from '../../assets/images/profile-logo.png';
import { NavLink } from "react-router-dom";

const User = ({ user, followingInProgress, subscribe, unsubscribe }) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={`/profile/${user.id}`} >
                        <img src={user.photos.small ? user.photos.small : userPhoto}
                            className={s.userPhoto} alt={user.photoUrl} />
                    </NavLink>
                </div>
                <div>
                    {user.followed
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
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{user.location && user.location.country}</div>
                    <div>{user.location && user.location.city}</div>
                </span>
            </span>
        </div>)
}

export default User