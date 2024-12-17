import React from "react";
import { connect } from "react-redux";
import { getStatus, getUserProfile, updateStatus } from "../../redux/profile-reducer";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return <Profile {...this.props } profile={this.props.profile} 
        status={this.props.status} updateStatus={this.props.updateStatus}/>;
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
});

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withAuthRedirect,
)(ProfileContainer)
















// import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import Profile from "./Profile";
// import { useParams } from "react-router-dom";
// import { getUserProfile } from "../../redux/profile-reducer";
// import { withAuthRedirect } from "../hoc/withAuthRedirect";
// import { compose } from "redux";

// const ProfileContainer = ({ getUserProfile, profile }) => {
//     const { userId } = useParams();

//     useEffect(() => {
//         getUserProfile(userId);
//     }, [userId, getUserProfile]);

//     return <Profile profile={profile} />;
// }

// const mapStateToProps = (state) => ({
//     profile: state.profilePage.profile
// });

// export default compose(
//     connect(mapStateToProps, { getUserProfile }),
//     withAuthRedirect,
// )(ProfileContainer)