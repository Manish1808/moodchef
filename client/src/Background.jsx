import React from "react";

export default function Background({ backgroundImage, children }) {
    return (
        <div 
            className="relative w-screen min-h-screen flex justify-center items-center bg-cover bg-center" 
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-md"></div> 
            <div className="relative z-10 text-white text-center w-11/12 md:w-3/4 lg:w-2/3 p-4">
                {children}
            </div>
        </div>
    );
}
