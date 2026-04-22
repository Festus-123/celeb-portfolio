"use client";

import { FiArrowUpRight } from "react-icons/fi";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [theme, settheme] = useState("dark")

    useEffect(() => {
        const sections =document.querySelectorAll("section");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    const theme = entry.target.getAttribute("data-theme");
                    if(theme){
                        settheme(theme);
                    }
                }
            });
    }, { threshold: 0.5 });

    sections.forEach((section) => {
        observer.observe(section);
    });

    return () => observer.disconnect();
}, [])
    
    return (
        <div className={`fixed top-0 w-full flex items-center justify-center bg-transparent p-medium z-50 ${theme === "dark" ? "text-text" : "text-primary"} transition-colors duration-300`}>
            {/* container for max size */}
            <div className="flex items-center justify-between w-full max-w-12xl">
            {/* Logo section for the project */}
            <div className="font-bold text-xl md:text-2xl ">
                <h1>DeMInT</h1>
            </div>

            {/* Scroll back to top */}
            <div className="hidden md:block text-xl">
                <a href="#top">Go Up</a>
            </div>

            {/* call to action icon */}
            <div className="text-2xl md:text-4xl">
                <FiArrowUpRight />
            </div>
            </div>
        </div>
    );
}

export default Navbar;