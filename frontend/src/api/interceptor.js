import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8001/api/",
});

api.interceptors.request.use(
  function (config) {
    config.headers.Authorization = "Bearer " + localStorage.getItem("token");
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    if (response.status === 401) {
      console.log("You are not authorized");
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;