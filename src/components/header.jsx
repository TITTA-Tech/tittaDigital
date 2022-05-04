import React from "react";
import Navbar from "./Navbar";
function Header(){
    return(
        // bg-gradient-to-r from-blue-900 via-cyan-500 to-purple-400
       
        <div className="bg-slate-700 pb-10 sm:pl-60 sm:pr-60">
            <div className="sm:h-3/6 sm:w-auto sm:flex +">
                {/* <img src="./img/hlustration.gif" alt="illustrator" className="sm:h-fit sm:w-3/6 h-fit w-screen"/> */}
                {/* Text Section Begin */}
                <div className="ml-10 mr-10 text-left sm:text-left sm:pt-16">
                    <h1 className="text-white text-2xl font-bold sm:text-5xl sm:text-black sm:">Come Lets Take Your Brand To The Next Level</h1><br/>
                    <p className="text-slate-300 sm:text-xl text-sm ">We Are A Full Service Lagos Based Digital Marketing Agency With Combined Experience Of Over 15 Years. Get In Touch Today!</p>
                    <div className=" mt-4 text-left sm:text-left sm:pt-6"><button className="bg-blue-500 text-slate-100 font-bold rounded-lg border-8 border-blue-500  pt-2 pb-2 pr-8 pl-8">Contact Us Now</button></div>
                    <div className="text-xl mt-8 text-slate-900 font-bold text-center sm:text-left">
                        <div className="mb-8 text-slate-300 font-bold text-2xl">Our Top Clients:</div>
                        <span className="mr-16">Brandoc™</span>
                        <span className="mr-16">LogdeEasy™</span>
                        <span className="mr-16">Onlyn™</span>
                    </div>
                </div>
             </div>
        </div>
        
    )
}
export default Header