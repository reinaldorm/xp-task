import React from 'react';
import { usePlayer } from '../../context/player/context';

import styles from './styles/level.module.scss';

const LevelText = () => {
  const { player } = usePlayer();

  return <h2 className={styles.levelText}>Level {player.level}</h2>;
};

export default LevelText;
