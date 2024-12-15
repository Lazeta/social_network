import React from "react";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { sendMessage, updateNewMessageBody } from "../../redux/dialogs-reducer";

class DialogsContainer extends React.Component {
    render() {
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