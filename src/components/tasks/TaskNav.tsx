import React from 'react';
import { usePlayer } from '../../context/player/context';
import TaskNavPages from './TaskNavPages';
import TaskNavButtons from './TaskNavButtons';

import styles from './styles/tasks.module.scss';
import assets from '../../assets/sources';

const TaskNav = () => {
  const { player, updatePlayerField, loading } = usePlayer();
  const [canUseNavigation, setCanUseNavigation] = React.useState(false);

  function handleUnlockNavigation() {
    if (player.level < 2) return;
    setCanUseNavigation(true);
    updatePlayerField({ new: false });
  }

  React.useEffect(() => {
    if (!player.new) handleUnlockNavigation();
  }, [loading]);

  return (
    <nav className={styles.taskNav}>
      {canUseNavigation ? (
        <>
          <TaskNavPages />
          <TaskNavButtons />
        </>
      ) : (
        <button
          onClick={handleUnlockNavigation}
          type="button"
          className={player.level >= 2 ? styles.navUnlock : styles.navLock}>
          <img
            src={player.level >= 2 ? assets.unlock : assets.lock}
            alt="locked-section"
          />
        </button>
      )}
    </nav>
  );
};

export default TaskNav;
