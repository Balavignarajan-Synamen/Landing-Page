'use client'
import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import WorkFlow from "../components/WorkFlow";
import Pricing from "../components/Pricing";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

const Page = () => {
  // Dark mode state
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if the theme is stored in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      if (newTheme) {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      } else {
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
      }
      return newTheme;
    });
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
      </div>

      <FeatureSection />
      <WorkFlow />
      <Pricing />
      <Testimonial />
      <Footer />

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-6 right-6 p-3 bg-gray-800 text-white rounded-full shadow-md"
        aria-label="Toggle Dark Mode"
      >
        {isDark ? "🌞" : "🌙"}
      </button>
    </>
  );
};

export default Page;
