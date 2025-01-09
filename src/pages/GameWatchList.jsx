import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const GameWatchList = () => {
  const data = useLoaderData();
  const [watchList, setWatchList] = useState(data);
  

  return (
    <div className="w-[90%] mx-auto py-11 md:py-28">
      <h1 className="text-3xl md:text-5xl font-medium font-sans text-center py-7">
        Games WatchList
      </h1>
      <p className="text-center text-base md:text-xl mb-6 md:mb-14">
        Here are all reviews added to watchList by you.
      </p>
      {
        watchList.length> 0 ? 
        <>
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
            {watchList.length > 0 && (
              watchList.map((datum, idx) => (
                <tr className="hover" key={datum._id}>
                  <th>{idx + 1}</th>
                  <td>{datum.gameTitle} </td>
                  <td>{datum.reviewDescription} </td>
                  <td>{datum.genres} </td>

                  <td>{datum.rating}</td>
                </tr>
              ))
            ) }
          </tbody>
        </table>
      </div>
        </>
        :
        <>
        <h1 className="text-xl md:text-3xl text-center font-medium text-red-500">No games added in your WatchList</h1>
        </>
      }
    </div>
  );
};

export default GameWatchList;
