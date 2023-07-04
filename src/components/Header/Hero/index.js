import React from "react";
import download1 from "../../../assets/download1.jpg"
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="text-white body-font mt-20  bg-blue-900">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center sm:ml-20">
          <h1 className="title-font sm:text-7xl text-5xl mb-4 font-mono-medium text-white">
            Shop Easily   
            <br className=" lg:inline-block" />
            Anywhere
          </h1>
          
          <div className="flex justify-center ">
            <Link to={"/products"} className="inline-flex text-white font-semibold italic bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg rounded-full ">
              View Products
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:mr-20">
          <img
            className="object-cover object-center rounded "
            alt="hero"
            src={download1}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
