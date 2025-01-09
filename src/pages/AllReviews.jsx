import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import StarRatings from "react-star-ratings";

const AllReviews = () => {
  const data = useLoaderData();
  const [allData, setAllData] = useState(data);

  // handle sort

  const handleSort = (status) => {
    if (status === "rating") {
      const sortedRatingWise = [...allData].sort((a, b) => b.rating - a.rating);
      setAllData(sortedRatingWise);
    }
    if (status === "publishingYear") {
      const sortedYearWise = [...allData].sort(
        (a, b) => b.publishingYear - a.publishingYear
      );
      setAllData(sortedYearWise);
    }
  };

  // handle filter

  const handleFilter = (status) => {
    if (status === "action") {
      const filtered = data.filter((item) => item.genres === "action");
      setAllData(filtered);
    }
    if (status === "adventure") {
      const filtered = data.filter((item) => item.genres === "adventure");
      setAllData(filtered);
    }
    if (status === "rpg") {
      const filtered = data.filter((item) => item.genres === "rpg");
      setAllData(filtered);
    }
    if (status === "all") {
      setAllData(data);
    }
  };

  return (
    <div className="w-[90%] mx-auto py-14 md:py-28">
      <h1 className="text-3xl md:text-5xl font-medium font-sans text-center py-7">
        All Reviews
      </h1>
      <p className="text-center text-base md:text-xl mb-6 md:mb-14">
        Experience Gaming Excellence with the Highest Ratings.
      </p>
      {/* drop down */}
      <div className="flex justify-center md:justify-end items-center bg-white mb-5">
        <div className="py-4 mr-4">
          <details className="dropdown">
            <summary className="btn btn-sm m-1 shadow-2xl text-white bg-gradient-to-b from-[#f948b2] to-[#8758f1]">
              Filter
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li>
                <button onClick={() => handleFilter("all")}>All</button>
              </li>
              <li>
                <button onClick={() => handleFilter("action")}>Action</button>
              </li>
              <li>
                <button onClick={() => handleFilter("adventure")}>
                  Adventure
                </button>
              </li>
              <li>
                <button onClick={() => handleFilter("rpg")}>RPG</button>
              </li>
            </ul>
          </details>
          <details className="dropdown">
            <summary className="btn btn-sm m-1 shadow-2xl text-white bg-gradient-to-b from-[#f948b2] to-[#8758f1]">
              Sort By
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li>
                <button onClick={() => handleSort("rating")}>Rating</button>
              </li>
              <li>
                <button onClick={() => handleSort("publishingYear")}>
                  Publishing Year
                </button>
              </li>
            </ul>
          </details>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 justify-center items-center">
        {allData ? (
          allData.map((datum) => (
            <div key={datum._id} className="card rounded-none bg-base-100  shadow-xl relative">
              <div className="badge text-white bg-gradient-to-b from-[#f948b2] to-[#8758f1] absolute top-12 right-12">{datum.publishingYear}</div>
              <figure className="px-10 pt-10">
                <img
                  src={datum.gameCover}
                  alt="Shoes"
                  className=" h-[200px] md:h-[270px] w-full"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className=" flex items-center gap-2"><div className="text-2xl font-semibold">{datum.gameTitle}</div> <div className="badge text-white bg-gradient-to-b from-[#f948b2] to-[#8758f1]">{datum.genres}</div></h2>
                <p>{datum.reviewDescription}</p>
                <StarRatings
                    rating={Number(datum.rating)}
                    starDimension="15px"
                    starSpacing="5px"
                    starRatedColor="gold"
                  />
                {/* <p>Publishing Year: </p> */}
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
          <p className="text-4xl text-red-400 text-center">
            No data in database
          </p>
        )}
      </div>
    </div>
  );
};

export default AllReviews;
