import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
import { getUserProfile } from "../../redux/profile-reducer";
import { compose } from "redux";
import withAuthRedirect from "../hoc/withAuthRedirect";

const ProfileContainer = ({ getUserProfile, profile }) => {
    const { userId } = useParams();

    useEffect(() => {
        getUserProfile(userId);
    }, []);

    return <Profile profile={profile} />;
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withAuthRedirect,
)(ProfileContainer)