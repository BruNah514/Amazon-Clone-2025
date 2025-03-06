import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://amazon-api-deploy-sw5u.onrender.com",
});

export { axiosInstance };
