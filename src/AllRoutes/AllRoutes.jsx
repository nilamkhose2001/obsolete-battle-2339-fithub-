import { Routes, Route } from "react-router-dom";

import Admin from "../Pages/Admin/Admin/Admin";
import AdminPrograms from "../Pages/Admin/Admin/Programs/Programs";
import AdminWorkout from "../Pages/Admin/Admin/Workout/Workout";

import SingleProgram from "../Components/Programs/SingleProgram";

import Home from "../Pages/Home/Home";
import MealPlansPage from "../Pages/Programs/MealPlansPage";
import PilotProgramsPage from "../Pages/Programs/PilotProgramsPage";
import WorkoutProgramsPage from "../Pages/Programs/WorkoutProgramsPage";
import SignIn from "../Pages/Sign/SignIn";
import SignUp from "../Pages/Sign/SignUp";

import { SingleProduct } from "../Pages/Workout/SingleProduct";
import { Cart } from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
import Success from "../Pages/Checkout/Success";
import {Workout} from "../Pages/Workout/Workout";
//import { Workout } from "../Pages/Workout/Workout";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/workoutprogram" element={<WorkoutProgramsPage />} />
      <Route path="/workoutprogram/:id" element={<SingleProgram />} />
      <Route path="/mealplans" element={<MealPlansPage />} />
      <Route path="/pilotprograms" element={<PilotProgramsPage />} />
      <Route path="/workoutvideo/:id" element={<SingleProduct/>}></Route>
      <Route path="/workoutvideo" element={<Workout/>}></Route>
      <Route path="/admin-dashboard" element={<Admin />} />
      <Route path="/admin-programs" element={<AdminPrograms />} />
      <Route path="/admin-workout" element={<AdminWorkout />} />

      <Route path="/checkout" element={<Checkout/>}></Route>
      <Route path="/success" element={<Success />}></Route>
    </Routes>
  );
};
