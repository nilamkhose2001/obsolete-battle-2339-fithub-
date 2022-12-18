import { Routes, Route } from "react-router-dom";
import Admin from "../Pages/Admin/Admin/Admin";
import AdminPrograms from "../Pages/Admin/Admin/Programs/Programs";
import AdminWorkout from "../Pages/Admin/Admin/Workout/Workout";
import Home from "../Pages/Home/Home";
import MealPlansPage from "../Pages/Programs/MealPlansPage";
import PilotProgramsPage from "../Pages/Programs/PilotProgramsPage";
import WorkoutProgramsPage from "../Pages/Programs/WorkoutProgramsPage";

import { SingleProduct } from "../Pages/Workout/SingleProduct";
import {Workout} from "../Pages/Workout/Workout"

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<h1>signup</h1>} />
      <Route path="/cart" element={<h1>CArt</h1>} />
      <Route path="/workoutprogram" element={<WorkoutProgramsPage />} />
      <Route path="/mealplans" element={<MealPlansPage />} />
      <Route path="/pilotprograms" element={<PilotProgramsPage />} />
      <Route path="/workoutvideo" element={<Workout/>} />
      <Route path="/customworkout" element={<h1>Custom workout</h1>}/>
      <Route path="/routines" element={<h1>Routines</h1>}/>
      <Route path="/workoutvideo/:id" element={<SingleProduct/>}></Route>
      <Route path="/admin-dashboard" element={<Admin />} />
      <Route path="/admin-programs" element={<AdminPrograms />} />
      <Route path="/admin-workout" element={<AdminWorkout />} />
    </Routes>
  );
};