import React from "react";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { sendMessage, updateNewMessageBody } from "../../redux/dialogs-reducer";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

class DialogsContainer extends React.Component {
    render() {
        return <Dialogs {...this.props}/>
    }
}



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

export default compose(
    connect(mapStateToProps, {updateNewMessageBody, sendMessage}),
    withAuthRedirect,
)(DialogsContainer)