"use client";
import React, { FC, useEffect, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import { HomeHero } from "./components/hero";
import Marquee from "./components/magic-ui/Marquee";
import VideoTestimonials from "./components/Testimonials/VideoTestimonials";
import WhoIsThisFor from "./components/WhoIsThisFor/WhoIsThisFor";
import OurWorks from "./components/OurWorks/OurWorks";
import Courses from "./components/Route/Courses";
import Reviews from "./components/Route/Reviews";
import Footer from "./components/Footer";
import ScrollStack, { ScrollStackItem } from "./components/react-bits/ScrollStack";

interface Props { }

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");

  return (
    <>
      <Heading
        title="BBEdits"
        description="BBEdits is a platform for students to learn and get help from teachers"
        keywords="Prograaming,MERN,Redux,Machine Learning"
      />
      <div suppressHydrationWarning>
        <Header
          open={open}
          setOpen={setOpen}
          activeItem={activeItem}
          setRoute={setRoute}
          route={route}
        />
        <HomeHero />

        {/* Scroll Stack Section */}
        <div className="w-full h-[600px] relative bg-[#030014] overflow-hidden py-10">
          <div className="max-w-6xl mx-auto px-4 h-full">
            <ScrollStack itemDistance={50} itemScale={0.05} itemStackDistance={20}>
              <ScrollStackItem>
                <div className="w-[300px] md:w-[600px] 800px:w-[800px] h-[350px] 800px:h-[500px] bg-red-900/80 rounded-xl flex items-center justify-center border border-white/20">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-white">Card 1</h2>
                    <p className="text-gray-300">This is the first card in the stack</p>
                  </div>
                </div>
              </ScrollStackItem>
              <ScrollStackItem>
                <div className="w-[300px] md:w-[600px] 800px:w-[800px] h-[350px] 800px:h-[500px] bg-blue-900/80 rounded-xl flex items-center justify-center border border-white/20">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-white">Card 2</h2>
                    <p className="text-gray-300">This is the second card in the stack</p>
                  </div>
                </div>
              </ScrollStackItem>
              <ScrollStackItem>
                <div className="w-[300px] md:w-[600px] 800px:w-[800px] h-[350px] 800px:h-[500px] bg-green-900/80 rounded-xl flex items-center justify-center border border-white/20">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-white">Card 3</h2>
                    <p className="text-gray-300">This is the third card in the stack</p>
                  </div>
                </div>
              </ScrollStackItem>
            </ScrollStack>
          </div>
        </div>
        <Courses />
        {/* <Reviews /> */}
        <OurWorks />
        <WhoIsThisFor />
        <VideoTestimonials />
        <Marquee />
        <Footer />
      </div>
    </>
  );
};

export default Page;
