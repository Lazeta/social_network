import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { compose } from "redux";
import withAuthRedirect from "../hoc/withAuthRedirect";
import Preloader from "../common/Preloader/Preloader";
import { getUserProfile } from "../../redux/profileReducer/profile-reducer";
import { getError, getLoading, getProfile, getProfileStatus, getUserId } from "../../utils/users-selectors";

const ProfileContainer = ({ userId, profile, status, updateStatus, loading, error, isFetching }) => {
    return (
        <div>
            {isFetching && <Preloader />}
            {error && <div>Error: {error}</div>}
            {!profile && <div>Profile not found</div>}
            {profile && <Profile
                profile={profile}
                userId={userId}
                status={status}
                error={error}
                loading={loading}
                updateStatus={updateStatus}
            />}
        </div>
    );
}

const mapStateToProps = (state) => {
    // 1
    return {
        profile: getProfile(state), // получение профиля
        userId: getUserId(state), // получение userId
        status: getProfileStatus(state), // статус
        loading: getLoading(state), // загрузка
        error: getError(state), // ошибка
    }
};

// диспатчим юзера в редьюсер
export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withAuthRedirect,
)(ProfileContainer)

// 1 маппинг пропсов состояния из редьюсера к пропсам компонента Profile используя объекты из юзер селекторов


   // const dispatch = useDispatch();
    // useEffect(() => {
    //     // console.log("Current URL:", window.location.href);
    //     // console.log("useEffect triggered with userId:", userId);
    //     if (userId) { // проверка на существование userId
    //         dispatch(getUserProfile(userId)); // 2.1 вызываем диспатч для получения профиля
    //     }
    // }, [dispatch, userId]); // 2.2 добавляем userId и getUserProfile в зависимости от которого будет запускатся useEffect