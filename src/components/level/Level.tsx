import React from 'react';
import LevelBar from './LevelBar';
import LevelText from './LevelText';
import LevelXP from './LevelXP';

import styles from './styles/level.module.scss';

const Level = () => {
  return (
    <div className={styles.level}>
      <LevelBar />
      <LevelXP />
      <LevelText />
    </div>
  );
};

export default Level;
