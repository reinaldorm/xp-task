import React from 'react';
import { createPortal } from 'react-dom';
import { useTasks } from '../../context/task/context';
import { useModal } from '../../context/modal/context';
import TaskPage from './TaskPage';
import TaskNav from './TaskNav';

import styles from './styles/tasks.module.scss';
import Modal from '../modal/Modal';

const Tasks = () => {
  const { tasks } = useTasks();
  const { modal } = useModal();

  return (
    <div className={styles.tasks}>
      <TaskPage />
      <TaskNav />
      {modal && createPortal(<Modal />, document.body)}
    </div>
  );
};

export default Tasks;
