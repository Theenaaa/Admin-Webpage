import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import Layout from "@/components/layout/Layout";
import Login from "@/pages/auth/Login";
import Unauthorized from "@/pages/auth/Unauthorized";
import Home from "@/pages/dashboard/Home";
import Guides from "@/pages/dashboard/Guides";
import SOS from "@/pages/dashboard/SOS";
import Vendors from "@/pages/dashboard/Vendors";

import Reviews from "@/pages/dashboard/Reviews";
import Destinations from "@/pages/dashboard/Destinations";
import Events from "@/pages/dashboard/Events";
import Assets from "@/pages/dashboard/Assets";
import Marketplace from "@/pages/dashboard/Marketplace";
import KnowledgeBase from "@/pages/dashboard/KnowledgeBase";
import Notifications from "@/pages/dashboard/Notifications";

import Landing from "@/pages/Landing";

import { ThemeProvider } from "@/context/ThemeContext";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/unauthorized" element={<Unauthorized />} />

            {/* Protected routes under /dashboard */}
            <Route
              path="/dashboard/*"
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Home />} />
              <Route path="guides" element={<Guides />} />
              <Route path="vendors" element={<Vendors />} />

              <Route path="reviews" element={<Reviews />} />
              <Route path="destinations" element={<Destinations />} />
              <Route path="events" element={<Events />} />
              <Route path="assets" element={<Assets />} />
              <Route path="marketplace" element={<Marketplace />} />
              <Route path="knowledge-base" element={<KnowledgeBase />} />
              <Route path="sos" element={<SOS />} />
              <Route path="notifications" element={<Notifications />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
