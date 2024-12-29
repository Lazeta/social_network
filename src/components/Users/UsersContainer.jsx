import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../../redux/users-selectors';
import { subscribe, unsubscribe, requestUsers, setCurrentPage, toggleIsFollowingProgress, } from "../../redux/users-reducer";
import React from 'react';
import { connect } from "react-redux";
import { compose } from 'redux';
import Preloader from '../common/Preloader/Preloader';
import withAuthRedirect from '../hoc/withAuthRedirect';
import Users from './Users';
import { useEffect } from 'react';

const UsersContainer = (props) => {
    useEffect(() => {
        requestUsers(props.currentPage, props.pageSize,);
    }, [props.currentPage, props.pageSize]);

    console.log('Users in UsersContainer:', props.users);
    console.log('Total Users Count in UsersContainer:', props.totalUsersCount);
    console.log('Is Fetching in UsersContainer:', props.isFetching);
    console.log('Following In Progress in UsersContainer:', props.followingInProgress);

    const onPageChanged = (pageNumber) => {
        props.requestUsers(pageNumber, props.pageSize);
    }

    return (
        <div>
            {props.isFetching && <Preloader />}
            {props.users && <Users
                totalUsersCount={props.totalUsersCount}
                users={props.users}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                setCurrentPage={props.setCurrentPage}
                onPageChanged={onPageChanged}
                subscribe={subscribe}
                unsubscribe={unsubscribe}
                followingInProgress={props.followingInProgress}
            />
            }
        </div>)
}

// use selectors
let mapStateToProps = (state) => {

    // const users = getUsers(state)
    // const pageSize = getPageSize(state)
    // const totalUsersCount = getTotalUsersCount(state)
    // const currentPage = getCurrentPage(state)
    // const isFetching = getIsFetching(state)
    // const followingInProgress = getFollowingInProgress(state)

    // console.log('Users:', users);
    // console.log('Page Size:', pageSize);
    // console.log('Total Users Count:', totalUsersCount);
    // console.log('Current Page:', currentPage);
    // console.log('Is Fetching:', isFetching);
    // console.log('Following In Progress:', followingInProgress);

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