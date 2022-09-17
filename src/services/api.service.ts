import axios from "axios";

const defaultConfig = {
  baseURL: process.env.API_BASE_URL,
  headers: {'Content-Type': 'application/json'}
}

export const API = (axiosConfig?: any) => axios.create(axiosConfig || defaultConfig)


