import React from 'react';
import Marquee from '../magic-ui/marquee-base';
import WorkCard from './WorkCard';

const works = [1, 2, 3, 4, 5]; // Placeholder array for now

const OurWorks = () => {
    return (
        <div className="w-full py-20 bg-[#030014] overflow-hidden flex flex-col items-center">
            <div className="text-center mb-12 px-4">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
                    Our Works
                </h2>

                <div className="relative w-full max-w-[800px] h-[300px] md:h-[400px] mx-auto mb-12 hidden">
                    {/* The reference had a "pile" of images in the center, 
                but user asked for "moving right to left in loop in different components".
                So we will prioritize the Marquee. 
                Maybe we keep the header simple.
            */}
                </div>
            </div>

            {/* Marquee Section */}
            <div className="relative w-full mb-16">
                <Marquee className="[--duration:50s] [--gap:1rem]" reverse> {/* Seamless marquee */}
                    {works.map((_, index) => (
                        <WorkCard key={index} />
                    ))}
                </Marquee>
            </div>

            {/* Subtitle & CTA */}
            <div className="text-center px-4 max-w-3xl mx-auto">
                <p className="text-gray-400 text-sm md:text-base mb-8 uppercase tracking-widest leading-relaxed">
                    Real projects edited with creativity and precision. <br />
                    From wedding films to reels and client work
                </p>

                <button className="bg-[#ccff00] text-black px-8 py-3 rounded-full font-bold text-sm tracking-wider hover:scale-105 transition-transform uppercase">
                    Watch Our Work
                </button>
            </div>
        </div>
    );
};

export default OurWorks;
