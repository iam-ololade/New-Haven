import React from 'react'
import Image from 'next/image'
import {ListCard} from './assets/data'
import styles from "./Scrollbar.module.css"

export default function Listed() {
    return (
        <section className="mx-auto">
            <div className="container p-8 md:px-24 mx-auto lg:px-24 mt-8">
                <div className="flex flex-col w-full text-center md:text-left">
                    <h1 className="text-xl mb-1 md:text-2xl Avenir font-semibold text-black">
                        New listed Apartment
                    </h1> 
                    <p>Browse through our extensive list of apartments you can own/rent now</p>
                </div>
                <div className={`flex w-full overflow-x-scroll gap-4  ${styles.imageCard}`}>
                    {ListCard.map(card =>{
                        const {index, price, name, location} = card
                        return(
                            <div key={index} className="flex flex-col bg-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition duration-500 ease-in-out p-4 m-4">
                                <div className="h-48 w-48 flex flex-col items-center justify-center">
                                    <Image width="650" className="rounded-2xl" height="650" src={`/apartment${index}.png`} />
                                </div>
                                <div className="py-2">
                                    <div className="font-bold text-gray-900 "> 
                                        <h1>
                                           {price}
                                        </h1>
                                        <h3>{name}</h3>
                                    </div> 
                                    
                                    <div className="text-xs pt-2">
                                        <i></i>
                                        <span>{location}</span>
                                    </div> 
                                </div>
                            </div>
                        )
                    })}
                    
                </div>

            </div>
        </section>
    )
}
