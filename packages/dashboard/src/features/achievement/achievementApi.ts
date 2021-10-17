import { Achievement } from "@teendeer/types";
import { apiClient } from '../../tools/utils';

export const createAchievement = async (achievement: Partial<Achievement>): Promise<Achievement> => {
  const response = await apiClient.post('/achievement', achievement);
  const data = response.data as Achievement;

  return data;
}

export const listAchievement = async (): Promise<Achievement[]> => {
  const response = await apiClient.get('/achievement');
  const data = response.data as Achievement[];

  return data;
};