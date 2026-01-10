"use client";

import React from "react";

const Hero = () => {
    return (
        <section className="w-full h-[87.5vh] flex flex-col items-center justify-center text-center"
                 style={{   backgroundImage: "url('/TestBG.png')",
                            backgroundRepeat: "no-repeat",
                            backgroundAttachment: "fixed",
                            backgroundSize: "cover",
                            backgroundPosition: "center"}}>
            <h1 className="text-6xl font-bold text-white text-shadow-background-a text-shadow-lg">
                Dylan Buchanan
            </h1>

            <h2 className="mt-4 text-md text-gray-300 max-w-5xl text-shadow-background-a text-shadow-lg">
                Graduate Games Developer always looking for new challenges and innovative ways to grow!
            </h2>
        </section>
    );
};

export default Hero;