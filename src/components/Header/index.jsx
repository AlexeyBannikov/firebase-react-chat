import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';

import { Context } from '../../index';

import styles from './Header.module.scss';

const Header = () => {
  const { auth } = React.useContext(Context);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const onClickOut = () => {
    auth.signOut();
    navigate('/');
  };

  return (
    <div className={styles.header}>
      <Link to='/'>
        <div className={styles.title}>React Chat</div>
      </Link>
      {user ? (
        <div>
          <span className={styles.userName}>{user.email.split('@')[0]}</span>
          <button onClick={onClickOut}>Выйти</button>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
