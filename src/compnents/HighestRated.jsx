import React, { useEffect, useState } from "react";

const HighestRated = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
      });
  }, []);
  return (
    <div className="w-[90%] mx-auto py-14 md:py-28">
      <h1 className="text-3xl md:text-5xl font-medium font-sans text-center py-7">
        Highest Rated Games
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 justify-center items-center">
        {allData.map((datum) => (
          <div key={datum._id} className="card bg-base-100  shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={datum.gameCover}
                alt="Shoes"
                className="rounded-xl h-[200px] md:h-[270px] w-full"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{datum.gameTitle}</h2>
              <p>{datum.reviewDescription}</p>
              <p>Rating: {datum.rating}</p>
              <div className="card-actions">
                <button className="btn btn-sm btn-primary">
                  Explore Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighestRated;
