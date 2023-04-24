import React from 'react';
import { gsap } from 'gsap';
import { useTasks } from '../../context/task/context';

import type { Task } from '../../types';
import styles from './styles/tasks.module.scss';

interface TaskProps {
  task: Task;
}

const Task = ({ task }: TaskProps) => {
  const { completeTask } = useTasks();
  const taskRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const tween = gsap.from(taskRef.current, {
      y: -10,
      onComplete: () => {
        tween.revert();
      },
    });

    return () => {
      tween.revert();
    };
  }, []);

  return (
    <div
      onClick={() => completeTask(task)}
      ref={taskRef}
      className={styles.task}>
      <header className={styles.taskHeader}>
        <h2>{task.name}</h2>
        <p>{task.description}</p>
        <span>+{task.xp}</span>
      </header>
    </div>
  );
};

export default Task;
