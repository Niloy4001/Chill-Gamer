import React from "react";
import { useLoaderData } from "react-router-dom";
import StarRatings from "react-star-ratings";

const ReviewDetails = () => {
  const data = useLoaderData();
    // console.log(data);

  //   {
  //     "_id": "67508af76347b8e29bda0c4b",
  //     "gameCover": "https://i.ibb.co/X8Cq9XP/Stealth-Strike.webp",
  //     "gameTitle": "Stealth Strike",
  //     "reviewDescription": "A stealth-action game with intricate levels and dynamic AI.",
  //     "rating": "4",
  //     "publishingYear": "2020",
  //     "genres": "action",
  //     "userName": "Huzaifa Sikder Niloy",
  //     "userEmail": "niloysikder58bd@gmail.com"
  // }

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
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
