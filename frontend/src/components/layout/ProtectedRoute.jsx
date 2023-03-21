import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../utils/ContextProvider";

export const ProtectedRoute = ({ userRole, redirect }) => {
  const { authUser } = useStateContext();

  if (!authUser) return <Navigate to="/auth/login" replace />;

  if (userRole && !userRole.includes(authUser))
    return <Navigate to={redirect} replace />;

  return <Outlet />;
};
