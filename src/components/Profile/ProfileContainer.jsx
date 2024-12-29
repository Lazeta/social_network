import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
import { getUserProfile } from "../../redux/profile-reducer";
import { compose } from "redux";
import withAuthRedirect from "../hoc/withAuthRedirect";
import Preloader from "../common/Preloader/Preloader";

const ProfileContainer = (props) => {
    const { userId } = useParams(); // 2.0 деструктуризация объекта params и достаем userId

    console.log('urlUserId:', userId);

    // деструктурируем props для удобства
    const { profile, status, loading, getUserProfile } = props;

    useEffect(() => {
        // console.log("Current URL:", window.location.href);
        // console.log("useEffect triggered with userId:", userId);
        if (userId) { // проверка на существование userId
            getUserProfile(userId); // 2.1 вызываем диспатч для получения профиля
        } else {
            // обработка случая, когда userId не определен
            // console.error("userId is undefined");
        }
    }, [userId ,getUserProfile]); // 2.2 добавляем userId и getUserProfile в зависимости от которого будет запускатся useEffect

    console.log("loading:", loading);
    return (
        <>
            {loading ? <Preloader /> : profile 
            ? <Profile profile={profile} userId={userId} status={status} /> 
            : <div>Profile not found</div>}
        </>
    );
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile, // получение профиля
    status: state.profilePage.status, // статус
    loading: state.profilePage.loading, // загрузка
});

// диспатчим юзера в редьюсер
export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withAuthRedirect,
)(ProfileContainer)