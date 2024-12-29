import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { useSelector } from "react-redux";
import Preloader from "../common/Preloader/Preloader";

const Profile = ({status, updateStatus}) => {
    const { profile, loading, error } = useSelector(state => state.profilePage || {});

    if (loading) {
        return <Preloader/>
    }
    if (error) {
        return <div>Error: {error}</div>
    }
    if (!profile) {
        return <div>Profile not found</div>
    }

    return (
        <div>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;