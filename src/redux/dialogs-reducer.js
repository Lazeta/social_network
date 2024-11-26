const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            state.newMessageBody = action.body;
            return state;
        }
        case SEND_MESSAGE: {
            let maxId = Math.max(...state.messages.map(m => m.id));
            let newId = maxId + 1;
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({id: newId, message: body});
            return state;
        }
        default: {
            return state;
        }
    }
}

export const sendMessageCreator = (body) => ({ type: SEND_MESSAGE, body })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body })

export default dialogsReducer;