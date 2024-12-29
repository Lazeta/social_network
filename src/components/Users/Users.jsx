import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = (props) => {
    return <div>
        <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} totalItemsCount={props.totalItemsCount} pageSize={props.pageSize} />
        <div>
            {
                props.users.map(u =>
                    <User
                        key={u.userId}
                        user={u.userId}
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