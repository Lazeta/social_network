import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

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
let postData = [
    {id: 1, message: "Hi, how are you?", likesCount: 40},
    {id: 2, message: "It's my first post", likesCount: 20},
    {id: 3, message: "This is strange post", likesCount: 37},
    {id: 4, message: "Whats up", likesCount: 6},
    {id: 5, message: "Are you here?", likesCount: 0},
    {id: 6, message: "Come on!", likesCount: 62},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App dialogsData={dialogsData} messagesData={messagesData} postData={postData}/>
  </React.StrictMode>
);
