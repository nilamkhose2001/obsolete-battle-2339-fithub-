import { Routes, Route } from "react-router-dom";
import SingleProgram from "../Components/Programs/SingleProgram";
import Home from "../Pages/Home/Home";
import MealPlansPage from "../Pages/Programs/MealPlansPage";
import PilotProgramsPage from "../Pages/Programs/PilotProgramsPage";
import WorkoutProgramsPage from "../Pages/Programs/WorkoutProgramsPage";
import SignIn from "../Pages/Sign/SignIn";
import SignUp from "../Pages/Sign/SignUp";

import { SingleProduct } from "../Pages/Workout/SingleProduct";
//import { Workout } from "../Pages/Workout/Workout";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/cart" element={<h1>CArt</h1>} />
      <Route path="/workoutprogram" element={<WorkoutProgramsPage />} />
      <Route path="/workoutprogram/:id" element={<SingleProgram />} />
      <Route path="/mealplans" element={<MealPlansPage />} />
      <Route path="/pilotprograms" element={<PilotProgramsPage />} />
     {/* / <Route path="/workoutvideo" element={<Workout />} /> */}
      <Route path="/customworkout" element={<h1>Custom workout</h1>} />
      <Route path="/routines" element={<h1>Routines</h1>} />
      <Route path="/workoutvideo/:id" element={<SingleProduct />}></Route>
      
    </Routes>
  );
};
