import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/header";
import Welcome from "./components/welcome";
import Services from "./components/services";
import Process from "./components/process";
import Testimonial from "./components/testimonial";
function App(){
    return(
        <div>
            <Navbar />
            <Header />
            <Welcome />
            <Services />
            <Process />
            <Testimonial />
        </div>
    )
};
export default App