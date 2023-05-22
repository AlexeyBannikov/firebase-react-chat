import React from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

import { Context } from '../../index';

import styles from './Register.module.scss';

const Register = () => {
  const { auth } = React.useContext(Context);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMsg, setErrorMsg] = React.useState('');

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      if (error.toString().includes('auth/weak-password')) {
        setErrorMsg('');
        setErrorMsg('Пароль должен быть минимум 6 символов');
      } else if (error.toString().includes('auth/email-already-in-use')) {
        setErrorMsg('');
        setErrorMsg('Адрес электронной почты уже используется другой учетной записью');
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
      <button onClick={register}>Зарегистрироваться</button>
      <div style={{ marginTop: '10px' }}>
        <Link to='/'>
          <button>Вернуться на главную страницу</button>
        </Link>
      </div>

      {errorMsg ? <div className={styles.errorMsg}>{errorMsg}</div> : ''}
    </div>
  );
};

export default Register;
