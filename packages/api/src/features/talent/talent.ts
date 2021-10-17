import { Talent } from "@teendeer/types";
import { apiClient } from '../../utils';

export const createTalent = async (talent: Partial<Talent>): Promise<Talent> => {
  const response = await apiClient.post('/talent', talent);
  const data = response.data as Talent;

  return data;
}

export const listTalents = async (): Promise<Talent[]> => {
  const response = await apiClient.get('/talent');
  const data = response.data as Talent[];

  return data;
};