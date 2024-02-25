//  Home, LoginForm, ErrorPage ( Routes )

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import LoginForm from "./LoginForm/LoginForm";
import ErrorPage from "./404/404";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
