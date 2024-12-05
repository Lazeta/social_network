import React from 'react';
import s from './Users.module.css'

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: false,
                fullName: "Sasha",
                photoUrl: "https://i.pinimg.com/564x/ac/00/f3/ac00f3c6e79e6cd3108b4ca3057df33d.jpg",
                status: "Hi, my name is Sasha",
                location: { city: "Minsk", country: "Belarus" },
            },
            {
                id: 2,
                followed: true,
                fullName: "Nikita",
                photoUrl: "https://i.pinimg.com/564x/ac/00/f3/ac00f3c6e79e6cd3108b4ca3057df33d.jpg",
                status: "Hi, my name is Nikita",
                location: { city: "Brest", country: "Belarus" },
            },
            {
                id: 3,
                followed: true,
                fullName: "Leon",
                photoUrl: "https://i.pinimg.com/564x/ac/00/f3/ac00f3c6e79e6cd3108b4ca3057df33d.jpg",
                status: "Hi, my name is Leon",
                location: { city: "Moscow", country: "Russia" },
            },
            {
                id: 4,
                followed: false,
                fullName: "Alexei",
                photoUrl: "https://i.pinimg.com/564x/ac/00/f3/ac00f3c6e79e6cd3108b4ca3057df33d.jpg",
                status: "Hi, my name is Alexei",
                location: { city: "New York", country: "USA" },
            },
        ])
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={s.userPhoto} src={u.photoUrl} alt={u.photoUrl} />
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
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;