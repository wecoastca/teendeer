import { User } from "@teendeer/types";
import { apiClient } from '../../utils';

export const createUser = async (user: Partial<User>): Promise<User> => {
  const response = await apiClient.post('/user', user);
  const data = response.data as User;

  return data;
}

export const listUsers = async (): Promise<User[]> => {
  const response = await apiClient.get('/user');
  const data = response.data as User[];

  return data;
};