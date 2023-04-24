import React from 'react';
import { usePlayer } from '../../context/player/context';
import Header from '../header/Header';
import Level from '../level/Level';
import Loading from '../loading/Loading';
import Tasks from '../tasks/Tasks';

import styles from './styles/main.module.scss';

const Main = () => {
  const { loading } = usePlayer();

  return (
    <div className={styles.main}>
      {loading && <Loading />}
      <Header />
      <Tasks />
      <Level />
    </div>
  );
};

export default Main;
