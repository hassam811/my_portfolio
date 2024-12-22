import Image from "next/image";
import Link from "next/link";
import React from "react"
import { BsInstagram } from "react-icons/bs";
import { LuLinkedin } from "react-icons/lu";



const Footer = () => {
    return (
        <div className="bg-gray-200">
          <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            
          <Image
           src={require("../../../public/assests/logo 3.png")}
         alt="HX PHOTOGRAPHY" 
         width={100} 
         height={100}
        className="w-[30px]"/>


            <span className="ml-3 text-xl">HX PHOTOGRAPHY</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-red-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 HX PHOTOGRAPHY
            
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link 
            target="blank"
            href={"https://www.instagram.com/hasxam_awanworld/profilecard/?igsh=MWd3Mm9yZ2hrNXVlZQ=="} className="text-gray-500">
            <BsInstagram className="text-2xl hover:text-[red]" />
            </Link>
    
          </span>
        </div>
      </footer>
      </div>

    )
}

export default Footer