import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'
import Swal from 'sweetalert2'

const UpdateReview = () => {


    // {
    //     "_id": "67508c0b6347b8e29bda0c50",
    //     "gameCover": "https://i.ibb.co/JCMGp0M/Zombie-Invasion.jpg",
    //     "gameTitle": "Zombie Invasion",
    //     "reviewDescription": "A survival horror game with intense gameplay and a gripping story.",
    //     "rating": "4",
    //     "publishingYear": "2021",
    //     "genres": "action",
    //     "userName": "Niloy",
    //     "userEmail": "niloy@gmail.com"
    // }



    const {user} = useContext(AuthContext)
    const data = useLoaderData()
    const {gameCover,gameTitle,reviewDescription,rating,publishingYear,genres,userName,userEmail,_id} = data


    // console.log(data);
    const notify = () => {
        Swal.fire({
          title: "Successfully Updated your review",
          confirmButtonColor: "green",
          icon: "success",
        });
      };
      const handleUpdateReview = (e) => {
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
    
        fetch(`https://chill-gamer-server-kappa.vercel.app/updateReview/${_id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(review),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount === 1) {
              notify();
            }
            console.log(data);
          });
      };
    
  return (
    <div>
      <h1 className="text-5xl font-medium font-sans text-center py-7">
       Update Review
      </h1>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
        <form className="card-body space-y-3" onSubmit={handleUpdateReview}>
          {/* Game Cover Image/Thumbnail */}
          <div className="form-control">
            <label htmlFor="gameCover">Game Cover Image/Thumbnail:</label>
            <input
                defaultValue={gameCover}
              className="input border border-solid border-gray-400"
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
            defaultValue={gameTitle}
              className="input border border-solid border-gray-400"
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
            defaultValue={reviewDescription}
              className="textarea border border-solid border-gray-400"
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
            defaultValue={rating}
              className="input border border-solid border-gray-400"
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
            defaultValue={publishingYear}
              className="input border border-solid border-gray-400"
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
            <select id="genres" name="genres" defaultValue={genres} required>
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
              className="input border border-solid border-gray-400"
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
              className="input border border-solid border-gray-400"
              type="email"
              id="userEmail"
              name="userEmail"
              value={user.email}
              readOnly
            />
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit" className="btn w-full bg-blue-500">
              Update Review
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateReview