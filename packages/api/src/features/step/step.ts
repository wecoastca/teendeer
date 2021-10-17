import { Step } from "@teendeer/types";
import { apiClient } from '../../utils';

export const createStep = async (step: Partial<Step>): Promise<Step> => {
  const response = await apiClient.post('/step', step);
  const data = response.data as Step;

  return data;
}

export const listSteps = async (): Promise<Step[]> => {
  const response = await apiClient.get('/step');
  const data = response.data as Step[];

  return data;
};

export const getStepsByTaskId = async (id: number): Promise<Step[]> => {
  const response = await apiClient.get(`/step/${id}`);
  const data = response.data as Step[];

  return data;
}