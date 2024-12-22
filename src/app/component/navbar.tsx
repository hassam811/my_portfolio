import Image from "next/image"
import Link from "next/link"
import React from "react"

const Navbar = () => {
    return (
        <div className="bg-white z-50 sticky top-0">
            <header className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
<Image src={require("../../../public/assests/logo 3.png")}
 alt="HX PHOTOGRAPHY" 
 width={100} 
 height={100}
 className="w-[50px]"/>
  
  
      <span className="ml-3 text-xl">HX_PHOTOGRAPHY</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-white">Home</Link>
      <Link href={'#about'} className="mr-5 hover:text-white">About</Link>
      <Link href={"#project"} className="mr-5 hover:text-white">Project</Link>
      <Link href={"#contact"} className="mr-5 hover:text-white">Contact</Link>
    </nav>
    
  </div>
</header>
        </div>
    )
}

export default Navbar