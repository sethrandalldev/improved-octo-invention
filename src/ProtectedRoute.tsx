import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { CircularProgress } from "@mui/material";

interface ProtectedRouteProps {
  children: JSX.Element;
  [x: string]: any;
}

export default function ProtectedRoute({
  children,
  ...rest
}: ProtectedRouteProps) {
  const auth = getAuth();
  const user = auth.currentUser;
  const [isAuthReady, setIsAuthReady] = useState(false);

  onAuthStateChanged(auth, (user) => {
    setIsAuthReady(true);
  });

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : isAuthReady ? (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        ) : (
          <CircularProgress />
        )
      }
    />
  );
}
