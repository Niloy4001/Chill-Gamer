import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthProvider";

const AddReview = () => {
  const { user } = useContext(AuthContext);

  const notify = () => {
    Swal.fire({
      title: "Successfully added your review",
      confirmButtonColor: "green",
      icon: "success",
    });
  };
  const handleSubmitReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const gameCover = form.gameCover.value;
    const gameTitle = form.gameTitle.value;
    const reviewDescription = form.reviewDescription.value;
    const rating = form.rating.value;
    const publishingYear = form.publishingYear.value;
    const genres = form.genres.value;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;

    const review = {
      gameCover,
      gameTitle,
      reviewDescription,
      rating,
      publishingYear,
      genres,
      userName,
      userEmail,
    };

    fetch("https://chill-gamer-server-kappa.vercel.app/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          notify();
          form.reset();
        }
        console.log(data);
      });
  };
  return (
    <div className="w-[90%] mx-auto pb-11">
      <h1 className="text-5xl font-medium font-sans text-center py-7">
        Add Review
      </h1>
      {/* <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto"> */}
      <div className="card bg-gradient-to-r text-white from-[#f948b2] to-[#8758f1] w-full lg:w-[70%] shrink-0 shadow-2xl mx-auto">
        <form className="card-body space-y-3" onSubmit={handleSubmitReview}>
          {/* Game Cover Image/Thumbnail */}
          <div className="form-control">
            <label htmlFor="gameCover">Game Cover Image/Thumbnail:</label>
            <input
              className="py-2 bg-white border-b outline-none border-solid border-gray-400 px-2 rounded-md text-black"
              type="url"
              id="gameCover"
              name="gameCover"
              placeholder="Enter image URL"
              required
            />
          </div>

          {/* Game Title/Name */}
          <div className="form-control">
            <label htmlFor="gameTitle">Game Title/Name:</label>
            <input
              className="py-2 bg-white border-b outline-none border-solid border-gray-400 px-2 rounded-md text-black"
              type="text"
              id="gameTitle"
              name="gameTitle"
              placeholder="Enter game title"
              required
            />
          </div>

          {/* Review Description */}
          <div className="form-control">
            <label htmlFor="reviewDescription">Review Description:</label>
            <textarea
              className="textarea border border-solid border-gray-400 text-black"
              id="reviewDescription"
              name="reviewDescription"
              placeholder="Write your detailed review"
              required
            ></textarea>
          </div>

          {/* Rating */}
          <div className="form-control">
            <label htmlFor="rating">Rating (1-5):</label>
            <input
              className="py-2 bg-white border-b outline-none border-solid border-gray-400 px-2 rounded-md text-black"
              type="number"
              id="rating"
              name="rating"
              min="1"
              max="5"
              placeholder="Enter rating"
              required
            />
          </div>

          {/* Publishing Year */}
          <div className="form-control">
            <label htmlFor="publishingYear">Publishing Year:</label>
            <input
              className="py-2 bg-white border-b outline-none border-solid border-gray-400 px-2 rounded-md text-black"
              type="number"
              id="publishingYear"
              name="publishingYear"
              placeholder="Enter publishing year (e.g., 2024)"
              required
            />
          </div>

          {/* Genres */}
          <div className="form-control">
            <label htmlFor="genres">Genres:</label>
            <select
              id="genres"
              name="genres"
              className="py-2 bg-white border-b outline-none border-solid border-gray-400 px-2 rounded-md  text-black"
              required
            >
              <option value="">Select a genre</option>
              <option value="action">Action</option>
              <option value="rpg">RPG</option>
              <option value="adventure">Adventure</option>
            </select>
          </div>

          {/* User Name (Read Only) */}
          <div className="form-control">
            <label htmlFor="userEmail">User Name:</label>
            <input
              className="py-2 bg-white border-b outline-none border-solid border-gray-400 px-2 rounded-md  text-black"
              type="text"
              id="userName"
              name="userName"
              value={user.displayName}
              readOnly
            />
          </div>

          {/* User Email (Read Only) */}
          <div className="form-control">
            <label htmlFor="userEmail">User Email:</label>
            <input
              className="py-2 bg-white border-b outline-none border-solid border-gray-400 px-2 rounded-md  text-black"
              type="email"
              id="userEmail"
              name="userEmail"
              value={user.email}
              readOnly
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="btn w-full shadow-2xl text-white bg-gradient-to-b from-[#f948b2] to-[#8758f1]"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
