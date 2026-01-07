import React from "react";
import Hero from "../components/Hero";
import Plans from "../components/Plans";
import Trainers from "../components/Trainers";

const Home = () => {
    return (
        <>
            <Hero />
            {/* We reuse the components for the home page preview, 
                but they are also available as dedicated pages */}
            <Plans />
            <Trainers />
        </>
    );
};

export default Home;
