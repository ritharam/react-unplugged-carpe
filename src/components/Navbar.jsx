import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

const navStyle = "text-black text-2xl font-bold";
const fontStyle =
  "font-normal leading-[35.6px] text-[50px] md:text-[30px] font-['Madeia']";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#FFFFFFB2] backdrop-blur-lg fixed top-0 w-full border-b-4 border-black">
        <div className="max-w-screen flex flex-col md:flex-row flex-wrap items-center justify-between mx-auto">
          <div className="flex justify-between w-full md:w-1/4 p-2">
            <Link to="/">
              <img
                className="h-[50px] md:h-[70px] mr-3"
                src="/assets/images/carpelogo.svg"
                alt="Logo"
              />
            </Link>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="px-3 me-3 md:hidden bg-[#C1E20D] border-[3px] border-black rounded-md"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <div className={navStyle}>&times;</div>
              ) : (
                <div className={navStyle}>&#9776;</div>
              )}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow md:flex-none items-start flex md:h-auto overflow-hidden pr-2 " +
              (navbarOpen ? "h-screen" : "h-0")
            }
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col justify-start text-center gap-11 md:gap-8 md:flex-row w-screen md:w-full">
              <li className="md:pt-2">
                <Link to={"/"} className={fontStyle}>
                  Home
                </Link>
              </li>
              <li className="md:pt-2">
                <a href="/#about" className={fontStyle}>
                  About
                </a>
              </li>
              <li className="md:pt-2">
                <Link to={"/events"} className={fontStyle}>
                  Events
                </Link>
              </li>
              <li className="md:pt-2">
                {" "}
                <a href="/#contact" className={fontStyle}>
                  Contact
                </a>
              </li>
              <li className="md:bg-[#C1E20D] md:px-4 py-1 md:border-[3px] border-[#000000] rounded-[8px] me-6 md:me-0">
                <Link to={"/register"} className={fontStyle}>
                  Events
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
