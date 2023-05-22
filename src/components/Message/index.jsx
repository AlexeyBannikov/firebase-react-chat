import React from 'react';

import styles from './Message.module.scss';

const Message = ({ message, userEmail, userId, authUserId }) => {
  return (
    <div
      className={
        userId === authUserId ? `${styles.userBlock}` : `${styles.userBlock} ${styles.friendBlock}`
      }>
      <div>{userEmail.split('@')[0]}</div>
      <div>{message}</div>
    </div>
  );
};

export default Message;
