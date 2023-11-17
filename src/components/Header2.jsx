import Logo from "../assets/logo.svg";
import Logo2 from "../assets/logo2.svg";
import React from "react";
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'


export default function Header2() {
    return (
        <>
        <div className="flex flex-row items-center justify-evenly">

        <img
          src={Logo}
          alt="Logo"
          className="relative w-[4.38rem] h-[4.63rem] object-cover"
        />
        <img
          src={Logo2}
          alt="Logo2"
          className="relative w-[8.38rem] h-[2.81rem] object-cover"
        />


<div className=" flex ">
        <p className="h-auto w-fit  cursor-pointer">About</p>
        <p className="h-auto  w-fit cursor-pointer">Gallery</p>
        <p className="h-auto  w-fit cursor-pointer">Amenities</p>
        <p className="h-auto  w-fit cursor-pointer">Floor Plans</p>
        <p className="h-auto  w-fit cursor-pointer">Virtual Tours</p>
        <p className="h-auto  w-fit cursor-pointer">Our Partners</p>


      
      </div>
        <div className=" cursor-pointer h-16 max-w-[13rem] mx-4 w-[2.25] my-4 rounded-[46px] bg-yellow-600  overflow-hidden flex flex-row items-center justify-center py-[0.56rem] px-[0.94rem] box-border">
          <p className="w-[7rem] h-[1.16rem] text-center text-white">Enquire Now</p>
        </div>
        </div>
        </>
    );
}
