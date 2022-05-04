import React from "react";
function Welcome(){
    return(
        <div className="mt-5 ml-10 mr-10 h-4/5 sm:flex sm:text-left sm:ml-auto sm:mr-auto sm:mt-20 sm:mb-96 sm:h-40 sm:w-fit">
            <img src="./img/welcome.gif" alt='welcome gif' className="mr-auto ml-auto mb-10 sm:pr-40 sm:ml-0 sm:m-auto sm:h-96 sm:w-auto"/>
            <div className="sm:w-96">
                <h3 className="text-indigo-800 text-2xl">Welcome To TITTA</h3>
                <h2 className="text-indigo-900 font-bold text-4xl mt-3 ">What we do at TITTA</h2>
                <p className="mt-3">TITTA is a tech startup with a combined experience of over 12 years.</p>
                <p className="mt-3">We specialize in cyber security, game development, UI/UX design and writing, mobile app development, web development and content writing.</p>
                <p className="mt-3">We grow and upgrade brands and businesses by giving them online presence such as websites, landing pages, mobile apps, and web apps, to integrate IT, which is fast taking over the world, into their corner.</p>
                <p className="mt-3">Reach out to us today, let's help you handle everything IT in your business.</p>
                <div className=" mt-8 text-left"><button className="bg-blue-500 text-slate-100 rounded-lg border-8 border-blue-500  pt-2 pb-2 pr-8 pl-8">Contact Us Now</button></div>
            </div>
        </div>
    )
}
export default Welcome