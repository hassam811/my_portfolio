import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about'>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded mx-auto"
        alt="hero"
        src={require("../../../public/assests/My image 2.jpg")}
        width={350}
        height={300}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me
        <br className="hidden lg:inline-block" />
        
      </h1>
      <p className="mb-5 leading-relaxed">
      "My name is Hassam, and I am a photographer. I have been involved in photography since childhood because it has always been my passion. I have completed my FSC, and I am currently pursuing a BS in Mass Communication (ongoing). I belong to Pakistan's beautiful province, Khyber Pakhtunkhwa (KPK), and I am working on further enhancing my photography skills to make it more professional.
      </p>
      <div className="flex justify-center">
        
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
