import axios from "axios";
// import logout from "../components/Layout/util/logout";
let Api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  "Content-Type": "application/json",
});

const getToken = () => {
  if (
    typeof window !== "undefined" &&
    (localStorage.getItem("aToken") || localStorage.getItem("guestAccessToken"))
  ) {
    let token = localStorage.getItem("aToken");

    if (!!!token) {
      let guestAccesToken = localStorage.getItem("guestAccessToken");
      return guestAccesToken;
    }
    return token;
  }
};

Api.interceptors.request.use(
  (request) => {
    if (
      (request.url.includes("v1/") || request.url.includes("v2/")) &&
      !request.url.includes("login")
    ) {
      const token = getToken();
      token && (request.headers["Authorization"] = `Bearer ${token}`);
    }

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Api.interceptors.response.use(
  (response) => {
    return response?.data;
  },
  (error) => {
    if (error?.request?.responseURL?.includes("login")) {
      return Promise.reject(error);
    }

    // Do something with response error

    if (
      error?.response?.status === 401 ||
      error?.response?.data?.errorCode === 403
    ) {
      // logout();
    }

    return Promise.reject(error);
  }
);
export default Api;
