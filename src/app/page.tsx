import Image from "next/image";
import Hero from "./component/hero";
import Contact from "./component/contact";
import Project from "./component/project";
import About from "./component/about";

export default function Home() {
  return (
  <div>
    <Hero />
    <About />
    <Project /> 
    <Contact />
  </div>
  );
}