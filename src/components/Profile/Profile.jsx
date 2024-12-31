import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { useSelector } from "react-redux";
import Preloader from "../common/Preloader/Preloader";

const Profile = (props) => {
    const { error } = useSelector(state => state.profilePage || {});
    // console.log("Profile Component:", { profile, status }); // Лог для отладки

    if (props.loading) {
        return <Preloader/>
    }
    if (props.error) {
        return <div>Error: {error}</div>
    }
    if (!props.profile) {
        return <div>Profile not found</div>
    }

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;