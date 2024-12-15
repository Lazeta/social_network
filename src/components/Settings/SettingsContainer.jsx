import React from "react";
import { connect } from "react-redux";
// import { Navigate } from "react-router-dom";

class SettingsContainer extends React.Component {
    render () {
        // if (!this.props.isAuth) return <Navigate to={'/Login'}/>
        return (
            <div className={s.settings}>
                Settings
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {})(SettingsContainer);