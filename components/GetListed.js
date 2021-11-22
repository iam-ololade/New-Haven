import React from 'react'
import Image from 'next/image'
export default function GetListed() {
    return (
        <section className="w-full">
        <div className="container max-w-6xl overflow-hidden md:rounded-3xl gap-4 bg-blue-100 flex flex-col md:flex-row m-8 mx-auto mt-8">
        <div className="flex-1 order-2 md:order-1">
          <div className="flex w-full md:flex-shrink-0 md:justify-end">
          <Image width="550" height="650"
            alt="real estate pictures, white skycrapper building"
            src="/hero.png"
          ></Image>
        </div>
        </div>
                <div className="flex-1 p-8 md:py-48 order-1 md:order-2">
                    <h1 className="mb-8 text-4xl Avenir font-semibold text-gray-900">
                    Get your home listed and you as owner!
                    </h1>
                    <h1 className="mb-12 text-lg font-semibold text-gray-500">
                    Enter your email address to get started straight away.
                    </h1>
                    <input
                    placeholder="jack@example.com"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="border border-blue-400 w-2/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-blue-500"
                    ></input>{" "}
                    <a
                    className="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-blue-500 hover:bg-blue-700"
                    href="/"
                    >
                    <span className="justify-center">Get Started</span>
                    </a>
                </div>       
        </div>
      </section>    
    )
}
