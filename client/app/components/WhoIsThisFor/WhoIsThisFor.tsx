import React from 'react';
import InfoCard from './InfoCard';
import { ArrowRight } from 'lucide-react';

const steps = [
    {
        number: "01.",
        title: "Choose a Plan",
        description: "Select the flexible or premium plan that suits your business needs"
    },
    {
        number: "02.",
        title: "Subscribe Instantly",
        description: "Activate your subscription with just a click - no forms, no hassle."
    },
    {
        number: "03.",
        title: "Get Tailored Solutions",
        description: "Receive personalized products & support for your operations."
    },
    {
        number: "04.",
        title: "Receive Your Supplies",
        description: "Sit back as your chemicals are delivered on time, every time."
    }
];

const WhoIsThisFor = () => {
    return (
        <div className="w-full py-20 bg-[#030014] relative overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

            <div className="w-[90%] 800px:w-[85%] mx-auto relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider">
                        Who This Course Is For
                    </h2>
                    <div className="h-[1px] bg-gray-700 flex-grow ml-4"></div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {steps.map((step, index) => (
                        <InfoCard
                            key={index}
                            number={step.number}
                            title={step.title}
                            description={step.description}
                        />
                    ))}
                </div>

                {/* CTA Bar */}
                <div className="w-full bg-[#2b2d66] rounded-2xl p-4 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg border border-white/5">
                    <h3 className="text-white text-lg md:text-xl font-medium tracking-wide text-center md:text-left">
                        UPGRADE YOUR EDITING SKILLS NOW
                    </h3>
                    <button className="bg-white text-[#2b2d66] px-6 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors">
                        Start Now
                        <div className="bg-[#2b2d66] rounded-full p-1">
                            <ArrowRight size={14} className="text-white" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WhoIsThisFor;
