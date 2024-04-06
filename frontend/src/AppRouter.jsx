import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home/Home";
import Login  from "./pages/Login/Login";
import User  from "./pages/User/User";
import UserProfile  from "./pages/User/UserProfile";
import Admin  from "./pages/Admin/Admin";
import NoPage  from "./pages/NoPage/NoPage";


// Define USER_TYPES and CURRENT_USER_TYPE here
export const USER_TYPES = {
  PUBLIC: "public_user",
  REG_USER: "reg_user",
  ADMIN: "admin_user",
};

export const CURRENT_USER_TYPE = USER_TYPES.ADMIN;

const PublicElement = ({ children }) => {
  return <>{children}</>;
};

const UserElement = ({ children }) => {
  if (
    CURRENT_USER_TYPE === USER_TYPES.REG_USER ||
    CURRENT_USER_TYPE === USER_TYPES.ADMIN
  ) {
    return <>{children}</>;
  } else {
    return (
      <div>
        <Container>
          <h1>You do not have access to this page!</h1>
        </Container>
      </div>
    );
  }
};

const AdminElement = ({ children }) => {
  if (CURRENT_USER_TYPE === USER_TYPES.ADMIN) {
    return <>{children}</>;
  } else {
    return (
      <div>
        <Container>
          <h1>You do not have access to this page!</h1>
        </Container>
      </div>
    );
  }
};

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PublicElement>
              <Home />
            </PublicElement>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <PublicElement>
              <Login />
            </PublicElement>
          }
        ></Route>
        <Route
          path="/user"
          element={
            <UserElement>
              <User />
            </UserElement>
          }
        ></Route>
        <Route
          path="/userprofile"
          element={
            <UserElement>
              <UserProfile />
            </UserElement>
          }
        ></Route>
        <Route
          path="/admin"
          element={
            <AdminElement>
              <Admin />
            </AdminElement>
          }
        ></Route>
        <Route path="*" element={<NoPage />}></Route>
      </Routes>
    </>
  );
};

export default AppRouter;
