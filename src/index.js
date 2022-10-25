import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyA03EMGxrGx7O_5s8cPiGp3ZWxLSzOtAv4',
  authDomain: 'react-chat-8e94c.firebaseapp.com',
  projectId: 'react-chat-8e94c',
  storageBucket: 'react-chat-8e94c.appspot.com',
  messagingSenderId: '638508899109',
  appId: '1:638508899109:web:b07a52d9eea51b63bcd8cc',
  measurementId: 'G-BJ57QW1LN2',
});

export const Context = React.createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{ firebase, auth, firestore }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>,
);
