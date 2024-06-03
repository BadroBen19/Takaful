import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem("authToken"); // Vérifiez si le token est présent dans le stockage local

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" /> // Redirige vers la page de connexion si non authentifié
        )
      }
    />
  );
};

export default PrivateRoute;