import React from "react";
function Services(){
    return(
        <div className="bg-slate-900 pr-6 pl-6 mt-10 pb-10">
                <div className="text-center pt-10 ">
                    <h2 className="text-2xl sm:text-5xl text-slate-100 font-bold">Explore Our Premium Digital Services</h2>
                    <p  className="text-sm sm:text-xl text-slate-400 mb-10 mt-4">We create world-class digital products, web design, graphics design and branding.</p>
                </div>
            <div className="">
                <div className="flex flex-col sm:flex-row items-center sm:justify-center">
                    <div className="glass p-10 text-left">
                        <img src="./icons/branding.png" alt="Branding" className="h-16 w-16"/>
                        <h1 className="text-white text-2xl mt-4">Branding</h1>
                        <p className="text-slate-100 mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, illum.</p>
                        <div><button className="border-none bg-white rounded-xl p-2.5 pl-10 pr-10 mt-8 text-xl">Learn More</button></div>
                    </div>
                    <div className="glass p-10 text-left">
                        <img src="./icons/web.png" alt="web" className="h-16 w-16"/>
                        <h1 className="text-white text-2xl mt-4">Web Design And Development</h1>
                        <p className="text-slate-100 mt-5">Improve your online presence with a professionally designed website.</p>
                        <div><button className="border-none bg-white rounded-xl p-2.5 pl-10 pr-10 mt-8 text-xl">Learn More</button></div>
                    </div>
                    <div className="glass p-10 text-left">
                        <img src="./icons/.png" alt="Graphics" className="h-16 w-16"/>
                        <h1 className="text-white text-2xl mt-4">Graphics Designs</h1>
                        <p className="text-slate-100 mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing lorem.</p>
                        <div><button className="border-none bg-white rounded-xl p-2.5 pl-10 pr-10 mt-8 text-xl">Learn More</button></div>
                    </div>
                    <div className="glass p-10 text-left">
                        <img src="./icons/.png" alt="Graphics" className="h-16 w-16"/>
                        <h1 className="text-white text-2xl mt-4">Graphics Designs</h1>
                        <p className="text-slate-100 mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing lorem.</p>
                        <div><button className="border-none bg-white rounded-xl p-2.5 pl-10 pr-10 mt-8 text-xl">Learn More</button></div>
                    </div>
                    <div className="glass p-10 text-left">
                        <img src="./icons/.png" alt="Graphics" className="h-16 w-16"/>
                        <h1 className="text-white text-2xl mt-4">Graphics Designs</h1>
                        <p className="text-slate-100 mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing lorem.</p>
                        <div><button className="border-none bg-white rounded-xl p-2.5 pl-10 pr-10 mt-8 text-xl">Learn More</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services