import React from "react";
import ZigLogo from "../assets/Logo (1).png";
import ZigText from "../assets/Vector (1).png";
import DashImage from "../assets/Icon - Dashboard.png";
import DeliveryImage from "../assets/Group 237566.png";
import User from "../assets/user 1 (1).png";
import Logout from "../assets/Icon - Logout.png";
import AdminData from "../components/data/AdminData.tsx"; // Ensure the path is correct
import Girl from "../assets/81.png";
import Vector from "../assets/Vector (5).png";
import SearchBar from "../components/SearhBar.tsx"; // Corrected typo in import
import { Trash2 } from "lucide-react"; // Import delete icon

interface AdminItem {
  name: string;
  contact: string;
  address: string;
  status: string;
}

const NewOrder: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 md:p-10 bg-gray-100 min-h-screen">
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
              <h1 className="text-sm md:text-lg font-semibold text-white">Dashboard</h1>
            </div>

            <div className="flex items-center gap-4 p-2 md:p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
              <img src={DeliveryImage} alt="Delivery" className="w-5 h-5 md:w-6 md:h-6" />
              <h1 className="text-sm md:text-lg text-gray-700">Delivery Orders</h1>
            </div>

            <div className="flex items-center gap-4 p-2 md:p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
              <img src={User} alt="User" className="w-5 h-5 md:w-6 md:h-6" />
              <h1 className="text-sm md:text-lg text-gray-700">Employees</h1>
            </div>

            <div className="flex items-center gap-4 p-2 md:p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
              <img src={Logout} alt="Logout" className="w-5 h-5 md:w-6 md:h-6" />
              <h1 className="text-sm md:text-lg text-gray-700">Logout</h1>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 md:p-6 rounded-lg shadow-md">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <SearchBar />
            </div>
            <div className="flex items-center gap-4">
              <img src={Girl} className="w-8 h-8 md:w-10 md:h-10 rounded-full" alt="Profile" />
              <div className="flex flex-col">
                <h1 className="text-sm md:text-lg font-semibold">Adanna Ogude</h1>
                <h3 className="text-xs md:text-sm text-gray-500">adannaogude@gmail.com</h3>
              </div>
              <img src={Vector} className="h-3 md:h-4 cursor-pointer" alt="Dropdown" />
            </div>
          </div>

          {/* Orders Table */}
          <div className="mt-6 md:mt-8 bg-white p-4 md:p-6 rounded-lg shadow-md">
            {/* Filters and Search Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-6">
              <div className="flex gap-2 md:gap-4 mb-4 md:mb-0">
                <button className="px-3 py-1 md:px-4 md:py-2 text-[#666666] rounded-lg">
                  Active Riders
                </button>
                <button className="px-3 py-1 md:px-4 md:py-2 bg-white text-[#666666] border border-gray-200 rounded-lg flex items-center gap-1 md:gap-2">
                  Filter <span className="text-sm md:text-lg">+</span>
                </button>
              </div>
              <div className="flex gap-2 md:gap-4">
                <button className="px-3 py-1 md:px-4 md:py-2 bg-white text-[#666666] border border-gray-200 rounded-lg flex items-center gap-1 md:gap-2">
                  Add Rider <span className="text-sm md:text-lg">+</span>
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100 text-gray-600">
                    <th className="py-2 px-3 md:py-3 md:px-4 text-left">Name</th>
                    <th className="py-2 px-3 md:py-3 md:px-4 text-left">Contact</th>
                    <th className="py-2 px-3 md:py-3 md:px-4 text-left">Address</th>
                    <th className="py-2 px-3 md:py-3 md:px-4 text-left">Status</th>
                    <th className="py-2 px-3 md:py-3 md:px-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {AdminData.map((admin: AdminItem, index: number) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-2 px-3 md:py-3 md:px-4">{admin.name}</td>
                      <td className="py-2 px-3 md:py-3 md:px-4">{admin.contact}</td>
                      <td className="py-2 px-3 md:py-3 md:px-4">{admin.address}</td>
                      <td
                        className={`py-2 px-3 md:py-3 md:px-4 font-semibold ${
                          admin.status === "active"
                            ? "text-green-600"
                            : "text-red-500"
                        }`}
                      >
                        {admin.status}
                      </td>
                      <td className="py-2 px-3 md:py-3 md:px-4">
                        <button className="text-gray-500 hover:text-red-700">
                          <Trash2 size={16} /> {/* Delete button with icon */}
                        </button>
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

export default NewOrder;