import React from 'react';

import type { Task } from '../../types';
import styles from './styles/tasks.module.scss';

const TaskSkeleton = () => {
  return (
    <div className={styles.taskSkeleton}>
      <header className={styles.taskHeader}>
        <h2>Your new task will appear here!</h2>
        <p>Press add task button.</p>
        <span>+XP</span>
      </header>
    </div>
  );
};

export default TaskSkeleton;
