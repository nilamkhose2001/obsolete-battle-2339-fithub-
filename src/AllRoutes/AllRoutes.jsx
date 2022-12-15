import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MealPlansPage from "../Pages/Programs/MealPlansPage";
import PilotProgramsPage from "../Pages/Programs/PilotProgramsPage";
import WorkoutProgramsPage from "../Pages/Programs/WorkoutProgramsPage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plans" element={<WorkoutProgramsPage />} />
      <Route path="/meal-plans" element={<MealPlansPage />} />
      <Route path="/pilot-programs" element={<PilotProgramsPage />} />
    </Routes>
  );
};
