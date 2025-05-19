import axios from "axios";

const API_KEY = "asfsdlf"; // "f5feee0582577c5ea60b0c78c48360f1"; // Replace with your real key in production

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: API_KEY,
  },
});

// Optional: Add a response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // You can customize error handling here
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error("API Error:", error.response.data);
    } else if (error.request) {
      // No response received
      console.error("Network Error:", error.message);
    } else {
      // Something else happened
      console.error("Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
