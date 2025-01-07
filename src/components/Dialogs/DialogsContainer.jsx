import React from "react";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { addMessage } from "../../redux/dialogsReducer/dialogs-reducer";
import { compose } from "redux";
import withAuthRedirect from "../hoc/withAuthRedirect";
import { getDialogs, getMessages } from "../../utils/users-selectors";

// 4
const DialogsContainer = ({dialogs, messages, addMessage}) => {
    // 3
    return (
        <Dialogs dialogs={dialogs} messages={messages} addMessage={addMessage} />
    )
}

// 1
let mapStateToProps = (state) => {
    return { 
        dialogs: getDialogs(state),
        messages: getMessages(state)
    }
}

// 2 // 5 
export default compose(
    connect(mapStateToProps, { addMessage }),
    withAuthRedirect,
)(DialogsContainer)

// 1 mapStateToProps связывает состояние Redux с пропсами, которые будут переданы в компонент Dialogs.
// 2 добавляем addMessage в пропсы компонента и диспатчим его в редьюсер с помощью 
//   connect и withAuthRedirect
// 3 рендерим компоненту Dialogs и передаем ему пропсы состояния из редьюсера
// 4 Это компонент, который соединяет Redux с вашим компонентом Dialogs.
// 5 Вторая часть — это диспатч действий. Как только новое сообщение отправляется из AddMessageForm, 
//   функция addMessage передается в Dialogs как пропс, и мы можем называть её для добавления сообщения 
//   в состояние Redux.