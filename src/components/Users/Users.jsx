import React from "react";
import s from './Users.module.css';
import userPhoto from '../../assets/images/profile-logo.png';
import { NavLink } from "react-router-dom";

const Users = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    console.log('Users props:', props);

    return <div>
        <div className={s.pages}>
            {pages.map((p, index) => {
                return <span key={index}
                    onClick={() => { props.onPageChanged(p) }}
                    className={`${props.currentPage === p ? s.selectedPage : ''} ${s.pageNumber}`}
                >{p}</span>
            })}
        </div>

        {
            props.users.map((u, index) => <div key={index}>
                <span>
                    <div>
                        <NavLink to={`/profile/${u.id}`} >
                            <img src={u.photos.small ? u.photos.small : userPhoto}
                                className={s.userPhoto} alt={u.photoUrl} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => { props.unsubscribe(u.id) }}>
                                Unsubscribe
                            </button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => { props.subscribe(u.id) }}>
                                Subscribe
                            </button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location && u.location.country}</div>
                        <div>{u.location && u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users