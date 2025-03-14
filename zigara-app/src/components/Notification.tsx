import React from "react";
import ZigLogo from "../assets/Logo (1).png";
import ZigText from "../assets/Vector (1).png";
import DashImage from "../assets/Icon - Dashboard.png";
import DeliveryImage from "../assets/Group 237566.png";
import User from "../assets/user 1 (1).png";
import Logout from "../assets/Icon - Logout.png";
import SearchBar from "../components/SearhBar"; // Corrected typo in import
import { Bell } from "lucide-react";
import Girl from "../assets/81.png";
import Vector from "../assets/Vector (5).png";
import { NotificationData } from "../components/data/NotificationData"; // Ensure the path is correct

interface NotificationItem {
  id: number;
  image: string;
  name: string;
  statement: string;
  hour: string;
}

const Notification: React.FC = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex gap-8">
        {/* Sidebar */}
        <div className="w-64 bg-white p-6 rounded-lg shadow-md">
          <div className="flex gap-4 items-center">
            <img src={ZigLogo} alt="Zig Logo" className="w-12 h-12" />
            <img src={ZigText} alt="Zig Text" className="w-12 h-12" />
          </div>

          <div className="mt-10 space-y-6 ">
            <div className="flex items-center gap-4 p-3 rounded-lg  bg-[#D71F20]">
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
          <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md">
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

          {/* Notifications Section */}
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold">Notifications</h1>
              <p className="text-blue-600 underline cursor-pointer">Mark all as read</p>
            </div>

            {/* Notification Filters */}
            <div className="flex gap-6 mt-6">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg">
                All <span className="bg-white text-gray-900 px-2 py-1 rounded-full text-sm">8</span>
              </button>
              <p className="text-gray-600 hover:underline cursor-pointer">Delivered 6</p>
              <p className="text-gray-600 hover:underline cursor-pointer">Archive</p>
            </div>

            {/* Notification List */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              {NotificationData.map((notification: NotificationItem, index: number) => (
                <div key={notification.id} className="flex flex-col gap-4 p-4 hover:bg-gray-50">
                  <div className="flex items-center gap-4">
                    <img
                      src={notification.image}
                      alt={notification.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-800">
                        {notification.name}
                      </p>
                      <p className="text-sm text-gray-600">{notification.statement}</p>
                      <p className="text-xs text-gray-500">{notification.hour}</p>
                    </div>
                  </div>
                  {/* Accept and Decline buttons for the last three items */}
                  {index >= NotificationData.length - 3 && (
                    <div className="flex gap-5 pl-14"> {/* Added pl-14 to align with the image */}
                      <button className="px-4 py-2 bg-black text-white rounded-lg">
                        Accept
                      </button>
                      <button className="px-4 py-2 bg-white text-black border border-gray-300 rounded-lg">
                        Decline
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;