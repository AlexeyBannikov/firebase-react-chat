import React from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

import { Context } from '../../index';

import styles from './Login.module.scss';

const Login = () => {
  const { auth } = React.useContext(Context);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMsg, setErrorMsg] = React.useState('');

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      if (
        error.toString().includes('The password is invalid or the user does not have a password') ||
        error.toString().includes('auth/user-not-found')
      ) {
        setErrorMsg('');
        setErrorMsg('Пароль или адрес электронной почты недействительны');
      }
    }
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.root}>
      <input
        className={styles.input}
        value={email}
        onChange={onChangeEmail}
        type='text'
        placeholder='E-mail'
      />
      <input
        className={styles.input}
        value={password}
        onChange={onChangePassword}
        type='text'
        placeholder='Password'
      />
      <button onClick={login}>Войти</button>
      <div style={{ marginTop: '10px' }}>
        <Link to='/'>
          <button>Вернуться на главную страницу</button>
        </Link>
      </div>

      {errorMsg ? <div className={styles.errorMsg}>{errorMsg}</div> : ''}
    </div>
  );
};

export default Login;
