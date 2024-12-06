import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const HighestRated = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch("https://chill-gamer-server-kappa.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
      });
  }, []);
  return (
    <div className="w-[90%] mx-auto py-14 md:py-28">
      <h1 className="text-3xl md:text-5xl font-medium font-sans text-center py-7">
        <Typewriter
          words={["Highest Rated Games"]}
          loop={false}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <p className="text-center text-base md:text-xl mb-6 md:mb-14">
        Experience Gaming Excellence with the Highest Ratings.
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 justify-center items-center">
        {allData.length > 0 ? (
          allData.map((datum) => (
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
                  <Link
                    to={`/reviewDetails/${datum._id}`}
                    className="btn btn-sm shadow-2xl text-white bg-gradient-to-b from-[#f948b2] to-[#8758f1]"
                  >
                    Explore Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-2xl md:text-4xl text-red-400 text-center">
            No data in database
          </p>
        )}
      </div>
    </div>
  );
};

export default HighestRated;
