import React from "react";
import { Routes, Route,} from "react-router-dom"; // Import routing components
import DashBoard from './components/DashBoard';
import Admin from './components/Admin';
import NewOrder from "./components/NewOrder";
import Notification from "./components/Notification";
import NavBar from "./components/NavBar"


// Define the App component as a functional component
const App: React.FC = () => {
  return (
    <>
     <NavBar />
        <Routes>
          <Route path="/" element={<DashBoard />}>
          <Route path="/NewOrder" element={<NewOrder />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/Notification" element={<Notification />} />
          </Route>
        </Routes>
    </>
  );
};

export default App;