import React from 'react';
import { gsap } from 'gsap';
import { usePlayer } from '../../context/player/context';

import styles from './styles/level.module.scss';

const LevelBar = () => {
  const { player } = usePlayer();
  const componentRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const xp_percentage = Math.round((player.xp / player.max_xp) * 100);
    const { current } = componentRef;

    if (current) current.style.setProperty('--levelPercentage', `${String(xp_percentage)}%`);
  }, [player.xp]);

  return (
    <div
      ref={componentRef}
      className={styles.levelBar}>
      <div className={styles.levelFill}></div>
    </div>
  );
};

export default LevelBar;
