import React from 'react';
import * as uuid from 'uuid';
import { TaskContext } from './context';
import { usePlayer } from '../player/context';

import type { NewTask, Task } from '../../types';

interface TaskProviderProps {
  children: React.ReactNode;
}

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const { player, updatePlayerXP, updatePlayerField } = usePlayer();
  const [page, setPage] = React.useState(0);

  function addTask({ name, description, page }: NewTask) {
    if (player.level < 2 && player.tasks.length >= 3) return;

    updatePlayerField({
      tasks: [
        ...player.tasks,
        {
          name,
          description,
          page,
          xp: 100 + player.level * 20,
          id: uuid.v4(),
          status: 0,
          favorite: false,
        },
      ],
    });

    return page;
  }

  function removeTask(id: string) {
    updatePlayerField({
      tasks: player.tasks.filter((task) => task.id !== id),
    });
  }

  function completeTask(task: Task) {
    updatePlayerXP(player, task.xp);

    removeTask(task.id);
  }

  function changePage(pageNumber: number) {
    setPage(pageNumber);
  }

  return (
    <TaskContext.Provider value={{ tasks: player.tasks, page, changePage, addTask, removeTask, completeTask }}>
      {children}
    </TaskContext.Provider>
  );
};
