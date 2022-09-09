import { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface IAuthProviderProps {
  children: JSX.Element;
}

const AuthProvider: FC<IAuthProviderProps> = ({ children }) => {
  const location = useLocation();
  const isAuth = localStorage.getItem("auth");
  
  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }

  return children;
};

export default AuthProvider;
