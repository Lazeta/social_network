import dialogsReducer, { addMessage } from "./dialogs-reducer";

let initialState = {
  dialogs: [
    {
      id: 1,
      name: "Sasha",
      src: "https://i.pinimg.com/564x/ac/00/f3/ac00f3c6e79e6cd3108b4ca3057df33d.jpg",
    },
    {
      id: 2,
      name: "Riki",
      src: "https://bannerplus.ru/files/img/pics/avatarki-dlia-zhenshchin-kartinki/avatarki-dlia-zhenshchin-kartinki-1.webp",
    },
    {
      id: 3,
      name: "Alan",
      src: "https://masterpiecer-images.s3.yandex.net/1c82a984908311ee9daa3abd0be4d755:upscaled",
    },
    {
      id: 4,
      name: "Elon",
      src: "https://avatarzo.ru/wp-content/uploads/medved-flag-rossii.jpg",
    },
    {
      id: 5,
      name: "Alexa",
      src: "https://freelance.ru/img/portfolio/pics/00/43/1A/4397650.jpg",
    },
    {
      id: 6,
      name: "Michail",
      src: "https://i.pinimg.com/236x/52/99/bf/5299bfe015e7c586826a3ba390b13f35.jpg",
    },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your name?" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Hello" },
    { id: 5, message: "Understand" },
    { id: 6, message: "Lorem ipsum lorem" },
  ],
};

it("new message should be added", () => {
  let action = addMessage("Hello, how are you?");
  let newState = dialogsReducer(initialState, action);

  expect(newState.messages.length).toBe(7); // Сообщение должно добавляться
  expect(newState.messages[6].message).toBe("Hello, how are you?"); // Новое сообщение должно совпадать
});

it("empty message should not be added", () => {
  let action = addMessage(""); // Пустое сообщение
  let newState = dialogsReducer(initialState, action);

  expect(newState.messages.length).toBe(6); // Сообщение не должно добавляться
});

// it("new message should be deleted", () => {
//     let action = deleteMessage(1);
//     let newState = dialogsReducer(initialState, action);

//     expect(newState.messages.length).toBe(6);
// })