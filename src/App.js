import { AllRoutes } from "./AllRoutes/AllRoutes";
import Footer from "./Components/Home/Footer";
import { Navbar } from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes />
      <Footer/>
    </div>
  );
}

export default App;
