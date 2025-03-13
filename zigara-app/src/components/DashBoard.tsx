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
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex gap-8">
        {/* Sidebar */}
        <div className="w-64 bg-white p-6 rounded-lg shadow-md">
          <div className="flex gap-4 items-center">
            <img src={ZigLogo} alt="Zig Logo" className="w-12 h-12" />
            <img src={ZigText} alt="Zig Text" className="w-12 h-12" />
          </div>

          <div className="mt-10 space-y-6">
            <div className="flex items-center gap-4 p-3 bg-[#D71F20] rounded-lg">
              <img src={DashImage} alt="Dashboard" className="w-6 h-6" />
              <h1 className="text-lg font-semibold text-[#FFFFFF]">Dashboard</h1>
            </div>

            <div className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
              <img src={DeliveryImage} alt="Delivery" className="w-6 h-6" />
              <h1 className="text-lg text-gray-700">Delivery Orders</h1>
            </div>

            <div className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
              <img src={User} alt="User" className="w-6 h-6" />
              <h1 className="text-lg text-gray-700">Employees</h1>
            </div>

            <div className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
              <img src={Logout} alt="Logout" className="w-6 h-6" />
              <h1 className="text-lg text-gray-700">Logout</h1>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex justify-between items-center p-6 rounded-lg ">
            <SearchBar />
            <div className="flex items-center gap-6">
              <Bell size={24} className="text-gray-600 cursor-pointer" />
              <div className="flex items-center gap-4">
                <img src={Girl} className="w-10 h-10 rounded-full" alt="Profile" />
                <div className="flex flex-col">
                  <h1 className="text-lg font-semibold">Adanna Ogude</h1>
                  <h3 className="text-sm text-gray-500">adannaogude@gmail.com</h3>
                </div>
              </div>
              <img src={Vector} className="h-4 cursor-pointer" alt="Dropdown" />
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src={picked} alt="Picked" className="w-10 h-10" />
              <h3 className="text-lg font-semibold mt-4">Pickup Packages</h3>
              <div className="flex justify-between items-center mt-2">
                <p className="text-2xl font-bold">40</p>
                <p className="text-green-500 font-semibold">+21%</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src={pending} alt="Pending" className="w-10 h-10" />
              <h3 className="text-lg font-semibold mt-4">Pending Packages</h3>
              <div className="flex justify-between items-center mt-2">
                <p className="text-2xl font-bold">10</p>
                <p className="text-red-500 font-semibold">-0.6%</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src={delivered} alt="Delivered" className="w-10 h-10" />
              <h3 className="text-lg font-semibold mt-4">Delivered Packages</h3>
              <div className="flex justify-between items-center mt-2">
                <p className="text-2xl font-bold">30</p>
                <p className="text-green-500 font-semibold">+33%</p>
              </div>
            </div>
          </div>

          {/* Graph & Active Riders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md ">
              <div className="flex justify-between items-center w-641">
                <p className="text-lg font-semibold">Earnings</p>
                <p className="text-gray-500">Monthly</p>
              </div>
              <BarChart />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center w-50 h-50">
              <div className="flex items-center gap-4 w-50">
                <img src={Active} alt="Active Riders" className="w-12 h-12" />
                <div>
                  <p className="text-lg font-semibold">Active Riders</p>
                </div>
              </div>
            </div>
          </div>

          {/* Orders Table */}
          <div className="bg-white p-6 rounded-lg shadow-md mt-8">
            <p className="text-lg font-semibold mb-6">New Delivery Requests</p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#D71F20] text-white uppercase text-sm">
                  <tr>
                    <th className="py-3 px-4 text-left">Date</th>
                    <th className="py-3 px-4 text-left">Client</th>
                    <th className="py-3 px-4 text-left">Owner</th>
                    <th className="py-3 px-4 text-left">Package</th>
                    <th className="py-3 px-4 text-left">Receiver</th>
                    <th className="py-3 px-4 text-left">Drop-Off</th>
                    <th className="py-3 px-4 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.date} className="border-b text-gray-600 hover:bg-gray-50">
                      <td className="py-3 px-4">{order.date}</td>
                      <td className="py-3 px-4">{order.client}</td>
                      <td className="py-3 px-4">{order.owner}</td>
                      <td className="py-3 px-4">{order.package}</td>
                      <td className="py-3 px-4">{order.receiver}</td>
                      <td className="py-3 px-4">{order.dropOff}</td>
                      <td className={`py-3 px-4 font-semibold ${order.status === "delivered" ? "text-green-600" : "text-red-500"}`}>
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