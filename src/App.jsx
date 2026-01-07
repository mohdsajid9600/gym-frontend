import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Plans from "./components/Plans";
import Trainers from "./components/Trainers";
import Members from "./components/Members";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Plans />
        <Trainers />
        <Members />
      </main>
      <Footer />
    </div>
  );
}

export default App;
