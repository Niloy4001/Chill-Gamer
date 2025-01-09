import React from "react";
import { useNavigate } from "react-router-dom";
import error from '../assets/404error.png'

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div>
        <img src={error} alt="" className="w-[400px] h-[400px]" />
        <div className="flex justify-center mt-5">
          <button
            onClick={() => navigate(-1)}
            className="btn shadow-2xl text-white bg-gradient-to-b from-[#f948b2] to-[#8758f1]"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
