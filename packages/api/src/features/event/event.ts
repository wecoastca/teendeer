import { Product } from "@teendeer/types";
import { apiClient } from '../../utils';

export const listEvents = async (): Promise<Product[]> => {
  const response = await apiClient.get('/events');
  const data = response.data as Product[];

  return data;
};