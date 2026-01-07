import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Join from "./pages/Join";
import MembersPage from "./pages/MembersPage";
import TrainersPage from "./pages/TrainersPage";
import PlansPage from "./pages/PlansPage";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300">
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/join" element={<Join />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/trainers" element={<TrainersPage />} />
          <Route path="/plans" element={<PlansPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
