"use client";
import { Button } from "@/components/ui/button";

import balvant from "../../../../public/balvant.jpg";
import LanguageCycler from "@/components/customcomponents/LanguageCycle";
import { FloatingDockDemo } from "../FloatingDocs";
import Image from "next/image";

function Hero() {
  return (
    <div>
      <section
        className="relative flex flex-col md:flex-row items-center justify-center md:justify-between p-8  md:h-[41.5rem] bg-cover bg-center"
        style={{
          backgroundImage: "url('/project.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay */}
        <div className="relative z-10 w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4 text-h1text">
            I'm Balvant Kumar
          </h1>
          <p className="text-lg mb-6 text-h3text">
            I am a passionate{" "}
            <span className="  text-[#e8741c] font-bold">
              {" "}
              Full Stack developer
            </span>
            , dedicated to building dynamic and efficient web applications. With
            expertise in both front-end and back-end technologies, I create
            seamless and responsive projects that deliver exceptional user
            experiences.
          </p>

          <div className=" justify-center md:justify-start space-x-4 flex  md:hidden">
            <Button variant="secondary">Project</Button>
            <Button variant="secondary">Contact</Button>
          </div>
          <div className=" mt-5">
            <p className=" text-h1text text-2xl">
              Language: <LanguageCycler />
            </p>
          </div>
          <div className=" hidden md:flex pt-5">
            <FloatingDockDemo />
          </div>
        </div>
        {/* Right Section */}
        <div className="relative z-10 w-full md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
          <Image
            src={balvant} // Replace with your image path
            alt="Hero Image"
            width={400}
            height={400}
            className="object-cover rounded-lg opacity-80"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
