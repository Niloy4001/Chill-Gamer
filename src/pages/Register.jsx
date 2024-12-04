import React, { useContext, useRef, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/Context';
import { RiEyeLine } from "react-icons/ri";
import { HiOutlineEyeOff } from "react-icons/hi";
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const Register = () => {
    const { logInByGoogle, signInByEmailPassword, user, manageProfile, logOut } = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState('')
    const nameRef = useRef()
    const photoUrlRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()
    const [eye, setEye] = useState(false)
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    const notify = () => {
        Swal.fire({
            title: 'Password,',
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
            icon: "error"
        });
    }
    const notifyForLogIn = () => {
        Swal.fire({
            title: 'Registration Successful, Please Log In',
            confirmButtonColor: "green",
            icon: "success"
        });
    }

    // handle google sign in
    const handleGoogleLogIn = () => {
        setErrorMessage('')
        logInByGoogle()
            .then(res => {
                navigate('/')
            })
            .catch(err => setErrorMessage(err.message))
    }

    // handle form on submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage('')
        const name = nameRef.current.value
        const photo = photoUrlRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value

        if (!passwordRegex.test(password)) {
            return notify()
        }

        signInByEmailPassword(email, password)
            .then(res => {
                navigate('/')
                notifyForLogIn()
                logOut()
                e.target.reset()
                manageProfile(name, photo)
                    .then(response => 'good')
                    .catch(err => setErrorMessage(err.message))

            })
            .catch(err => setErrorMessage(err.message))



    }
    return (
        <div>
            <Helmet>
                <title>Sign Up | Chill Gamer</title>
            </Helmet>
            <div className='flex justify-center items-center py-14 px-3'>
                <div className="card bg-base-100 w-full max-w-lg p-4 shrink-0 shadow-2xl">
                    {/* title */}
                    <h1 className='text-4xl text-center font-bold mb-5'>Register</h1>
                    {/* google log in */}
                    <div className='w-full px-8'>
                        <button
                            onClick={handleGoogleLogIn}
                            className="btn text-[10px] md:text-sm border border-solid border-blue-500 hover:text-white hover:bg-blue-700 w-full flex items-center justify-center space-x-1 mb-2">
                            <FaGoogle className="text-blue-500 " />
                            <span>Register with Google</span>
                        </button>
                    </div>
                    {/* divider */}
                    <div className='px-8 mt-4'>
                        <div className="divider my-0">OR</div>
                    </div>
                    {/* form  */}
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input ref={nameRef} type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input ref={photoUrlRef} type="text" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input ref={emailRef} type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input ref={passwordRef} type={eye ? 'text' : 'password'} placeholder="password" className="input input-bordered" required />
                            <span
                                onClick={() => setEye(!eye)}
                                className='absolute top-[52px] right-[8px] cursor-pointer'>
                                {
                                    eye ?
                                        <HiOutlineEyeOff />
                                        :
                                        <RiEyeLine />
                                }
                            </span>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn hover:bg-blue-700 bg-blue-500 text-white">Register</button>
                        </div>
                        <div>
                            <p className='text-left text-red-600'>{errorMessage && errorMessage} </p>
                        </div>
                        <div>
                            <p className='text-center my-3'>Already Have an Account ? <Link to={"/login"} className='text-red-600 font-medium'>Log In</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;