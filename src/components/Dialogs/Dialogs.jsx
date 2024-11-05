import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Riki'},
        {id: 3, name: 'Alan'},
        {id: 4, name: 'Elon'},
        {id: 5, name: 'Alexa'},
        {id: 6, name: 'Michail'},
    ]
    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your name?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Hello'},
        {id: 5, message: 'Understand'},
    ]

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