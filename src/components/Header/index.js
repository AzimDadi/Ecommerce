import React from "react";
import { Link } from "react-router-dom";

const navigations = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    path: "/products",
  },
];

const Header = () => {
  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to={"/"}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 "
        >
          <span className="ml-3 text-3xl">Ecommerce</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-2xl justify-center text-blue-400 ">
          {navigations.map((navigation) => {
            return (
              <Link
                to={navigation.path}
                className="mr-5 hover:text-blue-600 font-medium text-gray-900"
              >
                {navigation.name}
              </Link>
            );
          })}
        </nav>
        <Link
          to={"/cart"}
          className="inline-flex items-center text-white bg-blue-600 border-0 py-2 px-4 focus:outline-none hover:bg-blue-800 rounded text-base mt-4 md:mt-0"
        >
          Go to Cart
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </header>
  );
};

export default Header;
