import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
import { getUserProfile } from "../../redux/profile-reducer";
import { compose } from "redux";
import withAuthRedirect from "../hoc/withAuthRedirect";
import Preloader from "../common/Preloader/Preloader";

const ProfileContainer = ({ profile, userId, status, loading, getUserProfile }) => {
    // const { userId } = useParams(); // 1.0 деструктуризация объекта params и достаем userId

    // console.log('urlUserId:', userId);

    // useEffect(() => {
    //     if (userId !== undefined) {
    //         getUserProfile(userId); // 1.1 передаем userId в запрос
    //     } else {
    //         console.error("userId is undefined");
    //     }
    // }, [userId, getUserProfile]); // 1.2 добавляем userId и getUserProfile в зависимости от которого будет запускатся useEffect

    return (
        <>
            {loading ? <Preloader /> : profile ? <Profile profile={profile} userId={userId} status={status} /> : <div>Profile not found</div>}
            <Profile />
        </>
    );
}

// export default ProfileContainer

const mapStateToProps = (state) => ({
    profile: state.profilePage?.profile, // Используйте опциональную цепочку
    userId: state.auth.userId,
    status: state.profilePage?.status,
    loading: state.profilePage?.loading,
});

// диспатчим юзера в редьюсер
export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withAuthRedirect,
)(ProfileContainer)