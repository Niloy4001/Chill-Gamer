import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
const MyReviews = () => {
  const data = useLoaderData();
  const [reviews, setReviews] = useState(data);
  //   console.log(reviews);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://chill-gamer-server-kappa.vercel.app/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((resul) => {
            console.log(resul);
            if (resul.deletedCount === 1) {
                const remaining = reviews.filter(item => item._id != id)
                setReviews(remaining)
              Swal.fire({
                title: "Deleted!",
                text: "Your review has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="w-[90%] mx-auto py-11 md:py-28">
      <h1 className="text-3xl md:text-5xl font-medium font-sans text-center py-7">
        My Reviews
      </h1>
      <p className="text-center text-base md:text-xl mb-6 md:mb-14">
        Here are all reviews submitted by you.
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {reviews.length > 0 ? (
              reviews.map((datum, idx) => (
                <tr className="hover" key={datum._id}>
                  <th>{idx + 1}</th>
                  <td>{datum.gameTitle} </td>
                  <td>{datum.reviewDescription} </td>
                  <td>{datum.genres} </td>
                  <td className="flex items-center gap-2">
                    <Link to={`/updateReview/${datum._id}`} className="btn btn-sm">
                      <AiFillEdit />
                    </Link>
                    <span
                      onClick={() => handleDelete(datum._id)}
                      className="btn btn-sm"
                    >
                      <MdDelete />
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <p className="text-4xl text-red-400 text-center">
                Still No review added by yourself
              </p>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
