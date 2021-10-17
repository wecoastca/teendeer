import { Challenge } from "@teendeer/types";
import { apiClient } from '../../utils';

export const createChallenge = async (challenge: Partial<Challenge>): Promise<Challenge> => {
  const response = await apiClient.post('/challenge', challenge);
  const data = response.data as Challenge;

  return data;
}

export const listChallenges = async (): Promise<Challenge[]> => {
  const response = await apiClient.get('/challenge');
  const data = response.data as Challenge[];

  return data;
};