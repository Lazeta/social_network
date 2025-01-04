import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import Profile from "./Profile";
import { compose } from "redux";
import withAuthRedirect from "../hoc/withAuthRedirect";
import Preloader from "../common/Preloader/Preloader";
import { getUserProfile } from "../../redux/profileReducer/profile-reducer";
import { getError, getLoading, getProfile, getProfileStatus, getUserId } from "../../utils/users-selectors";

const ProfileContainer = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        // console.log("Current URL:", window.location.href);
        // console.log("useEffect triggered with userId:", userId);
        if (props.userId) { // проверка на существование userId
            dispatch(getUserProfile(props.userId)); // 2.1 вызываем диспатч для получения профиля
        }
    }, [dispatch, props.userId]); // 2.2 добавляем userId и getUserProfile в зависимости от которого будет запускатся useEffect

    if (props.loading) {
        return <Preloader />
    }
    if (props.error) {
        return <div>Error: {props.error}</div>
    }
    if (!props.profile) {
        return <div>Profile not found</div>
    }

    

    return (
        <Profile profile={props.profile} userId={props.userId} status={props.status} error={props.error} loading={props.loading}/>
    );
}

const mapStateToProps = (state) => {
    // console.log("ProfilePage State 0:", state.profilePage);
    // console.log("Auth State 1:", state.auth);
    // console.log("UsersPage State 3:", state.usersPage);


    return {
        profile: getProfile(state), // получение профиля
        status: getProfileStatus(state), // статус
        loading: getLoading(state), // загрузка
        error: getError(state), // ошибка
        userId: getUserId(state) // получение userId
    }
};

// диспатчим юзера в редьюсер
export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withAuthRedirect,
)(ProfileContainer)