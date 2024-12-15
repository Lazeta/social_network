import React from "react";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { sendMessage, updateNewMessageBody } from "../../redux/dialogs-reducer";
import { Navigate } from "react-router-dom";

class DialogsContainer extends React.Component {
    render() {
        if (!this.props.isAuth) return <Navigate to={"/Login"}/> // redirect to Login page if user is not authorized

        return <Dialogs {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {updateNewMessageBody, sendMessage})(DialogsContainer);