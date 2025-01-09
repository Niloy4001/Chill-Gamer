import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaRunning } from "react-icons/fa";
import contact from "../assets/contact.png";

const Contact = () => {
  return (
    <div className="w-[90%] mx-auto">
         <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-medium font-sans text-center py-7">
          Contact Us
        </h1>
        <p className="text-gray-600">
          Any questions or remarks? Just write us a message!
        </p>
      </div>
        <div className=" flex md:flex-row flex-col items-start">
      <div className="flex-1">
        {/* Contact Form */}
        <form className="w-full max-w-lg   rounded-lg p-8 mb-16">
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your Name"
              className="w-full px-4 py-2 border bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter a valid email address"
              className="w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Your Message
            </label>
            <textarea className="textarea w-full bg-white" placeholder="Enter Your Message"></textarea>
          </div>


          <button
            type="submit"
            className="btn shadow-2xl text-white bg-gradient-to-b from-[#f948b2] to-[#8758f1] w-full"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="flex-1">
        <img src={contact} alt="" />
      </div>
    </div>
    </div>
  );
};

export default Contact;
