import React from 'react';
import { useTasks } from '../../context/task/context';

import styles from './styles/tasks.module.scss';
import assets from '../../assets/sources';

const TaskNavButtons = () => {
  const { page, changePage } = useTasks();

  return (
    <div className={styles.taskNavButtons}>
      <button
        type="button"
        onClick={() => changePage(page - 1 < 0 ? 0 : page - 1)}
        className={styles.navButton}>
        <img
          src={assets.chevronLeft}
          alt="previous-page"
        />
      </button>
      <button
        type="button"
        onClick={() => changePage(page + 1 > 2 ? 2 : page + 1)}
        className={styles.navButton}>
        <img
          src={assets.chevronRight}
          alt="next-page"
        />
      </button>
    </div>
  );
};

export default TaskNavButtons;
