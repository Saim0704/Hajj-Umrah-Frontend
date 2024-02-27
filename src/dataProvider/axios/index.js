import axios from "axios";

const defaultInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default defaultInstance;


export const rawInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

const getToken = () => {
  if (typeof window !== "undefined" && localStorage.getItem("accessToken")) {
    let token = localStorage.getItem("accessToken");
    return token;
  }
};

defaultInstance.interceptors.request.use(
  (request) => {
    const token = getToken();
    token && (request.headers["Authorization"] = `Bearer ${token}`);
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
