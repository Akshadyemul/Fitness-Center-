import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MembershipPlans from "./pages/MembershipPlans";
import Services from "./pages/Services";
import TrainerProfile from "./pages/TrainerProfile";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <TrainerProfile />
      <MembershipPlans />
      <Services />
      <Footer />
    </>
  );
}

export default App;
