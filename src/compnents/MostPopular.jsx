import React, { useEffect, useState } from "react";

const MostPopular = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allReviews")
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
      });
  }, []);
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-3xl md:text-5xl font-medium font-sans text-center py-7">
        Most Popular Games
      </h1>
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
            {allData.map((datum, idx) => (
              <tr className="hover">
                <th>{idx + 1}</th>
                <td>{datum.gameTitle} </td>
                <td>{datum.reviewDescription} </td>
                <td>{datum.genres} </td>
                <td>{datum.rating} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MostPopular;
