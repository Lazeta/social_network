import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            {/* <ProfileInfo userId={props.userId} profile={props.profile} status={props.status} updateStatus={props.updateStatus} /> */}
            <MyPostsContainer userId={props.userId} />
        </div>
    );
}

export default Profile;