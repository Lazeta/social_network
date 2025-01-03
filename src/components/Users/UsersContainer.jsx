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

const UsersContainer = (props) => {
    const { requestUsers, currentPage, pageSize } = props;

    useEffect(() => {
        requestUsers(currentPage, pageSize); // Добавим dispatch
    }, [currentPage, pageSize, requestUsers]); // Не забудьте добавить requestUsers как зависимость

    // console.log('Users in UsersContainer:', props.users);
    // console.log('Total Users Count in UsersContainer:', props.totalUsersCount);
    // console.log('Is Fetching in UsersContainer:', props.isFetching);
    // console.log('Following In Progress in UsersContainer:', props.followingInProgress);

    const onPageChanged = (pageNumber) => {
        props.requestUsers(pageNumber, props.pageSize);
    };

    return (
        <div>
            {props.isFetching && <Preloader />}
            {props.users && <Users
                users={props.users}
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                setCurrentPage={props.setCurrentPage}
                onPageChanged={onPageChanged}
                subscribe={props.subscribe}
                unsubscribe={props.unsubscribe}
                followingInProgress={props.followingInProgress}
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