import React from "react";
import s from './Users.module.css'
import userPhoto from '../../assets/images/profile-logo.png';
import { NavLink } from "react-router-dom";
import axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div className={s.pages}>
            {pages.map((p, index) => {
                return <span key={index}
                    onClick={(e) => { props.onPageChanged(p) }}
                    className={`${props.currentPage === p ? s.selectedPage : ''} ${s.pageNumber}`}
                >{p}</span>
            })}
        </div>

        {
            props.users.map((u, index) => <div key={index}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id} >
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                className={s.userPhoto} alt={u.photoUrl} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: { "API-KEY": '772fe908-10fe-45a5-97e7-06d1186f95e4'},
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unsubscribe(u.id)
                                        }
                                    })
                            }}>Unsubscribe</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.subscribe(u.id)
                                        }
                                    })
                            }}>Subscribe</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;