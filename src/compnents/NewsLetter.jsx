import React from "react";
import { Typewriter } from "react-simple-typewriter";

const NewsLetter = () => {
  return (
    <div>
      <div className=" py-12 flex flex-col items-center text-center">
        {/* Icon */}
        <div className="mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="teal"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l8.229 5.486a2 2 0 002.542 0L22 8m-19 8h18a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </div>

        {/* Header */}
        {/* <h2 className="text-2xl font-bold text-gray-800">
          Get Updated with new Games
        </h2> */}
        <h1 className="text-3xl md:text-5xl font-medium font-sans text-center py-7">
        <Typewriter
            words={['Get Updated with new Games']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
      </h1>

        {/* Subtext */}
        <p className="text-gray-600 max-w-md mt-2">
        Stay Ahead with the Latest Additions to the Gaming Universe.
        </p>

        {/* Input and Button */}
        <div className="mt-6 flex flex-col lg:flex-row items-center  gap-2">
          <div className="relative">
            <input
              type="email"
              placeholder="Your email"
              className="border border-gray-300 rounded-md py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12H8m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </span>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-md py-2 px-6 ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
