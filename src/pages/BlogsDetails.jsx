import React from "react";
import { useLoaderData } from "react-router-dom";

const BlogsDetails = () => {
  const data = useLoaderData();
//   console.log(data);

  return (
    <div className="py-8 md:py-16">
      <div className="w-full md:w-[80%] lg:w-[60%] mx-auto bg-white  flex md:flex-row flex-col items-center overflow-hidden ">
        <div className="md:w-[40%] w-full">
          <img
            src={data.thumbnail}
            alt={data.title}
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="p-4 w-full md:w-[60%]">
          <h2 className="text-xl font-semibold text-gray-800">{data.title}</h2>
          <p className="badge text-white bg-gradient-to-b from-[#f948b2] to-[#8758f1] ">{data.category}</p>
          {/* <div className="badge badge-ghost">go</div> */}
          <p className="text-gray-700 text-sm my-2">{data.description}</p>
          <p className="text-gray-400 text-xs">Posted on: {data.postedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogsDetails;
