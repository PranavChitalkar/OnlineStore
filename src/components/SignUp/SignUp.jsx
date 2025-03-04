import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../FirebaseAuth/firebaseAuth';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import  { ToastIcon } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";

const SignUp = () => {
  const [UserSignUp, setUserSignUp] = useState({ username: "", email: "", password: "" });
  const navigateLogin = useNavigate();

  const handleChange = (e) => {
    setUserSignUp({ ...UserSignUp, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!UserSignUp.username || !UserSignUp.email || !UserSignUp.password) {
      return toast.error("All fields are required!");
    } else {
      createUserWithEmailAndPassword(auth, UserSignUp.email, UserSignUp.password)
        .then(async (res) => {
          const user = res.user;
          await updateProfile(user, {
            displayName: UserSignUp.username
          });

          toast.success("Account created successfully!");
          navigateLogin("/login");
        })
        .catch((err) => toast.error(err.message));
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <h1 className="text-2xl font-semibold">Sign Up</h1>

              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  {/* Username */}
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="username"
                      name="username"
                      type="text"
                      value={UserSignUp.username}
                      onChange={handleChange}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Full Name"
                    />
                    <label
                      htmlFor="username"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Full Name
                    </label>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="email"
                      name="email"
                      type="email"
                      value={UserSignUp.email}
                      onChange={handleChange}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Email Address"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>

                  {/* Password */}
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="password"
                      name="password"
                      type="password"
                      value={UserSignUp.password}
                      onChange={handleChange}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Password"
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="relative">
                    <button
                      onClick={handleSubmit}
                      className="bg-cyan-500 text-white rounded-md px-2 py-1 w-full"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>

              {/* Link to Login page */}
              <div className="w-full flex justify-center mt-6">
                <p className="text-gray-600">Already have an account?</p>
                <Link to="/login" className="text-cyan-500 ml-2">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </>
  );
};

export default SignUp;
