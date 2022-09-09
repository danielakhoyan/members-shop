import { Route, Routes } from "react-router-dom";
import MembersComponent from "../components/Members/MembersComponent";
import ContactsComponent from "../pages/ContactsComponent";
import NotFoundComponent from "../pages/NotFoundComponent";
import MembersDetails from "../pages/MembersDetails";
import AuthProvider from "../hoc/AuthProvider";
// import { useState } from "react";
import LoginPage from "../pages/LoginPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/members"
        element={
          <AuthProvider>
            <MembersComponent />
          </AuthProvider>
        }
      />
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="members/:id" element={<MembersDetails />} />
      <Route path="/contact" element={<ContactsComponent />} />
      <Route path="*" element={<NotFoundComponent />} />
    </Routes>
  );
};

export default MainRoutes;
