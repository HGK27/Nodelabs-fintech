import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import SignIn from "../pages/Signin/Signin.jsx";
import SignUp from "../pages/Signup/Signup.jsx";
import DashboardLayout from "../components/layouts/DashboardLayout/DashboardLayout";


import Home from "../pages/Dashboard/Home/Home";
import Transactions from "../pages/Dashboard/Transactions/Transactions";

export default function AppRouter({ isAuthenticated }) {
  return (
    <Routes>
      {/* ROOT */}
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <Navigate to="/dashboard/home" replace />
          ) : (
            <Navigate to="/signin" replace />
          )
        }
      />

      {/* PUBLIC ROUTES */}
      <Route
        path="/signin"
        element={
          <PublicRoute isAuthenticated={isAuthenticated}>
            <SignIn />
          </PublicRoute>
        }
      />

      <Route
        path="/signup"
        element={
          <PublicRoute isAuthenticated={isAuthenticated}>
            <SignUp />
          </PublicRoute>
        }
      />

      {/* PROTECTED ROUTES */}
      <Route
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <DashboardLayout  />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard/home" element={<Home />} />
        <Route path="/dashboard/transactions" element={<Transactions />} />
      </Route>

      {/* FALLBACK */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
