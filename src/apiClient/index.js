import axios from "axios";
import { API_BASE_URL } from "../Config";

/**
 *  apiclient with base url and header 
 */
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json"
  }
});

export default apiClient
