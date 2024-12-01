const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Sasha', src: "https://i.pinimg.com/564x/ac/00/f3/ac00f3c6e79e6cd3108b4ca3057df33d.jpg"},
        {
            id: 2,
            name: 'Riki',
            src: "https://bannerplus.ru/files/img/pics/avatarki-dlia-zhenshchin-kartinki/avatarki-dlia-zhenshchin-kartinki-1.webp"
        },
        {
            id: 3,
            name: 'Alan',
            src: "https://masterpiecer-images.s3.yandex.net/1c82a984908311ee9daa3abd0be4d755:upscaled"
        },
        {id: 4, name: 'Elon', src: "https://avatarzo.ru/wp-content/uploads/medved-flag-rossii.jpg"},
        {id: 5, name: 'Alexa', src: "https://freelance.ru/img/portfolio/pics/00/43/1A/4397650.jpg"},
        {id: 6, name: 'Michail', src: "https://i.pinimg.com/236x/52/99/bf/5299bfe015e7c586826a3ba390b13f35.jpg"},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your name?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Hello'},
        {id: 5, message: 'Understand'},
        {id: 6, message: 'Lorem ipsum lorem'},
    ],
    newMessageBody: "",
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            }
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            let maxId = state.messages.length > 0 ? Math.max(...state.messages.map(m => m.id)) : 0;
            let newId = maxId + 1;
            return {
                ...state, 
                messages: [...state.messages, {id: newId, message: body}], 
                newMessageBody: "",
            }
        }
        default: {
            return state;
        }
    }
}

export const sendMessageCreator = (body) => ({ type: SEND_MESSAGE, body })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;