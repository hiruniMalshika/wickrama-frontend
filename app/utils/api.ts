
import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3000/api', //Replace with NestJs backend URL
})

export default api;