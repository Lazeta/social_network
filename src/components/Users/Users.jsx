import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";

const Users = (props) => {
    return (
        <div>
            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} />
            <div>
                {
                    props.users.map(u => {
                        if(!u){
                            return (<div>"User not found"</div>)
                        }
                        return <User
                        key={u.id} // Проверьте, существует ли свойство `id`
                        user={u} // Полный объект пользователя
                        followingInProgress={props.followingInProgress}
                        subscribe={props.subscribe}
                        unsubscribe={props.unsubscribe}
                    />
                    })
                }
            </div>
        </div>
    );
}

export default Users