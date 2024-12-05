import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const GameWatchList = () => {
  const data = useLoaderData();
  const [watchList, setWatchList] = useState(data);
  console.log(data);

  return (
    <div className="w-[90%] mx-auto py-11 md:py-28">
      <h1 className="text-3xl md:text-5xl font-medium font-sans text-center py-7">
        Games WatchList
      </h1>
      <p className="text-center text-base md:text-xl mb-6 md:mb-14">
        Here are all reviews added to watchList by you.
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
            {watchList.length > 0 ? (
              watchList.map((datum, idx) => (
                <tr className="hover" key={datum._id}>
                  <th>{idx + 1}</th>
                  <td>{datum.gameTitle} </td>
                  <td>{datum.reviewDescription} </td>
                  <td>{datum.genres} </td>

                  <td>{datum.rating}</td>
                </tr>
              ))
            ) : (
              <p className="text-4xl text-red-400 text-center">
                Still No review added to watchList by yourself
              </p>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GameWatchList;
