import React from "react";
import ZigLogo from "../assets/Logo (1).png"; 
import ZigText from "../assets/Vector (1).png";
import DashImage from "../assets/Icon - Dashboard.png";
import DeliveryImage from "../assets/Group 237566.png";
import User from "../assets/user 1 (1).png";
import Logout from "../assets/Icon - Logout.png";
import SearchBar from "./SearhBar"
import { Bell } from "lucide-react";
import Girl from "../assets/81.png";
import Vector from "../assets/Vector (5).png";
import picked from "../assets/Frame 56901.png"
import pending from "../assets/Frame 56902.png"
import delivered from "../assets/Frame 56903.png"
import Graph from "../assets/Overview (1).png"
import Active from "../assets/Group 237574 (1).png"




const DashBoard: React.FC = () => {
  return (
    <div className="p-10">
     <div className="flex gap-40">
     <div>
     <div className="flex gap-4">
        <img src={ZigLogo} alt="Zig Logo" className="w-18 h-37.7" />
        <img src={ZigText} alt="Zig Text" className="w-18 h-37.7" />
      </div>
        
      <div className="bg-red-500 flex rounded w-70 h-10 gap-4 mt-20">
        <img src={DashImage} alt="Dash" className="w-10 h-37.7"/>
        <h1 className="">Dashboard</h1>
      </div>

      <div className="flex mt-20 gap-4">
        <img src={DeliveryImage} alt="Delivery" className="w-10 h-10"/>
        <h1>Delivery order</h1>
      </div>

      <div className="flex mt-20 gap-4">
        <img src={User} alt="user" className="w-10 h-10"/>
        <h1>Employees</h1>
      </div>


      <div className="flex mt-20 gap-4">
        <img src={Logout} alt="Logout" className="w-10 h-10"/>
        <h1>Logout</h1>
      </div>
     </div>

        <div className="">
      {/* Right Section */}
      <div className="flex flex-col gap-5 w-full">
          <div className="flex gap-20 items-center">
            {/* Search Bar */}
            <SearchBar />

            {/* Notification Bell */}
            <Bell size={30} />

            {/* Profile Section */}
            <div className="flex flex-col md:flex-row items-center gap-5">
              {/* Profile Image */}
              <img src={Girl} className="w-16 h-16 rounded-full" alt="Profile" />

              {/* Name & Email (Stacked on Small Screens) */}
              <div className="flex flex-col text-center md:text-left">
                <h1 className="text-lg font-semibold">Adanna Ogude</h1>
                <h3 className="text-sm text-gray-600">adannaogude@gmail.com</h3>
              </div>
            </div>
            <img src={Vector} className=" h-5 mt-4" alt="Vector" />
          </div>
        </div>
        <div className="flex gap-10">
        <div className="mt-20 bg-white p-5 rounded-lg shadow-md w-70">
       <img src={picked} alt="Delivery Icon" />
       <h3 className="text-lg font-semibold">Pickup packages</h3>
       <div className="flex gap-20">
       <p className="text-xl font-bold">40</p>
      <p className="text-green-500 font-semibold">+21%</p>
      </div>
      </div>

      <div className="mt-20 bg-white p-5 rounded-lg shadow-md w-70">
  <img src={pending} alt="Delivery Icon" />
  <h3 className="text-lg font-semibold">Pending packages</h3>
  <div className="flex gap-20">
    <p className="text-xl font-bold">10</p>
    <p className="text-green-500 font-semibold">-0.6%</p>
  </div>
</div>

<div className="mt-20 bg-white p-5 rounded-lg shadow-md w-70">
  <img src={delivered} alt="Delivery Icon" />
  <h3 className="text-lg font-semibold">Delivered packages</h3>
  <div className="flex gap-20">
    <p className="text-xl font-bold">30</p>
    <p className="text-green-500 font-semibold">+33%</p>
  </div>
</div>
        </div>

        <div className="flex gap-10">
        <img src={Graph} alt="Graph" className="w-[700px] block" />

    <div className="flex gap-5 bg-white h-[186px] p-5 shadow-md items-center mt-15">
  <img src={Active} alt="" className="w-10 h-10" />
  <p>Active Riders</p>
</div>


    </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
