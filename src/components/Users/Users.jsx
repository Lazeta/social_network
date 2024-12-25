import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({ currentPage, onPageChanged, totalItemsCount, pageSize, users, ...props }) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalItemsCount} pageSize={pageSize} />
        <div>
            {
                users.map(u =>
                    <User
                        key={u.id}
                        user={u.id}
                        followingInProgress={props.followingInProgress}
                        subscribe={props.subscribe}
                        unsubscribe={props.unsubscribe}
                    />
                )
            }
        </div>
    </div>
}

export default Users