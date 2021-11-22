import React from "react";
import {navItems} from './assets/data'
import Image from 'next/image'

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <div className="sticky top-0 w-full z-30 clearNav transition duration-1000 ease-linear">
      <div className="flex flex-col max-w-6xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between p-4">
          <a
            href="/"
            className="text-lg font-semibold rounded-lg tracking-widest focus:outline-none focus:shadow-outline"
          >
            <Image width="40" height="40" src="/logo.png" />
          </a>
          <button
            className="text-white cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none "
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="9" y1="12" x2="21" y2="12"></line>
              <line x1="6" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <nav className="flex-col flex-grow ">
            <ul className="flex flex-col md:flex-row flex-grow justify-end flex-wrap md:items-center">
              {navItems.map(item =>{
                const {index, text, url} = item
                return(
                  <li key={index}
                      onClick={() => setNavbarOpen(!navbarOpen)}
                      className="hover:bg-blue-400 rounded-md md:hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50" >
                      <a
                        href={url}
                        className="font-medium capitalize hover:text-white text-gray-600 md:hover:text-blue-600 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                      >
                        {text}
                      </a>
                   </li> 
                )
              })}            
             </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
