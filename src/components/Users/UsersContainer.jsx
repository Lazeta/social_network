import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../../redux/users-selectors';
import {subscribe, unsubscribe, requestUsers, toggleIsFollowingProgress, setCurrentPage,} from "../../redux/users-reducer";
import React from 'react';
import { connect } from "react-redux";
import { compose } from 'redux';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import Users from './Users';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <div>
            {this.props.isFetching ? <Preloader /> : null}
            {this.props.users && <Users
                    totalUsersCount={this.props.totalUsersCount}
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    setCurrentPage={this.props.setCurrentPage}
                    onPageChanged={this.onPageChanged}
                    subscribe={this.props.subscribe}
                    unsubscribe={this.props.unsubscribe}
                    followingInProgress={this.props.followingInProgress}
                />
            }
        </div>
    }
}

// use selectors
let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        // users: getUsersSuper(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, { subscribe, unsubscribe, setCurrentPage, toggleIsFollowingProgress, getUsers: requestUsers }),
    withAuthRedirect,
)(UsersContainer)