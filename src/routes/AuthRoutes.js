import { lazy } from "react";
import { Navigate } from "react-router-dom";

// Pages
const AuthPage = lazy(() => import("@/containers/AuthTemplate"));
const LoginPage = lazy(() => import("@/containers/AuthTemplate/Login"));
const RegisterPage = lazy(() => import("@/containers/AuthTemplate/Register"));

const AuthRoutes = {
  path: "auth",
  element: <AuthPage />,
  children: [
    { path: "", element: <Navigate to="login" /> },
    { path: "login", element: <LoginPage /> },
    { path: "register", element: <RegisterPage /> },
  ],
};

export default AuthRoutes;
