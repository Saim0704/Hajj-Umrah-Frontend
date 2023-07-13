import { useEffect } from "react";


const AuthCheck = ({ children }) => {
  const  isLoggedIn  = true

  useEffect(() => {
    if (!isLoggedIn) {
      //redirect to login
    }
  }, [isLoggedIn]);

  return <>{children}</>;
};

export default AuthCheck;
