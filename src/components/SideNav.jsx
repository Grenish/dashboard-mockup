import React from "react";
import { butterLogo } from "../assets";
import {
  UilSearch,
  UilEstate,
  UilNewspaper,
  UilFileLandscapeAlt,
  UilUser,
  UilBell,
  UilSignout,
} from "@iconscout/react-unicons";

const SideNav = () => {
  const iconStyle =
    "sm:w-5 sm:h-5 w-7 h-7 text-gray-500 hover:text-gray-700 transition-colors duration-200";

  return (
    <header className="sm:h-screen h-auto sm:relative sm:w-auto w-full fixed bottom-0 sm:flex block bg-white z-40">
      <nav className="relative sm:h-screen h-auto sm:block flex">
        <div className="p-2 sm:flex hidden flex-col justify-center items-center">
          <img src={butterLogo} alt="logo" className="w-12 scale-x-[-1]" />
          <button className="mt-3 p-2">
            <UilSearch className={`${iconStyle}`} />
          </button>
        </div>

        <div className="p-2 sm:p-0 py-3 sm:py-0 flex sm:flex-col flex-row sm:justify-center justify-between w-full items-center sm:mt-10 mt-0">
          <button className="p-2 bg-indigo-600 rounded-lg shadow-md shadow-indigo-500">
            <UilEstate className="sm:w-5 sm:h-5 w-7 h-7 text-gray-200 hover:text-gray-300 transition-colors duration-200" />
          </button>
          <button className="p-2 sm:mt-5 mt-0">
            <UilNewspaper className={`${iconStyle} `} />
          </button>
          <button className="p-2 sm:mt-5 mt-0">
            <UilFileLandscapeAlt className={`${iconStyle}`} />
          </button>
          <button className="p-2 sm:mt-5 mt-0">
            <UilUser className={`${iconStyle}`} />
          </button>
          <button className="p-2 sm:mt-5 mt-0 block sm:hidden">
            <UilSearch className={`${iconStyle}`} />
          </button>
        </div>

        <div className="absolute  bottom-0 left-1.5 p-2 sm:flex hidden flex-col justify-center items-center ">
          {/*mt-60*/}
          <div className="">
            <Notif />
          </div>
          <button className="mt-3 p-2">
            <UilSignout className={`${iconStyle}`} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default SideNav;

const Notif = () => {
  const iconStyle =
    "sm:w-5 sm:h-5 w-7 h-7 text-gray-500 hover:text-gray-700 transition-colors duration-200";
  return (
    <button className="mt-3 p-2 relative group">
      <span className="absolute w-[8px] h-[8px] bg-indigo-300 group-hover:bg-indigo-600 rounded-full top-1 right-1 transition-colors duration-200"></span>
      <UilBell className={`${iconStyle}`} />
    </button>
  );
};
