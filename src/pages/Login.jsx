import React, { Fragment, useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setUserDetails } from "../store/features/login";
import "./login.css";

export const Login = () => {
  const [user, setUser] = useState({ name: "", password: "" });
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  function handleUser(e) {
    setName(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit", user);

    dispatch(setUserDetails(user));
    navigate("/home");
  }
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center w-full">
      
            <h1 class="mb-4 my-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-white">
              Login Page
            </h1>
        <form className="max-w" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className=" mb-2 text-lg font-medium  text-white">
              UserName
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={user?.name}
              onChange={handleChange}
              className="bg-gray-50 border text-sm rounded-lg  w-full p-2.5 text-gray-900"
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-5">
            <label className=" mb-2 text-lg font-medium  text-white ">
              User password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={user?.password}
              name="password"
              onChange={handleChange}
              placeholder="Password"
              className="bg-gray-50 border text-sm rounded-lg  w-full p-2.5 text-gray-900"
              required
            />
          </div>

          <div className="flex flex-row gap-1 text-white">
            <input
              type="checkbox"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            />
            <p className="text-white text-center">Show Password</p>
          

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm w-full  px-5 py-2.5 text-center"
          >
            Submit
          </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};
