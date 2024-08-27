"use client";
import { useEffect, useState } from "react";

export default function LanguageCycler() {
  const languages = [
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Next.js",
    "HTML",
    "CSS",
  ];

  const [currentLanguage, setCurrentLanguage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLanguage((prev) => (prev + 1) % languages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [languages.length]); // Include languages.length as a dependency

  return (
    <span className="text-red-600 font-bold">{languages[currentLanguage]}</span>
  );
}
