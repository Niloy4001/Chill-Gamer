import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { AuthContext } from "../context/AuthProvider";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { MdOutlineLightMode } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import getFromLs from "../utility";

const Navbar = () => {
  // const { user, logOut } = useContext(AuthContext)
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut();
    navigate("/");
  };

  const [mode, setMode] = useState(getFromLs);

  useEffect(() => {
    if (mode === "light") {
      document.getElementById("html").setAttribute("data-theme", "light");
    }
    if (mode === "dark") {
      document.getElementById("html").setAttribute("data-theme", "dark");
    }
  }, [mode]);

  const handleMode = () => {
    if (mode === "light") {
      localStorage.setItem("theme", "dark");
      setMode(getFromLs);
    }
    if (mode === "dark") {
      localStorage.setItem("theme", "light");
      setMode(getFromLs);
    }
  };
  return (
    <div className="bg-gradient-to-b from-[#f948b2] to-[#8758f1] text-white ">
      <nav className="w-[90%] mx-auto py-6">
        {/* Row 2: Navigation */}
        <div className="flex justify-between md:flex-row flex-row items-center px-4 py-2 gap-4">
          {/* Logo */}
          <div className="logo">
            <h1 className="text-3xl md:text-5xl font-extrabold">Chill Gamer</h1>
          </div>
          {/* Navigation */}
          <div
            onClick={() => setOpen(!open)}
            className="flex lg:hidden  items-center"
          >
            <button className="btn btn-xs shadow-2xl text-white bg-gradient-to-b from-[#f948b2] to-[#8758f1] rounded">
              {open ? <IoClose /> : <IoMenu />}
            </button>
          </div>
          <nav
            className={`${
              open ? "flex items-baseline gap-2" : "hidden"
            } lg:flex flex-col lg:flex-row space-x-4 items-center`}
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/allReviews">All Reviews</NavLink>
            <NavLink to="/addReview">Add Review</NavLink>
            <NavLink to={`/MyReviews/${user && user.email}`}>
              My Reviews
            </NavLink>
            <NavLink to={`/gameWatchList/${user && user.email}`}>
              Game WatchList
            </NavLink>
            <div
              onClick={() => handleMode()}
              className=" shadow-2xl text-white bg-gradient-to-b from-[#f948b2] to-[#8758f1]  btn btn-sm   rounded-full"
            >
              {mode === "light" ? <FaRegMoon /> : <MdOutlineLightMode />}
            </div>
            {user ? (
              <div className="auth flex items-center gap-2 lg:flex-row flex-col">
                <button className=" border-none  rounded-full">
                  {
                    <div
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={user.displayName}
                      data-tooltip-place="left"
                    >
                      <img
                        src={user.photoURL && user.photoURL}
                        alt={user.displayName}
                        className="w-8 h-8 rounded-full"
                      />
                    </div>
                  }
                </button>
                <button
                  onClick={handleLogOut}
                  className="btn btn-sm  shadow-2xl text-white bg-gradient-to-b from-[#f948b2] to-[#8758f1] rounded"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <div className="auth flex items-center gap-2 lg:flex-row flex-col">
                <Link
                  to={"/login"}
                  className="btn btn-sm  shadow-2xl text-white bg-gradient-to-b from-[#f948b2] to-[#8758f1] rounded"
                >
                  Login
                </Link>
                <Link
                  to={"/register"}
                  className="btn btn-sm  shadow-2xl text-white bg-gradient-to-b from-[#f948b2] to-[#8758f1] rounded"
                >
                  Register
                </Link>
              </div>
            )}
          </nav>
          {/* Authentication */}

          {/* {user ? (
              <div className="auth flex items-center gap-2 lg:flex-row flex-col">
                <button className=" border-none  rounded-full">
                  {
                    <div
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={user.displayName}
                      data-tooltip-place="left"
                    >
                      <img
                        src={user.photoURL && user.photoURL}
                        alt={user.displayName}
                        className="w-8 h-8 rounded-full"
                      />
                    </div>
                  }
                </button>
                <button
                  onClick={handleLogOut}
                  className="btn btn-sm  shadow-2xl text-white bg-gradient-to-b from-[#f948b2] to-[#8758f1] rounded"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <div className="auth flex items-center gap-2 lg:flex-row flex-col">
                <Link
                  to={"/login"}
                  className="btn btn-sm  shadow-2xl text-white bg-gradient-to-b from-[#f948b2] to-[#8758f1] rounded"
                >
                  Login
                </Link>
                <Link
                  to={"/register"}
                  className="btn btn-sm  shadow-2xl text-white bg-gradient-to-b from-[#f948b2] to-[#8758f1] rounded"
                >
                  Register
                </Link>
              </div>
            )} */}
        </div>
      </nav>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default Navbar;
