const SEND_MESSAGE = 'SEND_MESSAGE';

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
}

// 1 // 3
const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            // 4
            let maxId = state.messages.length > 0 
                ? Math.max(...state.messages.map(m => m.id)) : 0;

            let newId = maxId + 1;
            return {
                ...state, 
                messages: [...state.messages, {id: newId, message: body}], 
            }
        } 
        default: {
            return state;
        }
    }
}

// 2
export const addMessage = (newMessage) => {
    // console.log("Adding post:", newMessage);
    return { type: SEND_MESSAGE, newMessageBody: newMessage }
} 

export default dialogsReducer;

// 1 Редьюсер обрабатывает обновления состояния на основе действий, которые ему отправляются.
// 2 Когда вызывается функция addMessage, она возвращает объект действия с типом SEND_MESSAGE 
//   и содержимым нового сообщения
// 3 В редьюсере функция dialogsReducer проверяет тип действия: если это SEND_MESSAGE, она берет 
//   текст нового сообщения и обновляет состояние, добавляя новое сообщение в массив сообщений.
// 4 получаем максимальное значение id из массива сообщений и используем его для генерации нового id