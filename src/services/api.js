import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-backend-production-0dc0.up.railway.app"
});

export default API;