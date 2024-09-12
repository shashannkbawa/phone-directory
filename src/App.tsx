import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RowContainer from "./components/Containers/Row.Container";
import LeftBar from "./components/LeftBar.layout";
import ContactsPage from "./pages/Contacts";
import DashboardPage from "./pages/Dashboard";

function App() {
  const [isLeftBarOpen, setIsLeftBarOpen] = useState(false);

  // Toggle sidebar visibility for mobile devices
  const toggleLeftBar = () => {
    setIsLeftBarOpen(!isLeftBarOpen);
  };

  return (
    <Router>
      <RowContainer className="relative">
        {/* Toggle button for mobile view */}

        <div className=" md:hidden">
          <button
            onClick={toggleLeftBar}
            className="fixed top-5 left-5 z-50 text-white bg-gray-800 p-3 rounded-md"
          >
            {isLeftBarOpen ? <IoClose /> : <GiHamburgerMenu />}
          </button>
        </div>

        {/* LeftBar component */}
        <LeftBar isOpen={isLeftBarOpen} toggleLeftBar={toggleLeftBar} />

        <div className={`transition-all w-full duration-300 md:ml-[250px] p-4`}>
          <Routes>
            <Route path="/" element={<ContactsPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </div>
      </RowContainer>
    </Router>
  );
}

export default App;
