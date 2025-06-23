import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import JoinModal from "./pages/JoinNow";
import MembershipPlans from "./pages/MembershipPlans";
import Services from "./pages/Services";
import TrainerProfile from "./pages/TrainerProfile";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Navbar setIsModalOpen={setIsModalOpen} />
      <Home setIsModalOpen={setIsModalOpen} />
      {isModalOpen && (
        <JoinModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
      <TrainerProfile />
      <MembershipPlans setIsModalOpen={setIsModalOpen} />
      <Services />
      <Footer />
    </>
  );
}

export default App;
