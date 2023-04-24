import React from 'react';
import clsx from 'clsx';

import styles from './styles/tasks.module.scss';
import { useTasks } from '../../context/task/context';

const TaskNavPages = () => {
  const { page, changePage } = useTasks();

  return (
    <div className={styles.taskNavPages}>
      <button
        onClick={() => changePage(0)}
        type="button"
        className={clsx(styles.taskPageButton, page === 0 && 'active')}>
        <span>1</span>
      </button>
      <button
        onClick={() => changePage(1)}
        type="button"
        className={clsx(styles.taskPageButton, page === 1 && 'active')}>
        <span>2</span>
      </button>
      <button
        onClick={() => changePage(2)}
        type="button"
        className={clsx(styles.taskPageButton, page === 2 && 'active')}>
        <span>3</span>
      </button>
    </div>
  );
};

export default TaskNavPages;
