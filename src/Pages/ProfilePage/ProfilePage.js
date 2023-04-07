import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import userPng from "../../Assets/user.png";
import { useSelector } from "react-redux";
import { getAllServey } from "../../Api/Api";
import DropDown from "../../Components/DropDown/DropDown";
function ProfilePage() {
  const auth = useSelector((state) => state.auth);
  const [Serveys, setServeys] = useState([]);
  useEffect(() => {
    getAllServeys();
  }, []);
  const getAllServeys = async () => {
    const response = await getAllServey(auth.user._id);
    if (response.status === 200) {
      setServeys(response.data);
    }
  };
  console.log("Serveys", Serveys);
  return (
    <div className="bg-cover bg-center bg-homePage  w-full bg-blue-1">
      <NavBar />
      <div className="flex flex-col justify-center w-full px-32  bg-blue-50">
        <p className="text-3xl text-start pt-10 text-blue-1 ">Profile :</p>
        <div className="flex justify-between p-6  ">
          <div className="  w-96 h-72 shadow-2xl rounded-xl bg-white">
            <div className="flex w-full justify-center py-6   ">
              <img className="w-1/3  " src={userPng} alt="user" />
            </div>
            <div className="flex w-full justify-center    ">
              <p className="text-2xl font-semibold  text-blue-1 ">
                {auth.user.first_name} {auth.user.last_name}
              </p>
            </div>
            <div className="flex w-full justify-center  pt-6  ">
              <p className="text-lg font-normal  text-blue-1 ">
                Email: {auth.user.email}
              </p>
            </div>
          </div>
          <div className="flex flex-col w-2/3  justify-between rounded-xl shadow-2xl bg-white">
            <div className="w-full  p-10 justify-between">
              <h1 className=" text-2xl  font-semibold leading-normal text-blue-1 pb-6 ">
              Predection History 
              </h1>
              {Serveys.map((el, index) => (
                <div className="w-full pb-6" key={index}>
                  <DropDown servey={el}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
