"use client";
import ProjectCard from "@/components/customcomponents/ProjectCard";
import { VortexDemoSecond } from "@/components/customcomponents/VartoxDemoProject";
import React from "react";

function page() {
  return (
    <div>
      <VortexDemoSecond />
      <div className=" px-4">
        <ProjectCard />
      </div>
    </div>
  );
}

export default page;
