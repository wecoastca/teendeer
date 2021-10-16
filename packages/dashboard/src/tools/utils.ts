import axios from "axios";

const isDev = process.env.NODE_ENV === "development";

export const getApiHost = () => {
  // TODO: maybe prod and dev envs?
  return isDev ? `http://178.154.221.35:5000` : 'http://178.154.221.35:5000';
}

export const apiClient = axios.create({
  baseURL: getApiHost(),
  headers: { 'X-Custom-Header': 'foobar', 'Content-Type': 'application/json' } // TODO: maybe auth later?
});

