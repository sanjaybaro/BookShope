import React from "react";
import signupHero from "../../Images/singuphero.jpg";
import { Link } from "react-router-dom";
import Login from "./Login";

function Signup() {
  return (
    <>
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage: `url(${signupHero})`,
        }}
      >
        <div className=" modal-box flex items-center justify-center hero-overlay bg-opacity-60   ">
          <div className="dark:text-white">
            <form method="dialog">
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
            </form>
            <h1 className="mb-5 text-5xl font-bold text-center text-indigo-400">
              bookStore
            </h1>
            <h3 className="font-bold text-lg text-center">Signup</h3>
            {/* Name */}
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your fullname"
                className="w-80 px-3 py-1 border rounded-md outline-none  dark:bg-slate-100 "
              />
            </div>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none  dark:bg-slate-100 "
              />
            </div>
            {/* Password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="text"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none  dark:bg-slate-100 dark:text-black"
              />
            </div>
            {/* Button */}
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Signup
              </button>
              <p>
                Have an account?{"  "}
                <button
                  className="underline text-indigo-400 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>
                <Login />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
