import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MembershipPlans from "./pages/MembershipPlans";
import TrainerProfile from "./pages/TrainerProfile";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <TrainerProfile />
      <MembershipPlans />
    </>
  );
}

export default App;
