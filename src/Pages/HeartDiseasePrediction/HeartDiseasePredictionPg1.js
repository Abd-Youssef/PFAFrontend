import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import NavBar from "../../Components/NavBar/NavBar";
import HeartDiseasePredictionPng from "../../Assets/HeartDiseasePrediction.png";

function HeartDiseasePredictionPg1() {
  const navigate = useNavigate();
  return (
    <div className="bg-cover bg-center bg-homePage h-full w-full bg-blue-1">
      <NavBar />
      <div className="flex justify-center w-full   bg-blue-50">
        <div className="flex justify-between w-3/5  m-20 ">
          <div className="  w-1/5  ">
            <ul className="ml-6 ">
              <li className="py-2 pl-3 text-lg font-semibold border-l-4 border-green-900 text-blue-1 cursor-default">
                Introduction
              </li>
              <li className="py-2 pl-3 text-lg  font-normal border-l-4 text-gray-400 cursor-not-allowed">
                Patient
              </li>
              <li className="py-2 pl-3 text-lg  font-normal border-l-4 text-gray-400 cursor-not-allowed">
                Questions
              </li>
              <li className="py-2 pl-3 text-lg  font-normal border-l-4 text-gray-400 cursor-not-allowed">
                Results
              </li>
            </ul>
          </div>
          <div className="flex flex-col w-3/4  justify-between shadow-2xl bg-white">
            <div className="flex w-full  p-10 justify-between">
              <div className=" w-1/2">
                <h1 className=" text-2xl  font-semibold leading-normal text-blue-1 pb-6 ">
                  Check your Health
                </h1>
                <p className=" text-lg font-normal text-justify text-blue-1 pb-4">
                  Welcome to <b>Heart Disease </b> symptom assessment, your
                  personal disease prediction website. The information you give
                  is safe and won’t be shared
                </p>
                <p className=" text-lg font-normal text-justify text-blue-1 ">
                  <b>Note :</b> The assessment results is a predection of 10
                  year risk of coronary heart disease CHD
                </p>
              </div>
              <div className="flex w-2/5   ">
                <img
                  class="mx-auto  "
                  src={HeartDiseasePredictionPng}
                  alt="Your Company"
                />
              </div>
            </div>
            <div className="flex justify-end w-full items-center px-10 pb-8 ">
              
              <Link
                to="1"
                class="border-2  rounded-md py-2 px-5 text-lg font-semibold bg-green-600 text-white hover:bg-green-700 "
              >
                Next
              </Link> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeartDiseasePredictionPg1;
