import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
    debugger

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.id}`)
            .then(response => {
                this.props.setUsersProfile(response.data);
            });
    }
    render () {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);