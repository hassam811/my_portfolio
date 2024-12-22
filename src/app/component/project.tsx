import Image from "next/image"
import React from "react"

const Project = () => {
    return (
    
        <div className="project">
            <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My Project
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        
      </p>
    </div>
    <div className="flex flex-wrap -m-14">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assests/Facebook 1.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Karachi Studio
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              MountianS
            </h1>
            <p className="leading-relaxed">
            This Photo was taken in Karachi Studio
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assests/Facebook 4.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Islamabad Studio
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Devil Prince Soul
            </h1>
            <p className="leading-relaxed">
              This Photo was taken in Islamabad studio
              
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assests/facebook 7.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
             Islamabad Studio
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Soul Needs Music
            </h1>
            <p className="leading-relaxed">
            This Photo was taken in Islamabad studio
            </p>
          </div>
        </div>
      </div>
    
    </div>
  </div>
</section>

        </div>

    )
}

export default Project