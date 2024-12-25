import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../../redux/users-selectors';
import { subscribe, unsubscribe, requestUsers, setCurrentPage, toggleIsFollowingProgress, } from "../../redux/users-reducer";
import React from 'react';
import { connect } from "react-redux";
import { compose } from 'redux';
import Preloader from '../common/Preloader/Preloader';
import withAuthRedirect from '../hoc/withAuthRedirect';
import Users from './Users';
import { useEffect } from 'react';

const UsersContainer = ({
    users, pageSize, totalUsersCount, currentPage, isFetching, followingInProgress,
    requestUsers, setCurrentPage, subscribe, unsubscribe
}) => {

    useEffect(() => {
        requestUsers(currentPage, pageSize);
    }, [currentPage, pageSize, requestUsers]);

    const onPageChanged = (pageNumber) => {
        requestUsers(pageNumber, pageSize);
    }

    return (
        <div>
            {isFetching && <Preloader />}
            {users && <Users
                totalUsersCount={totalUsersCount}
                users={users}
                pageSize={pageSize}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                onPageChanged={onPageChanged}
                subscribe={subscribe}
                unsubscribe={unsubscribe}
                followingInProgress={followingInProgress}
            />
            }
        </div>)
}

// use selectors
let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, 
        { subscribe, unsubscribe, setCurrentPage, toggleIsFollowingProgress, requestUsers }),
    withAuthRedirect
)(UsersContainer)