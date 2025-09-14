import { useEffect, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const skills = [
        "React",
        "Java",
        "Python",
        "TailwindCSS",
        "C++",
        "C#",
        "JavaScript",
        "HTML",
        "MATLAB",
    ];

    return <section id ="About" className = "min-h-screen flex items-center justify-center relative py-20">
        <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4 text-center text-white px-4">
                <h2 className = "text-4xl font-bold mb-8 bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">About Me</h2>
                <div className = "glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className = "text-gray-300 text-lg mb-6"> 
                        I am a software developer with a huge passion for creating innovative and efficient digital solutions. My journey in the tech world began with a fascination 
                        for how things work, leading me to pursue a degree in computer engineering. Over the years, I have honed my skills in various programming languages 
                        and frameworks, allowing me to build robust applications that solve real-world problems.
                    </p>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Profficient Skills</h3>
                        <div className="flex gap-1 ">
                            {skills.map((tech, key) => (
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:-translate-y-1 hover:bg-blue-500/20 
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
                            <a href = "https://www.torontomu.ca/" target="_blank" rel="noopener noreferrer">
                                <img src = "/tmu.jpg" className = "w-32 h-32 object-contain mx-auto mb-2"></img>
                            </a>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li> <strong> B.S. in Computer Science </strong> - Toronto Metropolitan University (2022-2027) </li>
                                <li> Relevant Coursework: Data Structures & Algorithms, Web Development, Object Oriented Programming...</li>
                            </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                        <a href = "https://markhammasjid.ca/" target="_blank" rel="noopener noreferrer">
                                <img src = "/ISM.jpg" className = "w-64 h-32 object-contain mx-auto mb-2"></img>
                        </a>
                        <div className="space-y-4 text-gray-300">
                            <h4 className="font-semibold">Summer Intern - I.S.M</h4>
                            <p className="text-sm">June 2024 - August 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>

        
    </section>


}