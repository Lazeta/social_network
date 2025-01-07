import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";

const Users = ({ currentPage, onPageChanged, totalUsersCount, 
    pageSize, users, followingInProgress, subscribe, unsubscribe 
}) => {
    return (
        <div>
            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize} />
            <div>
                {
                    users.map(u => {
                        if (!u) {
                            return (<div>"User not found"</div>)
                        }
                        return <User
                            key={u.id}
                            user={u} // Полный объект пользователя
                            followingInProgress={followingInProgress}
                            subscribe={subscribe}
                            unsubscribe={unsubscribe}
                        />
                    })
                }
            </div>
        </div>
    );
}

export default Users