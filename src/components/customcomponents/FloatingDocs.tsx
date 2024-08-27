"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandTwitter,
  IconMail,
  IconBriefcase,
} from "@tabler/icons-react"; // Import the relevant icons

export function FloatingDockDemo() {
  const links = [
    {
      title: "Project",
      // Green for Project
      icon: <IconBriefcase className=" text-[#4CAF50]" />,
      href: "/projects",
    },
    {
      title: "Contact",
      // Orange for Contact
      icon: <IconMail className=" text-[#FF5722]" />,
      href: "/contact",
    },
    {
      title: "LinkedIn",
      // LinkedIn blue
      icon: <IconBrandLinkedin className=" text-[#0077b5]" />,
      href: "https://www.linkedin.com/in/balvant-kumar-07108227a",
    },
    {
      title: "GitHub",
      // GitHub black
      icon: <IconBrandGithub className=" text-[#171515]" />,
      href: "https://github.com/Balvant4",
    },
    {
      title: "Instagram",
      // Instagram gradient color
      icon: <IconBrandInstagram className=" text-[#E1306C]" />,
      href: "https://instagram.com/balvantkushwaha_?igshid=OGQ5ZDc2ODk2ZA==",
    },
    {
      title: "Twitter",
      // Twitter blue
      icon: <IconBrandTwitter className=" text-[#1DA1F2]" />,
      href: "https://www.twitter.com",
    },
  ];

  return (
    <div>
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
