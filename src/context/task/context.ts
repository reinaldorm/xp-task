import React from 'react';

import type { Task, NewTask } from '../../types';

export interface TaskContextProps {
  tasks: Task[];
  page: number;
  addTask: (task: NewTask) => number | undefined;
  changePage: (pageNumber: number) => void;
  removeTask: (taskID: string) => void;
  completeTask: (task: Task) => void;
}

export const TaskContext = React.createContext<TaskContextProps | null>(null);

export const useTasks = () => React.useContext(TaskContext) as TaskContextProps;
