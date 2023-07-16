import axios from "axios";

const apiClient = axios.create({
  //base:https://dashboard.render.com/
  baseURL: process.env.NEXT_PUBLIC_API_BASEURL,
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;
