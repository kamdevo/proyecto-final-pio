import { Routes, Route, Navigate } from "react-router";
import { LoginPage } from "../auth/";
import { CalendarPage } from "../calendar";
import HomePage from "../home/pages/HomePage";

export const AppRouter = () => {
  const authStatus = "not-authenticated";

  return (
    <Routes>
      {authStatus === "not-authenticated" ? (
        <Route path="/auth/*" element={<HomePage />} />
      ) : (
        <Route path="/*" element={<CalendarPage />} />
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
