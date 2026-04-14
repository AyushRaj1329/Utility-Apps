import React, { useEffect } from 'react'
import { useState,useRef } from "react";

function Navbar({ active, setActive }) {

    const navRef=useRef(null);

    useEffect(()=>{
        const nav=navRef.current;
        if (!nav) return;

        const handleWheel=(e)=>{
            if(e.deltaY!==0){
                e.preventDefault();
                nav.scrollLeft+=e.deltaY;
            }
        };

        nav.addEventListener("wheel",handleWheel, { passive: false });
        

        return()=>{
            nav.removeEventListener("wheel",handleWheel);
        }
    },[]);



    return (
        <nav
        ref={navRef}
         className='w-full bg-gray-900 text-white py-3 px-2 overflow-x-auto whitespace-nowrap hover:bg-gray-800 scroll-smooth'>
            <div className="flex gap-4 min-w-max">
                <button
                    onClick={() => setActive("stopwatch")}
                    className={`px-4 py-2 rounded whitespace-nowrap ${active === "stopwatch" ? "bg-[#F6DBDB] text-[red] " : "bg-gray-700"
                        }`}
                >
                    Stopwatch
                </button>

                <button
                onClick={()=>setActive("timer")}
                className={`px-4 rounded whitespace-nowrap ${active==="timer"? "bg-[#F2E3C6] text-[brown]" : "bg-gray-700"}`}>
                    Timer
                </button>

                <button 
                onClick={()=>setActive("worldclock")}
                className={`px-4 rounded whitespace-nowrap ${active==="worldclock"? "bg-[#C2EEC7] text-[#38b538]" : "bg-gray-700"}`}>
                    World Clock
                </button>

                <button 
                onClick={()=>setActive("calculator")}
                className={`px-4 rounded whitespace-nowrap ${active==="calculator"? "bg-[#AFEEEE] text-[#008cff]" : "bg-gray-700"}`}>
                    Calculator
                </button>











                <button 
                onClick={()=>setActive("to-do-list")}
                className={`px-4 rounded whitespace-nowrap ${active==="to-do-list"? "bg-[#AFEEEE] text-[#008cff]" : "bg-gray-700"}`}>
                    To Do List
                </button>

                 <button 
                onClick={()=>setActive("notes")}
                className={`px-4 rounded whitespace-nowrap ${active==="notes"? "bg-[#AFEEEE] text-[#008cff]" : "bg-gray-700"}`}>
                    Notes
                </button>

                <button 
                onClick={()=>setActive("reminder")}
                className={`px-4 rounded whitespace-nowrap ${active==="reminder"? "bg-[#AFEEEE] text-[#008cff]" : "bg-gray-700"}`}>
                    Reminder
                </button>

                <button 
                onClick={()=>setActive("password-generator")}
                className={`px-4 rounded whitespace-nowrap ${active==="password-generator"? "bg-[#AFEEEE] text-[#008cff]" : "bg-gray-700"}`}>
                    Password Generator
                </button>

                <button 
                onClick={()=>setActive("weather")}
                className={`px-4 rounded whitespace-nowrap ${active==="weather"? "bg-[#AFEEEE] text-[#008cff]" : "bg-gray-700"}`}>
                    Weather
                </button>

                <button 
                onClick={()=>setActive("currency-converter")}
                className={`px-4 rounded whitespace-nowrap ${active==="currency-converter"? "bg-[#AFEEEE] text-[#008cff]" : "bg-gray-700"}`}>
                    Currency Converter
                </button>

                <button 
                onClick={()=>setActive("bmi-calculator")}
                className={`px-4 rounded whitespace-nowrap ${active==="bmi-calculator"? "bg-[#AFEEEE] text-[#008cff]" : "bg-gray-700"}`}>
                    BMI Calculator
                </button>

            </div>
        </nav>
    )
}

export default Navbar