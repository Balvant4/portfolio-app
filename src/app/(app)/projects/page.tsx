"use client";
import ProjectCard from "@/components/customcomponents/project/ProjectCard";
import { VortexDemoSecond } from "@/components/customcomponents/project/VartoxDemoProject";
import React from "react";

function page() {
  return (
    <div className=" pb-10">
      <VortexDemoSecond />
      <div className=" md:px-16 px-4">
        <ProjectCard />
      </div>
    </div>
  );
}

export default page;
