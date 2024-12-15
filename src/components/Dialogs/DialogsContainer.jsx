import React from "react";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { sendMessage, updateNewMessageBody } from "../../redux/dialogs-reducer";
import { withAuthRedirect } from "../hoc/withAuthRedirect";

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

export default withAuthRedirect(connect(mapStateToProps, {updateNewMessageBody, sendMessage})(DialogsContainer));