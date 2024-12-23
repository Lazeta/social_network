import React from "react";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { newMessageBody } from "../../redux/dialogs-reducer";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

let DialogsContainer = (props) => <Dialogs {...props}/>

let mapStateToProps = ({dialogsPage}) => {
    return dialogsPage
}

export default compose(
    connect(mapStateToProps, { newMessageBody }),
    withAuthRedirect,
)(DialogsContainer)