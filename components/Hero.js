import React from 'react'
import Image from 'next/image'
import HeroBar from './HeroBar'

export default function Hero() {
    return (
        <section className="bg-blue-50 overflow-hidden md:mx-24 md:rounded-3xl h-auto relative">
        <div className="max-w-6xl flex w-full mx-auto md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:px-0 md:pt-4 px-8 pt-24 md:w-1/2 md:ml-12 flex flex-col flex-1 md:items-start md:text-left mb-4 items-center text-center">
          <h1 className="mb-4 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
            Find Your Home, Your Safe Haven.
          </h1>
          <p className="mb-4 xl:w-3/4 text-gray-600 text-lg">
            We provide a complete service to the sale, purchase or rental of real estate.
          </p>
          <div className="flex mt-20 justify-center shadow-xl rounded-md bg-gray-100">
          <a
              className="inline-flex items-center rounded-l-md px-5 py-3 font-medium text-gray-600 hover:text-white transition duration-500 ease-in-out transform bg-transparent hover:bg-blue-500"
              href="#buy"
            >
              <span className="justify-center">Buy</span>
            </a>
            <a
              className="inline-flex items-center px-5 py-3 font-medium text-gray-600 hover:text-white transition duration-500 ease-in-out transform bg-transparent hover:bg-blue-500"
              href="#sell"
            >
              <span className="justify-center">Sell</span>
            </a>
            <a
              className="inline-flex items-center rounded-r-md px-5 py-3 font-medium text-gray-600 hover:text-white transition duration-500 ease-in-out transform bg-transparent hover:bg-blue-500"
              href="#rent"
            >
              <span className="justify-center">Rent</span>
            </a>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex w-full md:flex-shrink-0 md:justify-end">
          <Image width="550" height="650"
            alt="real estate pictures, white skycrapper building"
            src="/hero.png"
          ></Image>
        </div>
        </div>
      </div>
      <HeroBar/>
    </section>
    )
}
