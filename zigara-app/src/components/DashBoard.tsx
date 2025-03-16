import React from "react";
import ZigLogo from "../assets/Logo (1).png";
import ZigText from "../assets/Vector (1).png";
import DashImage from "../assets/Icon - Dashboard.png";
import DeliveryImage from "../assets/Group 237566.png";
import User from "../assets/user 1 (1).png";
import Logout from "../assets/Icon - Logout.png";
import SearchBar from "./SearhBar";
import { Bell } from "lucide-react";
import Girl from "../assets/81.png";
import Vector from "../assets/Vector (5).png";
import picked from "../assets/Frame 56901.png";
import pending from "../assets/Frame 56902.png";
import delivered from "../assets/Frame 56903.png";
import Active from "../assets/Group 237574 (1).png";
import orders from "./data/Orders";
import { BarChart } from "../components/BarChart";

const DashBoard: React.FC = () => {
  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-white p-4 md:p-6 rounded-lg shadow-md">
          <div className="flex gap-4 items-center">
            <img src={ZigLogo} alt="Zig Logo" className="w-8 h-8 md:w-12 md:h-12" />
            <img src={ZigText} alt="Zig Text" className="w-8 h-8 md:w-12 md:h-12" />
          </div>

          <div className="mt-6 md:mt-10 space-y-4 md:space-y-6">
            <div className="flex items-center gap-4 p-2 md:p-3 bg-[#D71F20] rounded-lg">
              <img src={DashImage} alt="Dashboard" className="w-5 h-5 md:w-6 md:h-6" />
              <h1 className="text-md md:text-lg font-semibold text-[#FFFFFF]">Dashboard</h1>
            </div>

            <div className="flex items-center gap-4 p-2 md:p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
              <img src={DeliveryImage} alt="Delivery" className="w-5 h-5 md:w-6 md:h-6" />
              <h1 className="text-md md:text-lg text-gray-700">Delivery Orders</h1>
            </div>

            <div className="flex items-center gap-4 p-2 md:p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
              <img src={User} alt="User" className="w-5 h-5 md:w-6 md:h-6" />
              <h1 className="text-md md:text-lg text-gray-700">Employees</h1>
            </div>

            <div className="flex items-center gap-4 p-2 md:p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
              <img src={Logout} alt="Logout" className="w-5 h-5 md:w-6 md:h-6" />
              <h1 className="text-md md:text-lg text-gray-700">Logout</h1>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-6 rounded-lg">
            <SearchBar />
            <div className="flex items-center gap-4 md:gap-6 mt-4 md:mt-0">
              <Bell size={24} className="text-gray-600 cursor-pointer" />
              <div className="flex items-center gap-2 md:gap-4">
                <img src={Girl} className="w-8 h-8 md:w-10 md:h-10 rounded-full" alt="Profile" />
                <div className="flex flex-col">
                  <h1 className="text-md md:text-lg font-semibold">Adanna Ogude</h1>
                  <h3 className="text-sm text-gray-500">adannaogude@gmail.com</h3>
                </div>
              </div>
              <img src={Vector} className="h-4 cursor-pointer" alt="Dropdown" />
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <img src={picked} alt="Picked" className="w-8 h-8 md:w-10 md:h-10" />
              <h3 className="text-md md:text-lg font-semibold mt-2 md:mt-4">Pickup Packages</h3>
              <div className="flex justify-between items-center mt-2">
                <p className="text-xl md:text-2xl font-bold">40</p>
                <p className="text-green-500 font-semibold">+21%</p>
              </div>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <img src={pending} alt="Pending" className="w-8 h-8 md:w-10 md:h-10" />
              <h3 className="text-md md:text-lg font-semibold mt-2 md:mt-4">Pending Packages</h3>
              <div className="flex justify-between items-center mt-2">
                <p className="text-xl md:text-2xl font-bold">10</p>
                <p className="text-red-500 font-semibold">-0.6%</p>
              </div>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <img src={delivered} alt="Delivered" className="w-8 h-8 md:w-10 md:h-10" />
              <h3 className="text-md md:text-lg font-semibold mt-2 md:mt-4">Delivered Packages</h3>
              <div className="flex justify-between items-center mt-2">
                <p className="text-xl md:text-2xl font-bold">30</p>
                <p className="text-green-500 font-semibold">+33%</p>
              </div>
            </div>
          </div>

          {/* Graph & Active Riders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center">
                <p className="text-md md:text-lg font-semibold">Earnings</p>
                <p className="text-sm md:text-md text-gray-500">Monthly</p>
              </div>
              <BarChart />
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md flex items-center justify-center">
              <div className="flex items-center gap-2 md:gap-4">
                <img src={Active} alt="Active Riders" className="w-8 h-8 md:w-12 md:h-12" />
                <div>
                  <p className="text-md md:text-lg font-semibold">Active Riders</p>
                </div>
              </div>
            </div>
          </div>

          {/* Orders Table */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mt-6 md:mt-8">
            <p className="text-md md:text-lg font-semibold mb-4 md:mb-6">New Delivery Requests</p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#D71F20] text-white uppercase text-sm">
                  <tr>
                    <th className="py-2 px-3 md:py-3 md:px-4 text-left">Date</th>
                    <th className="py-2 px-3 md:py-3 md:px-4 text-left">Client</th>
                    <th className="py-2 px-3 md:py-3 md:px-4 text-left">Owner</th>
                    <th className="py-2 px-3 md:py-3 md:px-4 text-left">Package</th>
                    <th className="py-2 px-3 md:py-3 md:px-4 text-left">Receiver</th>
                    <th className="py-2 px-3 md:py-3 md:px-4 text-left">Drop-Off</th>
                    <th className="py-2 px-3 md:py-3 md:px-4 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.date} className="border-b text-gray-600 hover:bg-gray-50">
                      <td className="py-2 px-3 md:py-3 md:px-4">{order.date}</td>
                      <td className="py-2 px-3 md:py-3 md:px-4">{order.client}</td>
                      <td className="py-2 px-3 md:py-3 md:px-4">{order.owner}</td>
                      <td className="py-2 px-3 md:py-3 md:px-4">{order.package}</td>
                      <td className="py-2 px-3 md:py-3 md:px-4">{order.receiver}</td>
                      <td className="py-2 px-3 md:py-3 md:px-4">{order.dropOff}</td>
                      <td className={`py-2 px-3 md:py-3 md:px-4 font-semibold ${order.status === "delivered" ? "text-green-600" : "text-red-500"}`}>
                        {order.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;