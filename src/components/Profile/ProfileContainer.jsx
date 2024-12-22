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


































// import React from "react";
// import { connect } from "react-redux";
// import { getStatus, getUserProfile, updateStatus } from "../../redux/profile-reducer";
// import { withAuthRedirect } from "../hoc/withAuthRedirect";
// import { compose } from "redux";
// import Profile from "./Profile";

// const ProfileContainer = ({ match, authorizedUserId, history, getUserProfile, getStatus, status, profile, updateStatus, ...props}) => {

//     useEffect(() => {
//         let userId = match.params.userId;
//         if (!userId) {
//             userId = authorizedUserId;
//             if (!userId) {
//                 history.push("/login"); // bad redirect
//             }
//         }
//         getUserProfile(userId);
//         getStatus(userId);
//     }, [match.params.userId, authorizedUserId, getUserProfile, history, status, profile, updateStatus]);

//     return (
//         <div>
//             <Profile {...props}
//                 profile={profile}
//                 status={status}
//                 updateStatus={updateStatus} />;
//         </div>
//     )
// }

// const mapStateToProps = ({ profilePage, auth }) => ({
//     profile: profilePage.profile,
//     status: profilePage.status,
//     authorizedUserId: auth.userId,
//     isAuth: auth.isAuth,
// });

// export default compose(
//     connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
//     withAuthRedirect,
// )(ProfileContainer)