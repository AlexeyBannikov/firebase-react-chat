import React from 'react';
import firebase from 'firebase/compat/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { Context } from '../../index';
import Message from '../../components/Message';
import Loader from '../../components/Loader';

import styles from './Chat.module.scss';

const Chat = () => {
  const { auth, firestore } = React.useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = React.useState('');
  const [messages, loading] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt'),
  );

  const sendMessage = async () => {
    if (value) {
      await firestore.collection('messages').add({
        uid: user.uid,
        email: user.email,
        text: value,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });

      setValue('');
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const keyPressHandler = (e) => {
    if (e.key === 'Enter') {
      sendMessage(value);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.root}>
      <div className={styles.chat}>
        {messages.map((message) => (
          <Message
            key={message.createdAt}
            authUserId={user.uid}
            userId={message.uid}
            message={message.text}
            userEmail={message.email}
          />
        ))}
      </div>
      <div className={styles.input}>
        <input
          value={value}
          onChange={onChangeInput}
          onKeyPress={keyPressHandler}
          type='text'
          placeholder='Напишите сообщение...'
        />
        <button onClick={sendMessage}>Отправить</button>
      </div>
    </div>
  );
};

export default Chat;
