import React from "react";
import ZigLogo from "../assets/Logo (1).png"; 
import ZigText from "../assets/Vector (1).png";
import DashImage from "../assets/Icon - Dashboard.png"
import DeliveryImage from "../assets/Group 237566.png"
import User from "../assets/user 1 (1).png"
import Logout from "../assets/Icon - Logout.png"


const DashBoard: React.FC = () => {
  return (
    <div className="p-10">
     <div className="flex">
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

     <div></div>
     </div>
    </div>
  );
};

export default DashBoard;
