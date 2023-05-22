import React from 'react';
import { Link } from 'react-router-dom';

import logoSvg from '../../assets/img/home-logo.svg';

import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.root}>
      <img width='200' src={logoSvg} alt='' />
      <h1>Добро пожаловать в реакт чат!</h1>
      <Link to='/login'>
        <button>Войти</button>
      </Link>
      <Link to='/register'>
        <button>Зарегистрироваться</button>
      </Link>
    </div>
  );
};

export default Home;
