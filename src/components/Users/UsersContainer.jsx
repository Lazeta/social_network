import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers,
} from '../../utils/users-selectors';
import {
    subscribe,
    unsubscribe,
    requestUsers,
    setCurrentPage,
    toggleIsFollowingProgress,
} from '../../redux/usersReducer/users-reducer';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from '../common/Preloader/Preloader';
import withAuthRedirect from '../hoc/withAuthRedirect';
import Users from './Users';

const UsersContainer = ({
    pageSize, isFetching, requestUsers, currentPage, users, totalUsersCount, 
    setCurrentPage, subscribe, unsubscribe, followingInProgress
}) => {
    useEffect(() => {
        requestUsers(currentPage, pageSize); // Добавим dispatch
    }, [currentPage, pageSize, requestUsers]); // Не забудьте добавить requestUsers как зависимость

    const onPageChanged = (pageNumber) => {
        requestUsers(pageNumber, pageSize);
    };

    return (
        <div>
            {isFetching && <Preloader />}
            {users && <Users
                users={users}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                onPageChanged={onPageChanged}
                subscribe={subscribe}
                unsubscribe={unsubscribe}
                followingInProgress={followingInProgress}
            />}
        </div>
    );
};

// use selectors
let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    };
};

export default compose(
    connect(mapStateToProps, {
        subscribe,
        unsubscribe,
        setCurrentPage,
        toggleIsFollowingProgress,
        requestUsers,
    }),
    withAuthRedirect
)(UsersContainer);