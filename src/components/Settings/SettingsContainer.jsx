import React from "react";
import { connect } from "react-redux";
import Settings from "./Settings";
import { Navigate } from "react-router-dom";
import withAuthRedirect from "../hoc/withAuthRedirect";

const SettingsContainer = ({ isAuth }) => {
    return isAuth ? <Settings/> : <Navigate to='/login' />
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default withAuthRedirect(connect(mapStateToProps)(SettingsContainer));