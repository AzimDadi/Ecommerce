import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font border-t-2">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center sm:ml-[40%]">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold  text-gray-900 tracking-widest text-xl mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10 w-1/3 sm:ml-[20%] text-center ml-[30%]">
              <li>
                <Link to={"/"} className="text-gray-600 hover:text-blue-500 font-medium ">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/products"}
                  className="text-gray-600 hover:text-blue-500 font-medium"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  to={"/cart"}
                  className="text-gray-600 hover:text-blue-500 font-medium"
                >
                  Cart
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
