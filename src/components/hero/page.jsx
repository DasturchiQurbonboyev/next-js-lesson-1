import Image from 'next/image'
import React from 'react'
import hero from "../../assets/hero/hero.png"

const Hero = () => {
    return (
        <div className='kontainer grid grid-cols-2 mt-5 items-center'>
            <div className='mt-[25px]'>
                <h2 className='text-[64px]  leading-[73.15px]    '>Mobile</h2>
                <h1 className='text-[#F42D2D] text-[79px]   '>Backcover</h1>
                <h1 className='text-[#F42D2D] text-[79px] font-[400]  '>Tempered Glass</h1>
                <button className='bg-[#FF0000] px-[30px] py-[15px] rounded-[20px] text-white       '>Shop all !</button>
            </div>
            <div className='mt-[25px]'>
                <Image src={hero} />
            </div>
        </div>
    )
}

export default Hero