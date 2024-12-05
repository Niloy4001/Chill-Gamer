import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate()
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div>
        <h1 className="text-5xl font-semibold text-center">Page Not Found</h1>
        <div className="flex justify-center mt-5">
          <button 
            onClick={()=>navigate(-1)}
            className="btn btn-primary">Go back</button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
