import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
import { getUserProfile } from "../../redux/profile-reducer";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

const ProfileContainer = ({ getUserProfile, profile }) => {
    const { userId } = useParams();

    useEffect(() => {
        getUserProfile(userId);
    }, [userId, getUserProfile]);

    return <Profile profile={profile} />;
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withAuthRedirect,
)(ProfileContainer)