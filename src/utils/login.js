import cookie from "js-cookie";
const login = async (token) => {
  cookie.remove("accessToken");
  cookie.set("accessToken", token, { expires: 360 });
  localStorage.setItem("accessToken", token);
};

export default login;
