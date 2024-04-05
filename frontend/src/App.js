import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./AppRouter";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
