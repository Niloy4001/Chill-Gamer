import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";

const ReviewDetails = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();


  const notify = () => {
    Swal.fire({
      title: "Successfully added to WatchList",
      confirmButtonColor: "green",
      icon: "success",
    });
  };

  const handleAddToWatchList = (info) => {
    const currentEmail = user && user.email;
    const currentName = user && user.displayName;

    info.loggedInUserName = currentName;
    info.loggedInUserEmail = currentEmail;

    // console.log(currentEmail,currentName);

    console.log(info);

    fetch("http://localhost:5000/addToWatchList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          notify();
        }
        console.log(data);
      });
  };

  return (
    <div className="py-12 w-[90%] mx-auto">
      <div className="card mx-auto bg-base-100 w-full md:w-[50%] lg:w-[30%] shadow-xl">
        <figure>
          <img src={data.gameCover} alt={data.gameTitle} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {data.gameTitle}
            <div className="badge badge-secondary text-[5px] md:text-xs">
              Published In : {data.publishingYear}
            </div>
          </h2>
          <div className="badge badge-outline">{data.genres}</div>
          <p>{data.reviewDescription} </p>
          <div className="flex items-center justify-start gap-2">
            <span>Rating:</span>
            <div>
              <StarRatings
                rating={Number(data.rating)}
                starRatedColor="yellow"
                starDimension="20px"
                starSpacing="2px"
                numberOfStars={5}
                name="rating"
              />
            </div>
            <div>({data.rating}.00)</div>
          </div>
          <div className="card-actions justify-start">
            <div className="badge badge-outline">{data.userName}</div>
            <div className="badge badge-outline">{data.userEmail} </div>
          </div>
          <div>
            {user && (
              <button
                onClick={() => handleAddToWatchList(data)}
                className="btn btn-sm btn-primary mt-4"
              >
                Add to WatchList
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
