import React from "react";
import ZigLogo from "../assets/Logo (1).png";
import ZigText from "../assets/Vector (1).png";
import DashImage from "../assets/Icon - Dashboard.png";
import DeliveryImage from "../assets/Group 237566.png";
import User from "../assets/user 1 (1).png";
import Logout from "../assets/Icon - Logout.png";
import orders from "./data/Orders";
import Girl from "../assets/81.png";
import Vector from "../assets/Vector (5).png";
import SearchRider from "../components/SearchRider.tsx"

const NewOrder: React.FC = () => {
  return (
    <div className="p-10">
      <div className="flex gap-40">
        {/* Sidebar */}
        <div className="">
          <div className="flex gap-4">
            <img src={ZigLogo} alt="Zig Logo" className="w-18 h-37.7" />
            <img src={ZigText} alt="Zig Text" className="w-18 h-37.7" />
          </div>

          <div className="bg-red-500 flex rounded w-70 h-10 gap-4 mt-20">
            <img src={DashImage} alt="Dash" className="w-10 h-37.7" />
            <h1>Dashboard</h1>
          </div>

          <div className="flex mt-20 gap-4">
            <img src={DeliveryImage} alt="Delivery" className="w-10 h-10" />
            <h1>Delivery order</h1>
          </div>

          <div className="flex mt-20 gap-4">
            <img src={User} alt="user" className="w-10 h-10" />
            <h1>Employees</h1>
          </div>

          <div className="flex mt-20 gap-4">
            <img src={Logout} alt="Logout" className="w-10 h-10" />
            <h1>Logout</h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full">
          {/* Header */}
          <div className=" flex gap-40 items-center">
            <div>
            <p className="text-3xl">10 Riders</p>
            <p>Here is how the Riders are Doing</p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-5">
              <img src={Girl} className="w-16 h-16 rounded-full" alt="Profile" />
              <div className="flex flex-col text-center md:text-left">
                <h1 className="text-lg font-semibold">Adanna Ogude</h1>
                <h3 className="text-sm text-gray-600">adannaogude@gmail.com</h3>
              </div>
            </div>
            <img src={Vector} className="h-5 mt-4" alt="Vector" />
          </div>

          {/* Orders Table */}
          <div className="p-5 mt-20 rounded-lg shadow w-full">

            <div className="flex gap-50 mb-10">
              <div className="flex gap-2">
                <button>Active riders</button>
               <button className="border-2 w-16 rounded">filter + </button>
              </div>
              <SearchRider />
              <button className="border-2 w-28 rounded">Add rider +</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full bg-white shadow-lg rounded-lg mt-3">
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.date} className="border-b text-gray-600">
                      <td className="py-3 px-4">{order.date}</td>
                      <td className="py-3 px-4">{order.client}</td>
                      <td className="py-3 px-4">{order.owner}</td>
                      <td className="py-3 px-4">{order.package}</td>
                      <td className="py-3 px-4">{order.receiver}</td>
                      <td className="py-3 px-4">{order.dropOff}</td>
                      <td
                        className={`py-3 px-4 font-semibold ${
                          order.status === "delivered"
                            ? "text-green-600"
                            : "text-red-500"
                        }`}
                      >
                        {order.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div> {/* Missing closing div for main content */}
      </div>
    </div>
  );
};

export default NewOrder;
