import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} src={d.src}/>)
    let messagesElements = state.messages.map(m => <Message key={m.id} id={m.id} message={m.message} />)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    alert(props.isAuth);

    return (<div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <div className={s.dialog + ' ' + s.active}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
                <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea></div>
                <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>
        </div>
    </div>)
}

export default Dialogs;