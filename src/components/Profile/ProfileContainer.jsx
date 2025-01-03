import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import Profile from "./Profile";
import { compose } from "redux";
import withAuthRedirect from "../hoc/withAuthRedirect";
import Preloader from "../common/Preloader/Preloader";
import { getUserProfile } from "../../redux/profileReducer/profile-reducer";

const ProfileContainer = (props) => {
    const { profile, status, loading, error, userId } = props;
    const dispatch = useDispatch();

    // console.log("Profile props:", { profile, userId, status, loading });
    useEffect(() => {
        // console.log("Current URL:", window.location.href);
        // console.log("useEffect triggered with userId:", userId);
        if (userId) { // проверка на существование userId
            dispatch(getUserProfile(userId)); // 2.1 вызываем диспатч для получения профиля
            // console.log("Profile data after dispatch:", profile);
        }
    }, [dispatch, userId]); // 2.2 добавляем userId и getUserProfile в зависимости от которого будет запускатся useEffect

    if (loading) {
        return <Preloader />
    }
    if (error) {
        return <div>Error: {error}</div>
    }
    if (!profile) {
        return <div>Profile not found</div>
    }

    return (
        <Profile profile={profile} userId={userId} status={status} />
    );
}

const mapStateToProps = (state) => {
    // console.log("Profile State:", state.profilePage);
    // console.log("Auth State:", state.auth);

    return {
        profile: state.profilePage.profile, // получение профиля
        status: state.profilePage.status, // статус
        loading: state.profilePage.loading, // загрузка
        error: state.profilePage.error, // ошибка
        // userId: state.auth.userId // получение userId
    }
};

// диспатчим юзера в редьюсер
export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withAuthRedirect,
)(ProfileContainer)