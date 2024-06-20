import React from "react";
import signupHero from "../../Images/singuphero.jpg";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfull");
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

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
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h1 className="mb-5 text-5xl font-bold text-center text-indigo-400">
                bookStore
              </h1>
              <h3 className="font-bold text-lg text-center">Signup</h3>
              {/* Name */}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  {...register("fullname", { required: true })}
                  type="name"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none  dark:bg-slate-100 "
                />
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-600">
                    This field is required !
                  </span>
                )}
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none  dark:bg-slate-100 "
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-600">
                    This field is required !
                  </span>
                )}
              </div>
              {/* Password */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  {...register("password", { required: true })}
                  type="text"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none  dark:bg-slate-100 dark:text-black"
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-600">
                    This field is required !
                  </span>
                )}
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
