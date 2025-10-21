import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import ResetConfirmPage from "./pages/ResetConfirmPage";
import DashboardPage from "./pages/DashboardPage";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/reset-password/:uid/:token" element={<ResetConfirmPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/" element={<DashboardPage />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}
