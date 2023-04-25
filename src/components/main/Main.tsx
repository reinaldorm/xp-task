import React from 'react';
import { createPortal } from 'react-dom';
import { usePlayer } from '../../context/player/context';
import Header from '../header/Header';
import Tasks from '../tasks/Tasks';
import Level from '../level/Level';
import Loading from '../loading/Loading';
import Tutorial from '../tutorial/Tutorial';

import styles from './styles/main.module.scss';

const Main = () => {
  const { player, loading } = usePlayer();

  return (
    <div className={styles.main}>
      {loading && <Loading />}
      <Header />
      <Tasks />
      <Level />
      {player.tutorial.active && createPortal(<Tutorial />, document.body)}
    </div>
  );
};

export default Main;
