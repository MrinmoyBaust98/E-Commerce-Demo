import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const ProtectRouter = () => {
  const { user } = useAuth();
  return user.email ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectRouter;
