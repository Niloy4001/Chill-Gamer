import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'

const Blogs = () => {
    const [allData, setAllData] = useState([]);
    
      useEffect(() => {
        fetch("https://chill-gamer-server-kappa.vercel.app/blogs")
          .then((res) => res.json())
          .then((data) => {
            setAllData(data);
          });
      }, []);
  return (
    <div className="w-[90%] mx-auto py-14 md:py-28">
<h1 className="text-3xl md:text-5xl font-medium font-sans text-center py-7">
        <Typewriter
          words={["Blogs"]}
          loop={false}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <p className="text-center text-base md:text-xl mb-6 md:mb-14">
        Experience Gaming Excellence with the Highest Ratings.
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 justify-center items-center">
        {allData.length > 0 ? (
          allData.map((datum) => (
            <Link to={`/blog/${datum._id}`} key={datum._id} className="card rounded-none bg-base-100  shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={datum.thumbnail}
                  alt="Shoes"
                  className="rounded h-[180px] md:h-[240px] w-full"
                />
              </figure>
              <div className="card-body items-center ">
              <div className='flex justify-between items-center w-full'>
              <div className="badge badge-ghost">{datum.category}</div>
              <div>{datum.postedDate}</div>
              </div>
                <h2 className="card-title font-semibold text-left">{datum.title}</h2>
                <p>{datum.description.substr(0,100)}</p>

                <div className="card-actions">
                </div>
              </div>
            </Link>
          ))
        ) : (
          // <p className="text-2xl md:text-4xl text-red-400 text-center">
          //   No data in database
          // </p>
          <div className="w-full h-400px flex justify-center items-center">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Blogs