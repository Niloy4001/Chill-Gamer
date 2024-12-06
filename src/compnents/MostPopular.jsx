import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const MostPopular = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch("https://chill-gamer-server-kappa.vercel.app/allReviews")
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
      });
  }, []);
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-3xl md:text-5xl font-medium font-sans text-center py-7">
        <Typewriter
          words={["Most Popular Games"]}
          loop={false}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <p className="text-center text-base md:text-xl mb-6 md:mb-14">
        Trendsetters and Crowd-Pleasers—Explore the Games Everyone’s Talking
        About.
      </p>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Description</th>
              <th>Genres</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {allData.length > 0 ? (
              allData.map((datum, idx) => (
                <tr className="hover" key={datum._id}>
                  <th>{idx + 1}</th>
                  <td>{datum.gameTitle} </td>
                  <td>{datum.reviewDescription} </td>
                  <td>{datum.genres} </td>
                  <td>{datum.rating} </td>
                </tr>
              ))
            ) : (
              <p className="text-2xl md:text-4xl text-red-400 text-center">
                No data in database
              </p>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MostPopular;
