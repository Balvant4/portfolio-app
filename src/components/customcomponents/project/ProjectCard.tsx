import Image from "next/image";
import React from "react";
import { projectdata } from "@/data/project"; // Make sure the import path is correct

function ProjectCard() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projectdata.map((project: any) => (
        <div
          key={project.id}
          className="max-w-sm bg-secbodyback border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <Image
            className="rounded-t-lg filter transition-all duration-300 ease-in-out hover:blur-sm cursor-pointer"
            src={project.image}
            alt={project.title}
            width={300}
            height={300}
            layout="responsive"
          />

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-h1text dark:text-white">
              {project.title}
            </h5>

            <p className="mb-3 font-normal text-h3text dark:text-gray-400 pr-5">
              {project.description}
            </p>
            <div className="flex justify-between">
              {/* Live Link */}
              {project.livelink && (
                <a
                  href={project.livelink}
                  target="_blank" // Opens the link in a new tab
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Live
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              )}

              {/* Read More Link */}
              {project.readmore && (
                <a
                  href={project.readmore}
                  target="_blank" // Opens the link in a new tab
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectCard;
