import React from 'react';
import { useTasks } from '../../context/task/context';

import styles from './styles/tasks.module.scss';
import Task from './Task';
import TaskSkeleton from './TaskSkeleton';

const TaskPage = () => {
  const { page, tasks } = useTasks();

  const currentPage = React.useMemo(() => {
    const nextPage = page * 3;

    return [0 + nextPage, 1 + nextPage, 2 + nextPage];
  }, [page]);

  return (
    <div className={styles.taskPage}>
      {currentPage.map((slot) => {
        return tasks[slot] ? (
          <Task
            key={tasks[slot].id}
            task={tasks[slot]}
          />
        ) : (
          <TaskSkeleton key={slot} />
        );
      })}
    </div>
  );
};

export default TaskPage;
