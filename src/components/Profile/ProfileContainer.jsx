import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Profile from "./Profile";
import { compose } from "redux";
import withAuthRedirect from "../hoc/withAuthRedirect";
import Preloader from "../common/Preloader/Preloader";
import { getUserProfile, updateStatus } from "../../redux/profileReducer/profile-reducer";

const ProfileContainer = ({ profile, status, loading, getUserProfile }) => {
    
    const userId = useSelector(state => state.profilePage.userId || {});
    const error = useSelector(state => state.profilePage || {});
    const dispatch = useDispatch();
    console.log("Profile props:", { profile, userId, status, updateStatus, loading });

    useEffect(() => {
        // console.log("Current URL:", window.location.href);
        // console.log("useEffect triggered with userId:", userId);
        if (userId) { // проверка на существование userId
            dispatch(getUserProfile(userId)); // 2.1 вызываем диспатч для получения профиля
            console.log("Profile data after dispatch:", profile);
        }
    }, [userId ,getUserProfile, dispatch, profile]); // 2.2 добавляем userId и getUserProfile в зависимости от которого будет запускатся useEffect

    if (loading) {
        return <Preloader/>
    }
    if (error) {
        return <div>Error: {error}</div>
    }
    if (!profile) {
        return <div>Profile not found</div>
    }

    // console.log("loading:", loading);
    return (
        <>
    {/* отображение профиля и статус пользователя если загрузка завершена и профиль существует */}
            {loading ? <Preloader /> : profile 
            ? 
            <Profile profile={profile} userId={userId} status={status} /> : null}
        </>
    );
}

const mapStateToProps = (state) => {
    // console.log("Profile State:", state.profilePage);

    return {
        profile: state.profilePage.profile, // получение профиля
        status: state.profilePage.status, // статус
        loading: state.profilePage.loading, // загрузка
    } 
};

// диспатчим юзера в редьюсер
export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withAuthRedirect,
)(ProfileContainer)