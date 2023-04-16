import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { useSelector } from "react-redux";
import TabDoctors from "../../Components/Tableau/TabDoctors";

function DoctorsAdminPage() {
  const auth = useSelector((state) => state.auth);
  return (
    <div className=" w-full bg-white">
      <div className="w-full bg-cover bg-center bg-homePage   bg-blue-1">
        <NavBar />
        <div className="flex justify-center w-full">
        <div className="flex pb-10 w-full md:p-20 bg-blue-50 ">
          <TabDoctors role={"admin"}/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorsAdminPage;
