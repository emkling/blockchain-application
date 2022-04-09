import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import {RiMoneyDollarCircleLine} from 'react-icons/ri';
import {AiOutlineDashboard} from 'react-icons/ai'

import logo from "../assets/Fox.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}> {title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex justify-between items-center h-[45px] sm:h-[60px]">
      <div className=" flex-initial pl-12 justify-center items-center">
        <img src={logo} alt="logo" className="w-[170px] -mt-[25px] sm:w-[250px] absolute sm:h-[100px] sm:-mt-[30px] cursor-pointer" />
      </div>
      <ul className="text-white w-full lg:flex hidden list-none flex-row mt-[40px] justify-end gap-12 pr-12 items-center flex-initial">
        <a className="mx-4 cursor-pointer hover:text-[#c85d5d] text-gradient3"> <RiMoneyDollarCircleLine className="inline-flex -mt-[2px]"/> Transactions </a>
        <a className="mx-4 cursor-pointer  hover:text-[#c85d5d] bg-[#5d89ee]  text-gradient3"> <AiOutlineDashboard  className="inline-flex -mt-[2px]"/> Dashboard </a>
        <li className=" hover:bg-[#2546bd] border-2 border-[#5d89ee] py-2 px-7 mx-4 rounded-full cursor-pointer">
          <a className=" text-gradient3"> Connect Wallet</a>
          
        </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white lg:hidden cursor-pointer mt-[20px] sm:mt-[10px] mr-12" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white lg:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl lg:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Transactions","Dashboard", "Login"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;