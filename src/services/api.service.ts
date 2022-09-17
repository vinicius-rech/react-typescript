import axios from "axios";

const baseURL = "https://api-nest-production.up.railway.app"
const headers = {
  'Content-Type': 'application/json;charset=utf-8',
  "Access-Control-Allow-Origin": "*",
}

const defaultConfig = {baseURL, headers}

export const API = (axiosConfig?: any) => axios.create(axiosConfig || defaultConfig)


