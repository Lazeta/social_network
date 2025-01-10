import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({profile, status, updateStatus, userId}) => {
    return (
        <div>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} />
            <MyPostsContainer userId={userId} />
        </div>
    );
}

export default Profile;