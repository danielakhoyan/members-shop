import React, { useEffect, useState } from "react";

const AuthButton = () => {
  const isAuth = localStorage.getItem("auth");
  const [isStateAuth, setAuth] = useState<any>(isAuth);

  const setAuthClick = () => {
    if (isStateAuth) {
      localStorage.removeItem("auth");
      setAuth(false);
    } else {
      localStorage.setItem("auth", "true");
      setAuth(true);
    }
  };

  return (
    <div>
      <button className="btn" onClick={setAuthClick}>
        {isStateAuth ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default AuthButton;
