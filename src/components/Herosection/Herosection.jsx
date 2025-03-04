import React from "react";
import banner from "../../assets/image.jpg";

const Herosection=()=>{
    return (
        <>
            <div className="relative">
            <div>
                <img 
                src={banner}
                alt=""
                className="w-full  object-cover object-bottom h-[900px]"
                />
            </div>
            </div>
        </>
    )
}

export default Herosection