import { Routes, Route, Navigate } from "react-router-dom";
import SigninPage from "../pages/SigninPage";
import SignupPage from "../pages/SignupPage";

export default function RoutesComponent() {
  return (
    <Routes>
      <>
        <Route path="/signin" Component={SigninPage} />
        <Route path="/signup" Component={SignupPage} />
        <Route path="*" element={<Navigate replace to="/signin" />} />
      </>
    </Routes>
  );
}
