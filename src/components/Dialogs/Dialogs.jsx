import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} src={d.src} />)
    let messagesElements = state.messages.map(m => <Message key={m.id} id={m.id} message={m.message} />)

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    return (<div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <div className={s.dialog + ' ' + s.active}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}

            </div>
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    </div>)
}

export default Dialogs; 