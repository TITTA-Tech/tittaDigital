import React from "react";
function Process(){
    return(
        <div className="mb-10 pr-30 pl-30">
            <div className="text-center mt-10 mb-5 sm:mb-10">
            <p className="text-3xl"> Process</p>
            <h1 className=" font-extrabold text-2xl">Get TO Know Our Work Process</h1>
            <p>We Strive To Give Our Clients The Best And As Such Follow Very Specific Work Process, Learn More Below</p>
            </div>
            
                <div className="sm:flex sm:flex-row-reverse justify-around sm:pl-96 sm:pr-96   pl-10 pr-10">
                    <img src="./img/process.jpg" alt="Process" className="sm:h-96 sm:w-auto h-60 w-30 rounded-3xl sm:mb-auto sm:mt-auto sm:ml-10"/>
                    <div >
                        <div className="h-fit mb-5 w-fit sm:w-96 flex">
                            <img src="./icons/chat.png" alt="chat" className="h-16 w-16"/>
                            <div className="ml-10 ">
                                <p className="text-cyan-500 text-xl mb-1">Step 1</p>
                                <p className="font-bold text-xl mb-3">Project Enquiry</p>
                                <p className="text-slate-500 leading-5">The first point of contact is all about inquiries and technical specifications, At this stage we get know what your 
                                project is all about and how we can help you achieve your objectives
                                </p>
                            </div>     
                        </div>
                        <div className="h-fit mb-10 w-fit flex">
                            <img src="./icons/meet.png" alt="chat" className="h-16 w-16"/>
                            <div className="ml-10 ">
                                <p className="text-cyan-500 text-xl mb-1">Step 2</p>
                                <p className="font-bold text-xl mb-3">Physical Or Virtual Meeting</p>
                                <p className="text-slate-500 leading-5">After all enquiries, the next step is to have a physical or virtual meeting for a 
                                more detailed planning of the project
                                </p>
                            </div>     
                        </div>
                        <div className="h-fit mb-5 w-fit sm:w-96 flex">
                            <img src="./icons/chat.png" alt="chat" className="h-16 w-16"/>
                            <div className="ml-10 ">
                                <p className="text-cyan-500 text-xl mb-1">Step 3</p>
                                <p className="font-bold text-xl mb-3">Project Proposal & Invoice</p>
                                <p className="text-slate-500 leading-5">In this step, we will send all necessary documents
                                 regarding the project and also an invoice to make payment
                                </p>
                            </div>     
                        </div>
                        <div className="h-fit mb-5 w-fit sm:w-96 flex">
                            <img src="./icons/invoice.png" alt="chat" className="h-16 w-16"/>
                            <div className="ml-10 ">
                                <p className="text-cyan-500 text-xl mb-1">Step 4</p>
                                <p className="font-bold text-xl mb-3">Project Execution</p>
                                <p className="text-slate-500 leading-5">After signing project proposal and also making payment, execution will commence immediately according to the proposal
                                </p>
                            </div>     
                        </div>
                    </div>

            </div>
        </div>
    )
}

export default Process