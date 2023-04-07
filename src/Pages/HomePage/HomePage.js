import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../Components/Button/Button";
import NavBar from "../../Components/NavBar/NavBar";
import HeartDiseasePredictionPng from "../../Assets/HeartDiseasePrediction.png";
import DiabetesPredictionPng from "../../Assets/DiabetesPrediction.png";
import doctorPng from "../../Assets/doctor.png";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

function HomePage() {
  const auth = useSelector((state) => state.auth);
  const ref = useRef();
  const goToExplore = () => {
    ref.current.scrollIntoView({
      top: 0,
      behavior: "smooth",
    });
  };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Listen to the scroll event and update the state accordingly
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="h-full w-auto bg-white">
      <div className=" bg-cover bg-center bg-homePage h-screen  bg-blue-1">
      {isVisible && (
        <button
        className="fixed bottom-5 right-5 bg-blue-1 text-white py-3 px-3 rounded-full shadow-lg hover:-translate-y-2 transition duration-300 ease-in-out"
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
      )}
        <NavBar />
        <div className=" w-2/5 mx-36 my-20">
          <h1 className=" text-7xl  font-normal leading-normal text-white pb-6 ">
            Disease Prediction Website
          </h1>
          <p className=" text-lg font-normal text-justify text-white ">
            Welcome to <b>DiseasDetetctive</b>, your personal disease prediction
            website.
            <b> DiseasDetetctive</b> uses advanced predictive algorithms to
            predict your likelihood of having a specific disease or condition.
          </p>
          {!auth.token ? (
            <div className="flex w-full justify-between py-10 pr-10">
              <Link
                to={"/signup"}
                className="flex justify-center bg-green-1 rounded-full w-2/5 py-5 text-2xl font-bold text-blue-1 hover:ring-2 hover:text-blue-50 ring-blue-50"
              >
                Register
              </Link>
              <Button
                name={"Explore"}
                onClick={goToExplore}
                className="rounded-full w-2/5 py-5 text-2xl font-bold text-white border-2 hover:ring-2 hover:text-blue-50 ring-blue-50 "
              />
            </div>
          ) : (
            <div className="flex w-full justify-between py-10 pr-10">
              <Button
                name={"Explore"}
                onClick={goToExplore}
                className="bg-green-1 rounded-full w-2/5 py-5 text-2xl font-bold text-blue-1 hover:ring-2 hover:text-blue-50 ring-blue-50 "
              />
            </div>
          )}
        </div>
      </div>
      <div className=" h-screen flex bg-white" ref={ref}>
        <div className="justify-center d w-full mx-48 my-6">
          <h1 className="flex text-6xl justify-center font-normal leading-normal text-blue-1  ">
            Explore our Services
          </h1>
          <Link className="flex w-full  justify-between py-10  "
          to="/HeartDiseasePrediction">
            <div className="w-1/4">
              <div className="w-full  ">
                <img
                  class="mx-auto w-full "
                  src={HeartDiseasePredictionPng}
                  alt="Your Company"
                />
              </div>
              <h4 className=" text-2xl  font-semibold pt-5 text-blue-1">
                Heart Disease Prediction
              </h4>
              <p class="text-base py-3 text-gray-500 text-justify underline-offset-8">
                Medical Data Required: Age, Sex, Chest Pain, Rest Blood
                Pressure, Cholestrol, Fasting,Blood Sugar, Rest ECG ...
              </p>
              <Link
                to="/HeartDiseasePrediction"
                className="py-2 text-2xl underline underline-offset-8 font-bold "
              >
                Explore page <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <Link className="w-1/4">
              <div className="w-full ">
                <img
                  class="mx-auto w-full "
                  src={DiabetesPredictionPng}
                  alt="Your Company"
                />
              </div>
              <h4 className=" text-2xl  font-semibold pt-5 text-blue-1">
                Diabetes Prediction
              </h4>
              <p class="text-base text-justify py-3 text-gray-500 ">
                Medical Data Required: Pregnancies, Glucose, Blood Pressure,
                Skin Thickness, Insulin, BMI, DPF, Age...
              </p>
              <Link
                to=""
                className="py-2 text-2xl underline underline-offset-8 font-bold "
              >
                Explore page <span aria-hidden="true">&rarr;</span>
              </Link>
            </Link>
            <div className="flex justify-center items-center w-1/6  ">
              <Link
                to=""
                className="py-2 text-2xl underline underline-offset-8 font-bold "
              >
                Explore More <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </Link>
        </div>
      </div>
      <div className=" h-screen flex bg-white">
        <div className=" flex justify-center  w-full mx-48 my-6">
          <div className="justify-center w-1/2  my-6">
            <img class="mx-auto  " src={doctorPng} alt="Your Company" />
          </div>
          <div className="justify-center w-1/2 pl-20 py-10">
            <p className=" text-4xl text-justify font-normal leading-normal pb-10 text-blue-1">
              You can get in touch with our top physicians to find out more
              about your situation.
            </p>
            <div className="flex items-center ">
              <div class=" h-11 w-11 items-center justify-center rounded-full bg-blue-1 ">
                <svg
                  class="text-white "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3
                class="text-xl font-semibold leading-6 text-gray-900 px-5"
                id="modal-title"
              >
                We connect our customers with the best.
              </h3>
            </div>
            <div className="flex items-center py-5">
              <div class=" h-11 w-11 items-center justify-center rounded-full bg-blue-1 ">
                <svg
                  class="text-white "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3
                class="text-xl font-semibold leading-6 text-gray-900 px-5"
                id="modal-title"
              >
                Advisor success customer launch party.
              </h3>
            </div>
            <div className="flex items-center pb-10">
              <div class=" h-11 w-11 items-center justify-center rounded-full bg-blue-1 ">
                <svg
                  class="text-white "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3
                class="text-xl font-semibold leading-6 text-gray-900 px-5"
                id="modal-title"
              >
                Business-to-consumer long tail.
              </h3>
            </div>
            <Link
              to={""}
              className="flex justify-center bg-blue-1 rounded-full w-2/5 py-5 text-2xl font-bold text-white hover:ring-2 hover:borde-white"
            >
              Start Now
            </Link>
          </div>
        </div>
      </div>
      {!auth.token && <Footer />}
    </div>
  );
}

export default HomePage;
