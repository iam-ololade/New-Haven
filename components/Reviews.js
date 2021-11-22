import React from 'react'
import { ReviewsCard } from './assets/data'
import Image from 'next/image'
import styles from "./Scrollbar.module.css"

export default function Reviews() {
    return (
        <section className="mx-auto bg-gray-50">
            <div className="container p-8 md:px-24 mx-auto lg:px-24 mt-8">
            <div className="flex flex-col w-full text-center">
                <h4 className="font-bold text-blue-500 uppercase">client reviews</h4>
                <h1 className="text-xl mb-1 md:text-2xl Avenir font-semibold text-black">
                    Don't take our words for it, Trust our clients
                </h1> 
             </div>
             <div className={`flex md:grid my-4 w-full overflow-x-scroll md:grid-cols-3 gap-4 ${styles.imageCard}`}>
                 {ReviewsCard.map(review => {
                     const {index, text, username, name} = review
                     return(
                    <div key={index} className="flex flex-col text-xs md:text-base shadow-sm hover:shadow-xl rounded-lg bg-white p-4 m-4 text-gray-500 hover:bg-blue-400 hover:text-white transition ease-in-out duration-500">
                        <div className="w-56 ">
                    <div className="flex gap-2">
                        <Image className="rounded-lg" src={`/avatar${index}.png`} width="45" height="45" />
                        <div className="flex flex-col">
                            <h1 className="font-semibold text-gray-900 hover:text-white">{name}</h1>
                            <h4 className="">@{username}</h4>
                        </div>
                    </div>
                    <div className="pt-4">
                   <p>{text}</p>
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
