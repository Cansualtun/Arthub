import axios from "axios";
import https from "https";

const axiosBase = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? "https://api.pixem.org/",
  validateStatus: (status) => status >= 200 && status < 400,
  timeout: 1000 * 60 * 30, // 30 Minutes
  withCredentials: true,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

export default axiosBase;
