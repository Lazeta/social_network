import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = ({dialogsData, messagesData}) => {


    let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messageElements = messagesData.map(m => <Message message={m.message} key={m.id} id={m.id}/>)


    return (<div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <div className={s.dialog + ' ' + s.active}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messageElements }
            </div>
        </div>
    </div>)
}

export default Dialogs;