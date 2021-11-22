import React from 'react'
import { CountryList, PropertyType, Price } from './assets/data'

export default function HeroBar() {
    return (
        <section className="absolute bottom-6 sm:left-4 md:left-12">
        <div className="grid gap-1 md:gap-8 grid-cols-4 max-w-3xl shadow-lg rounded-sm px-2 md:px-12 py-3 md:py-6 bg-white">
            <div className="flex text-xs flex-col">
                <h1 className="font-semibold hover:text-blue-500 pb-3">Location</h1>
                <select className="text-gray-500 focus:outline-none" name="Location" id="Location">
                    {CountryList.map(country =>{
                        const {name, code, ...rest} = country
                        return(
                        <option key={code} {...rest} value={name}>{name}</option>
                        )
                    })}
                </select>
            </div>
            <div className="flex text-xs flex-col">
                <h1 className="font-semibold hover:text-blue-500 pb-3">Property type</h1>
                <select className="focus:outline-none" name="Location" id="Location">
                    {PropertyType.map(property =>{
                        const {index, type, ...rest} = property
                        return(
                        <option key={index} {...rest} value={type}>{type}</option>
                        )
                    })}
                </select>
                <span className="text-gray-500"></span>
            </div>
            <div className="flex text-xs flex-col">
                <h1 className="font-semibold hover:text-blue-500  pb-3">Average Price</h1>
                <select className="text-gray-500 focus:outline-none border-none" name="Location" id="Location">
                    {Price.map(price =>{
                        const {index, type, ...rest} = price
                        return(
                        <option key={index} {...rest} value={type}>{type}</option>
                        )
                    })}
                </select>
                <span className="text-gray-500"></span>
            </div>
            <div className="flex flex-col mx-6">
                <span className="rounded-md transition duration-150 ease-in-out hover:bg-blue-600 text-xs md:text-base bg-blue-400 text-white py-3 md:px-3 md:py-5 text-center">Search</span>
            </div>
        </div>
        </section>
    )
}
