import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../Login_page/Login";
import App from "../App";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<App />} />
    </Routes>
  </BrowserRouter>
);

export default Router;