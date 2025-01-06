import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

let Dialogs = (props) => {
    // 3
    const dialogsElements = props.dialogs.map(d => (
        <DialogItem key={d.id} id={d.id} name={d.name} src={d.src} />
    ));
    // 4
    const messagesElements = props.messages.map(m => (
        <Message key={m.id} id={m.id} message={m.message} />
    ));

    // 2
    const addNewMessage = (values) => {
        props.addMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialog} ${s.active}`}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}

                </div>
                {/* 1 */}
                <AddMessageForm onSubmit={addNewMessage} />
            </div>
        </div>)
}

export default Dialogs; 

// 1 рендерим компоненту формы AddMessageForm.
//   Когда пользователь отправляет форму, вызывается функция onSubmit, которая передает значения 
//   формы (новое сообщение) в родительский компонент.
// 2 вызываем функцию addMessage из пропсов и передаем ей новое сообщение.
// 3 создаем массив диалогов и возвращаем его в рендере компоненте Dialogs.
// 4 создаем массив сообщений и возвращаем его в рендере компоненте Dialogs.