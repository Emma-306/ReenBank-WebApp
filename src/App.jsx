import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { AuthLayout } from "./pages/AuthLayout";
import { Login } from "./components/AuthLayout/Login";
import { Register } from "./components/AuthLayout/Register";
import { VerifyOtp } from "./components/AuthLayout/VerifyOtp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dashboard } from "./pages/Dashboard";
import { Overview } from "./components/Dashboard/Overview";
import { Accounts } from "./components/Dashboard/Accounts/Accounts";
import { Transactions } from "./components/Dashboard/Transactions";
import { Profile } from "./components/Dashboard/Profile";

export const App = () => {
  return (
    <div >
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="verify-otp" element={<VerifyOtp />} />
        </Route>
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route index element={<Overview />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
};
