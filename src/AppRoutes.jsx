import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashBoard";
import Header from "./components/layot/Headers";
import ProtectedRoute from "./router/ProtectedRoute";
import EntryDetailsPage from "./pages/Details";

function AppRoutes() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/details/:id"
            element={
              <ProtectedRoute>
                <EntryDetailsPage />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </div>
    </>
  );
}

export default AppRoutes;
