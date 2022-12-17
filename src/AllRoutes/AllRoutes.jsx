import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import { SingleProduct } from "../Pages/Workout/SingleProduct";
import {Workout} from "../Pages/Workout/Workout"
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<h1>signup</h1>} />
      <Route path="/cart" element={<h1>CArt</h1>} />
      <Route path="/workoutvideo" element={<Workout/>} />
      <Route path="/customworkout" element={<h1>Custom workout</h1>}/>
      <Route path="/workoutprogram" element={<h1>Workout program</h1>}/>
      <Route path="/mealplans" element={<h1>Meal Plans</h1>}/>
      <Route path="/pilotprograms" element={<h1>Pilot programs</h1>}/>
      <Route path="/routines" element={<h1>Routines</h1>}/>
      <Route path="/workoutvideo/:id" element={<SingleProduct/>}></Route>
    </Routes>
  );
};
