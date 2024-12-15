import React from 'react';
import { connect } from "react-redux";
import {
    subscribe, unsubscribe, getUsers, toggleIsFollowingProgress, setCurrentPage,
} from "../../redux/users-reducer";
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../hoc/withAuthRedirect';

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

let mapStateToProps = (state) => {
    return {
        totalUsersCount: state.usersPage.totalUsersCount,
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default withAuthRedirect(connect(mapStateToProps, { subscribe, unsubscribe, setCurrentPage, toggleIsFollowingProgress, getUsers })(UsersContainer));