import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 40},
                {id: 2, message: "It's my first post", likesCount: 20},
                {id: 3, message: "This is strange post", likesCount: 37},
                {id: 4, message: "Whats up", likesCount: 6},
                {id: 5, message: "Are you here?", likesCount: 0},
                {id: 6, message: "Come on!", likesCount: 62},
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
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
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}




export default store;
window.store = store;
// store - OOP 