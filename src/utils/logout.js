import cookie from "js-cookie";

export default function logout() {
  if (typeof window !== "undefined") {
    cookie.remove("aToken");
    cookie.remove("token");
    window.location.href = "/";
    return true;
  }
  return false;
}
