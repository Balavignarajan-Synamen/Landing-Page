"use client";
import React from "react";
import Image from "next/image"; // Don't forget to import Image if you're using Next.js

export const testimonials = [
  {
    user: "John Doe cl",
    company: "Stellar Solutions",
    image: (
      <Image
        src="/images/profile-pictures/user1.jpg"
        alt="logo"
        width={50}
        height={50}
        className="mr-6 rounded-full border border-neutral-300"
      />
      
    ),
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: (
      <Image
        src="/images/profile-pictures/user2.jpg"
        alt="logo"
        width={50}
        height={50}
        className="mr-6 rounded-full border border-neutral-300"

      />
    ),
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: (
      <Image
        src="/images/profile-pictures/user3.jpg"
        alt="logo"
        width={50}
        height={50}
        className="mr-6 rounded-full border border-neutral-300"

      />
    ),
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: (
      <Image
        src="/images/profile-pictures/user4.jpg"
        alt="logo"
        width={50}
        height={50}
        className="mr-6 rounded-full border border-neutral-300"

      />
    ),
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: (
      <Image
        src="/images/profile-pictures/user5.jpg"
        alt="logo"
        width={50}
        height={50}
        className="mr-6 rounded-full border border-neutral-300"

      />
    ),
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: (
      <Image
        src="/images/profile-pictures/user6.jpg"
        alt="logo"
        width={50}
        height={50}
        className="mr-6 rounded-full border border-neutral-300"

      />
    ),
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

const Testimonial = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl my-10 lg:my:20">
        What people are saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral-900  rounded-md p-6 text-md border border-neutral-700 font-thin">
            <div className="flex flex-wrap justify-center ">
                <p className="text-white">{testimonial.text}</p>
               <div className="flex mt-8 items-start ">
                <div>
                {testimonial.image}
              </div>
              <div className="text-white"  >
                  <h6 className="text-white">{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-white">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default Testimonial;
