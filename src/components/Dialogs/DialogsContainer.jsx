import React from "react";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { newMessageBody } from "../../redux/dialogsReducer/dialogs-reducer";
import { compose } from "redux";
import withAuthRedirect from "../hoc/withAuthRedirect";

let DialogsContainer = (props) => <Dialogs {...props}/>

let mapStateToProps = ({dialogsPage}) => {
    return dialogsPage
}

export default compose(
    connect(mapStateToProps, { newMessageBody }),
    withAuthRedirect,
)(DialogsContainer)