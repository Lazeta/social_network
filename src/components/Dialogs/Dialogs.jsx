import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} src={d.src}/>)
    let messagesElements = props.state.messages.map(m => <Message key={m.id} id={m.id} message={m.message} />)


    return (<div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <div className={s.dialog + ' ' + s.active}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    </div>)
}

export default Dialogs;