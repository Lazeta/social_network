import { Navigate } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

const withAuthRedirect = (Component) => {
  const AuthRedirectComponent = (props) => {
    const isAuth = useSelector((state) => state.auth.isAuth);

    if (!isAuth) {
      return <Navigate to="/login" />;
    }
    if (isAuth) {
      return <Component {...props} />;
    }

  };

  return AuthRedirectComponent;
};

export default withAuthRedirect;
