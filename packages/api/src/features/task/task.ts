import { Task } from "@teendeer/types";
import { apiClient } from '../../utils';

export const createTask = async (task: Partial<Task>): Promise<Task> => {
  const response = await apiClient.post('/task', task);
  const data = response.data as Task;

  return data;
}

export const listTasks = async (): Promise<Task[]> => {
  const response = await apiClient.get('/task');
  const data = response.data as Task[];

  return data;
};