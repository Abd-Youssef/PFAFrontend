import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logoPng from "../../Assets/logo.png";
import { SetUser } from "../../Redux/Action";
import Button from "../Button/Button";

export default function NavBar() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div className="shadow-2xl  ">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-3   "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className=" ">
            <span className="sr-only">Your Company</span>
            <img className="h-16 " src={logoPng} alt="" />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            to="/"
            className="text-lg font-semibold leading-6 text-white hover:text-blue-200"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-lg font-semibold leading-6 text-white hover:text-blue-200"
          >
            Sevices
          </Link>
          <Link
            href="#"
            className="text-lg font-semibold leading-6 text-white hover:text-blue-200"
          >
            About
          </Link>
          <Link
            to="/doctors"
            className="text-lg font-semibold leading-6 text-white hover:text-blue-200"
          >
            Doctors
          </Link>
        </div>
        {auth.token ? (
          <div className="flex items-center lg:flex-1 lg:justify-end lg:gap-x-12">
            <Link
              className="flex items-center justify-end lg:gap-x-2"
              to={`/profile/${auth.user._id}`}
            >
              <p className=" text-lg font-bold leading-6 text-white cursor-default">
                Hi,
              </p>
              <p className=" text-lg font-bold leading-6 text-white hover:text-blue-200 cursor-pointer">
                {auth.user.first_name}
              </p>
            </Link>
            <Link to={"/"}>
              <Button
                name={"Log Out"}
                onClick={() => dispatch(SetUser({ user: null, token: null }))}
                className="border-2 rounded-md  py-2 px-5 text-lg font-bold text-white hover:bg-blue-200 "
              />
            </Link>
          </div>
        ) : (
          <div className="flex items-center lg:flex-1 lg:justify-end lg:gap-x-12">
            <Link to={"signup"}>
              <Button
                name={"Register"}
                className="border-2 rounded-md  py-2 px-5 text-lg font-bold text-white hover:bg-blue-200 "
              />
            </Link>
            <Link
              to="/signin"
              className=" text-lg font-semibold leading-6 text-white hover:text-blue-200"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
