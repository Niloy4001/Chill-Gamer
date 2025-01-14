import React, { useContext, useRef, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { RiEyeLine } from "react-icons/ri";
import { HiOutlineEyeOff } from "react-icons/hi";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { AuthContext } from "../context/AuthProvider";

const Register = () => {
  const { logInByGoogle, signInByEmailPassword, user, manageProfile, logOut } =
    useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const nameRef = useRef();
  const photoUrlRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [eye, setEye] = useState(false);
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
  const notify = () => {
    Swal.fire({
      title: "Password,",
      html: `<ul class="list-disc  space-y-2 text-gray-800 ml-8">
                <li class="text-left text-red-600">
                    Must have an Uppercase letter 
                </li>
                <li class="text-left text-red-600">
                    Must have a Lowercase letter
                </li>
                <li class="text-left text-red-600">
                    Length must be at least 6 characters
                </li>
                </ul>`,
      confirmButtonColor: "red",
      icon: "error",
    });
  };
  const notifyForLogIn = () => {
    Swal.fire({
      title: "Registration Successful, Please Log In",
      confirmButtonColor: "green",
      icon: "success",
    });
  };

  // handle google sign in
  const handleGoogleLogIn = () => {
    setErrorMessage("");
    logInByGoogle()
      .then((res) => {
        navigate("/");
        logOut();
        notifyForLogIn();
      })
      .catch((err) => setErrorMessage(err.message));
  };

  // handle form on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    const name = nameRef.current.value;
    const photo = photoUrlRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!passwordRegex.test(password)) {
      return notify();
    }

    signInByEmailPassword(email, password)
      .then((res) => {
        navigate("/");
        notifyForLogIn();
        logOut();
        e.target.reset();
        manageProfile(name, photo)
          .then((response) => "good")
          .catch((err) => setErrorMessage(err.message));
      })
      .catch((err) => setErrorMessage(err.message));
  };
  return (
    <div>
      <Helmet>
        <title>Sign Up | Chill Gamer</title>
      </Helmet>
      <div className="flex justify-center items-center py-14 px-3">
      <div className="flex flex-col-reverse md:flex-row w-full md:w-[80%]  lg:w-[60%] ">
          {/* form div */}
          <div className="bg-white w-full md:w-[50%] p-4 shrink-0 shadow-2xl">
            {/* title */}
            <h1 className="text-4xl text-center font-bold mb-5 flex justify-between items-center px-6">
                          <span >Register</span>
                          <button onClick={handleGoogleLogIn}  className="text-2xl text-[#0B0223]">
                            <FaGoogle></FaGoogle>
                          </button>
                        </h1>
            {/* google log in */}
            {/* <div className="w-full px-8">
              <button
                onClick={handleGoogleLogIn}
                className="btn text-[10px] md:text-sm border border-solid border-[#8758f1] hover:text-white hover:bg-gradient-to-b from-[#f948b2] to-[#8758f1] w-full flex items-center justify-center space-x-2 mb-2"
              >
                <FaGoogle className="text-[#8758f1] " />
                <span>Register with Google</span>
              </button>
            </div> */}
            {/* divider */}
            {/* <div className="px-8 mt-4">
              <div className="divider my-0">OR</div>
            </div> */}
            {/* form  */}
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  ref={nameRef}
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  ref={photoUrlRef}
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  ref={passwordRef}
                  type={eye ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <span
                  onClick={() => setEye(!eye)}
                  className="absolute top-[52px] right-[8px] cursor-pointer"
                >
                  {eye ? <HiOutlineEyeOff /> : <RiEyeLine />}
                </span>
              </div>
              <div className="form-control mt-6">
                <button className="btn shadow-2xl text-white bg-gradient-to-b from-[#f948b2] to-[#8758f1]">
                  Register
                </button>
              </div>
              <div>
                <p className="text-left text-red-600">
                  {errorMessage && errorMessage}{" "}
                </p>
              </div>
             
            </form>
          </div>
          {/* right info div */}
          <div className="flex items-center justify-center text-white bg-gradient-to-b from-[#f948b2] to-[#8758f1] w-full md:w-[50%] py-7 shadow-2xl">
            <div className="text-center text-white">
              <h1 className="text-3xl font-bold mb-2">Welcome to Register</h1>
              <p className="mb-4">Already Have an Account?</p>
              <Link
                to={"/login"}
                className="px-6 py-2 text-pink-500 bg-white rounded-md font-semibold hover:bg-pink-100"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
