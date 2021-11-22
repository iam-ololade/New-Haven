import React from 'react'
import { serviceCard } from './assets/data'

export default function Services() {
    return (
        <section className="mx-auto">
            <div className="container py-8 px-24 mx-auto my-4 lg:px-24 mt-8">
            <div className="flex flex-col w-full text-center">
                <h4 className="font-bold text-blue-500 uppercase">our services</h4>
                <h1 className="text-xl mb-1 md:text-2xl Avenir font-semibold text-black">
                    What Haven can do for you
                </h1> 
             </div>
            <div className="grid my-2 mt-8 md:px-48 w-full gap-4 grid-cols-2 md:grid-cols-4"> 
                {serviceCard.map(card =>{
                    const {index, text, icon} = card;
                    return(
                        <div key={index} className="w-32 h-32 flex flex-col rounded-md justify-center hover:shadow-lg items-center px-4 transition duration-500">
                <div className="w-12 h-12 rounded-full shadow-sm flex justify-center items-center my-4 hover:bg-blue-400 hover:text-white transition duration-500">
                {icon}
                </div>
                <h2 className="font-bold text-center text-xs">
                    {text}
                </h2>
                </div>
                    )
                })}
                
            </div>
            </div>
        </section>
    )
}
