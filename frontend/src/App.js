import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Container } from "react-bootstrap";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Admin from "./pages/Admin/Admin";
import NoPage from "./pages/NoPage/NoPage";
import User from "./pages/User/User";
import UserProfile from "./pages/User/UserProfile";

const USER_TYPES = {
  PUBLIC: "public_user",
  REG_USER: "reg_user",
  ADMIN: "admin_user",
};

const CURRENT_USER_TYPE = USER_TYPES.ADMIN;
  
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

const Navbar = () => {
  return (
    <>
      <nav className="d-flex justify-content-around my-5">
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>Login</Link>
        {CURRENT_USER_TYPE === USER_TYPES.REG_USER ||
        CURRENT_USER_TYPE === USER_TYPES.ADMIN ? (
          <>
            <Link to={"/user"}>User</Link>
            <Link to={"/userprofile"}>UserProfile</Link>
          </>
        ) : null}
        {CURRENT_USER_TYPE === USER_TYPES.ADMIN ? (
          <>
            <Link to={"/admin"}>Admin</Link>
          </>
        ) : null}
      </nav>
    </>
  );
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

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
