import React from "react";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { newMessageBody } from "../../redux/dialogsReducer/dialogs-reducer";
import { compose } from "redux";
import withAuthRedirect from "../hoc/withAuthRedirect";
import { getDialogs, getMessages } from "../../utils/users-selectors";

const DialogsContainer = (props) => {
    return (
        <Dialogs dialogs={props.dialogs} messages={props.messages} />
    )
}

let mapStateToProps = (state) => {
    return { 
        dialogs: getDialogs(state),
        messages: getMessages(state)
    }
}

export default compose(
    connect(mapStateToProps, { newMessageBody }),
    withAuthRedirect,
)(DialogsContainer)