import { useEffect, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll"; 

export const Home = () => {
    return <section id ="Home" className = "min-h-screen flex items-center justify-center relative">
        <RevealOnScroll>
            <div className="text-center text-white px-4">
                <img src = "/Ali.jpg" alt = "Ali Israr" className = "w-64 h-64 mx-auto mb-6 rounded-full object-cover border-4 border-blue-500" />
                <h1 className="text-4xl font-bold mb-2">Hi, I'm Ali Israr</h1>
                <p className="text-lg text-gray-300">
                    I'm a computer engineer passionate about building smart, efficient, and reliable digital solutions.
                </p>
                <div className="flex justify-center space-x-4">
                    <a href = "#About" className = "inline-block px-4 py-2 bg-blue-600 text-white rounded transition-all duration-300 hover:bg-teal-500 hover:-translate-y-0.5">About Page</a>
                    <a href = "#Contact me" className="inline-block px-4 py-2 bg-blue-600 text-white rounded transition-all duration-300 hover:bg-teal-500 hover:-translate-y-0.5">Contact me</a>
                </div>
            </div>
        </RevealOnScroll>
        
    </section>


}