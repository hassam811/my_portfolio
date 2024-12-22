"use client"
import Image from "next/image"
import Link from "next/link";
import React from "react"
import Typewriter from 'typewriter-effect';

const Hero = () => {
    return (
        <div><section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              I am
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                strings: ['Professional Photographer', ''],
                autoStart: true,
                loop: true,
                  }}
              />
            </h1>
            <p className="mb-8 leading-relaxed">
              "Capturing moments, emotions, and stories—one click at a time. 📸✨ All types of photography, from landscapes to portraits, brought to life with passion."
            </p>
            <div className="flex justify-center">
              <Link href={"#contact"} >
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Contact
              </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded mx-auto w-[orem]"
              alt="hero"
              width={500}
              height={100}
              src={require("../../../public/assests/camera 2.avif")}
            />
          </div>
        </div>
      </section>
      </div>
    )
}

export default Hero 