import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyBlrOtGbHrUHM6qMu35DxU_Yu__5zN41fU',
  authDomain: 'react-realtime-chat-d8334.firebaseapp.com',
  projectId: 'react-realtime-chat-d8334',
  storageBucket: 'react-realtime-chat-d8334.appspot.com',
  messagingSenderId: '1071781708366',
  appId: '1:1071781708366:web:1cf58f2197a51074b5791f',
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
