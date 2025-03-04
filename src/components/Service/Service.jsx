import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

const Service=()=>{
    return (
        <>
            <div className='constiner mx-auto px-5 flex py-11 gap-10 item-center justify-center flex-wrap'>
                <div className='bg-red-500 py-3 px-6 rounded-lg text-white flex gap-2 flex-col item-centre w-[220px] hover:shadow-2xl transform hover:scale-110 transition duration-300 ease-in-out'>
                <FaShippingFast size={30}/>
                    <p>FREE SHIPPING</p>
                </div>

                <div className='bg-red-500 py-3 px-5 rounded-lg text-white flex gap-2 flex-col item-center w-[220px] hover:shadow-2xl transform hover:scale-110 transition duration-300 ease-in-out'>
                <MdOutlineProductionQuantityLimits size={30} />
                    <p>AUTHENTICATE PRODUCTS</p>
                </div>

                <div className='bg-red-500 py-3 px-5 rounded-lg text-white flex gap-2 flex-col item-center w-[220px] hover:shadow-2xl transform hover:scale-110 transition duration-300 ease-in-out'>
                <CiDeliveryTruck size={30}/>
                    <p>EASY RETURN</p>
                </div>

                <div className='bg-red-500 py-3 px-5 rounded-lg text-white flex gap-2 flex-col item-center w-[220px] hover:shadow-2xl transform hover:scale-110 transition duration-300 ease-in-out'>
                <MdOutlinePayment size={30}/>
                    <p>SECURE PAYMENT</p>
                </div>
            </div>
        </>
    )
}

export default Service;