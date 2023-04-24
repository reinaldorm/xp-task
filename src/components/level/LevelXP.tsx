import React from 'react';
import { usePlayer } from '../../context/player/context';

import styles from './styles/level.module.scss';

const LevelXP = () => {
  const { player } = usePlayer();

  return (
    <p className={styles.levelXP}>
      {player.xp}/{player.max_xp}
    </p>
  );
};

export default LevelXP;
