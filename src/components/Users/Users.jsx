import React from "react";
import s from './Users.module.css'
import userPhoto from '../../assets/images/profile-logo.png';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div className={s.pages}>
            {pages.map(p => {
                return <span className={`${props.currentPage === p ? s.selectedPage : ''} ${s.pageNumber}`}
                    onClick={(e) => { props.onPageChanged(p) }}
                    key={p.id}
                >{p}</span>
            })}
        </div>

        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} alt={u.photoUrl} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unsubscribe(u.id) }}>Unsubscribe</button>
                            : <button onClick={() => { props.subscribe(u.id) }}>Subscribe</button>
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

        <div className={s.pages}>
            {pages.map(p => {
                return <span className={`${props.currentPage === p ? s.selectedPage : ''} ${s.pageNumber}`}
                    onClick={(e) => { props.onPageChanged(p) }}
                    key={p.id}
                >{p}</span>
            })}
        </div>
    </div>
}

export default Users;