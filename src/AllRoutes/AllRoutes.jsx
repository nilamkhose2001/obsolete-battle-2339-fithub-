
import { Routes, Route } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
