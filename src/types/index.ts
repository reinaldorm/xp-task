export type TaskStatus = 0 | 1 | 2; // 0 - active, 1 - completed, 2 - favorite

export interface NewTask {
  name: string;
  description: string;
  page: number;
}

export interface Task {
  id: string;
  xp: number;
  name: string;
  description: string;
  status: TaskStatus;
  favorite: boolean;
  page: number;
}

export interface Player {
  tasks: Task[];
  level: number;
  max_xp: number;
  xp: number;
  new: boolean;
}
