import React, { useEffect, useState, useRef } from "react";
import {FcNext, FcPrevious} from "react-icons/fc"
const testimonialsarray =[
    <div className="tglass p-10 m-auto">
            <div className="flex flex-row text-left overf">
                <img src="./icons/chat.png" alt="client1" className="h-14 w-14"/>
                <div className="ml-5 mb-5">
                    <p className="text-white font-bold text-xl">Usiomwanta George</p>
                    <p className="text-white">CEO at Lodge Easy</p>
                </div>
            </div>
        <div className="text-slate-300 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque officia recusandae dolores earum voluptate, consectetur veni</div>
    <div className="text-left text-xl mt-5">⭐⭐⭐⭐⭐</div>
    </div>
     ,
     <div className="tglass p-10 m-auto">
            <div className="flex flex-row text-left overf">
                <img src="./icons/chat.png" alt="client1" className="h-14 w-14"/>
                <div className="ml-5 mb-5">
                    <p className="text-white font-bold text-xl">Ebuka</p>
                    <p className="text-white">CEO at Brandoc</p>
                </div>
            </div>
            <div className="text-slate-300 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque officia recusandae dolores earum voluptate, consectetur veni</div>
            <div className="text-left text-xl mt-5">⭐⭐⭐⭐⭐</div>
    </div>
    ,
    <div className="tglass p-10 m-auto">
                <div className="flex flex-row text-left overf">
                    <img src="./icons/chat.png" alt="client1" className="h-14 w-14"/>
                    <div className="ml-5 mb-5">
                        <p className="text-white font-bold text-xl">Sunshine</p>
                        <p className="text-white">CEO at BeeMe</p>
                    </div>
                </div>
        <div className="text-slate-300 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque officia recusandae dolores earum voluptate, consectetur veni</div>
        <div className="text-left text-xl mt-5">⭐⭐⭐⭐⭐</div>
        </div>
        ,
];
let count = 0
function Slider(){
    const [currentDiv, setCurrentdiv] =
    useState(0);

    const sliderRef = useRef();

    const removeAnimation = () => {
        sliderRef.current.classList.remove('fade-anim')
    }

    useEffect(() => {
        sliderRef.current.addEventListener('animationend', removeAnimation);
        startSlider();
    },// eslint-disable-next-line 
    [] );

    const startSlider = () => {
        setInterval(() => {
            handleOnNextClick();
        }, 5000);
    }



        const handleOnNextClick = () => {
            count = (count + 1) % testimonialsarray.length;
            setCurrentdiv(count)
            sliderRef.current.classList.add('fade-anim')
        }
        const handleOnPrevClick = () => {
            const divLength = testimonialsarray.length;
            count = (currentDiv + divLength - 1) % divLength;
            setCurrentdiv(count);
            sliderRef.current.classList.add('fade-anim')
        };

    return <div ref={sliderRef} className="w-full select-none relative">
        <div className="aspect-w-8 aspect-h-9">
            <div className="test">{testimonialsarray[currentDiv]}</div>
        </div>
        <div className="absolute top-1/2 w-full px-7 flex justify-between sm:justify-around">
            <button className="text-4xl" onClick={handleOnPrevClick}> <FcPrevious /> </button>
            <button className="text-4xl" onClick={handleOnNextClick}> <FcNext /> </button>
        </div>
    </div>
}

export default Slider