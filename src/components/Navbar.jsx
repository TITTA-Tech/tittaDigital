import React from "react";
import "./hamburger.css"

function Navbar(){
  var ham = document.getElementsByClassName('hamburger')
  function harmbuger(){
    ham.classList.toggle("is-active")
  }
                     
  return(
    <div className=" bg-slate-700 pt-5 pl-8 pr-8 pb-5 sm:pr-60 sm:pl-60">
                <nav className="flex justify-between sm:items-center">
                   <a href="#home"><img src="./logo.png" alt="logo" className="h-20 sm:h-40f w-auto sm:pl-30 sm:pr-30"/></a>
                     <div className=" hidden sm:block">nav</div>
                   <div className="sm:hidden">
                        {/* nav bar for big screen comes here */}
                        <button className="sm:ml-auto hamburger  hamburger--emphatic " onClick={harmbuger} type="button">
                              <span className="hamburger-box ">
                                  <span className="hamburger-inner"></span>
                              </span>
                        </button>
                   </div>
                    
                </nav>
            </div>
      );
    }
    
    export default Navbar

// on hover, background color turn blue, bigger and bolder