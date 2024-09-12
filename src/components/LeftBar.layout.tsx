import React from "react";
import { Link, useLocation } from "react-router-dom";
import ColumnContainer from "./Containers/Column.Container";
import RowContainer from "./Containers/Row.Container";
import Text from "./Text";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

interface LeftBarProps {
  isOpen: boolean;
  toggleLeftBar: () => void;
}

// Sidebar Component
const LeftBar: React.FC<LeftBarProps> = ({ isOpen, toggleLeftBar }) => {
  const location = useLocation();

  return (
    <>
      {/* Hamburger icon for mobile devices */}
      <div className="md:hidden">
        <button
          onClick={toggleLeftBar}
          className="fixed top-5 left-5 z-50 text-white bg-gray-800 p-3 rounded-md"
        >
          {isOpen ? <IoClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-64`}
        style={{ width: "250px" }}
      >
        <ColumnContainer
          gap="8"
          className="mt-[100px] h-48  justify-around mx-2"
        >
          <Link to="/" className="">
            <RowContainer
              className={`w-full h-14 rounded-md justify-center items-center text-white font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300 bg-${
                location.pathname === "/" ? "blue-500" : "gray-500"
              }`}
            >
              <Text type="label">Contacts</Text>
            </RowContainer>
          </Link>
          <Link to="/dashboard" className="text-blue-500">
            <RowContainer
              className={`w-full h-14 rounded-md justify-center items-center text-white font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300 bg-${
                location.pathname === "/dashboard" ? "blue-500" : "gray-500"
              }`}
            >
              <Text type="label">Dashboard</Text>
            </RowContainer>
          </Link>
        </ColumnContainer>
      </div>
    </>
  );
};

export default LeftBar;
