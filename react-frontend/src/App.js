import React from "react";
// Instead of using Switch, use Routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./compounds/ProtectedRoute.js";
import Home from "./compounds/pages/home/Home.js";
import Login from "./compounds/pages/login/Login.js";
import Dashboard from "./compounds/pages/dashboard/Dashboard.js";
// Instead of Redirect, use Navigate
import { Navigate } from "react-router-dom";

const App = () => {
  const isAuthenticated = true; // You should implement your own authentication logic
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        {/* Other routes */}
        {/* Finally, a catch-all route */}
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Router>
  );
  // return (
  //   <Router>
  //     <Switch>
  //       <Route exact path="/" component={Home} />
  //       <Route path="/login" component={Login} />
  //       <ProtectedRoute
  //         path="/dashboard"
  //         component={Dashboard}
  //         isAuthenticated={isAuthenticated}
  //       />
  //     </Switch>
  //   </Router>
  // );
};

export default App;
