import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const ProtectRouter = () => {
  const { user } = useAuth();
  const location = useLocation();
  return user.email ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default ProtectRouter;
