import React from 'react'
import img from "../../assets/hero/about.png"
import Image from 'next/image'

const AboutUs = () => {
    return (
        <div className='kontainer flex flex-col items-center '>
            <div className='  w-[23px] h-[79px] bg-[#FF0404] rounded-[10px]  mt-[80px]  '></div>
            <p className='mt-[32px] mb-[23px]'>about us</p>
            <h4 className='text-[#D62828] text-[48px]  text-center max-w-[880px] text-[Lalezar]    '>If you’re looking for a Premium Quality
                Tempered Glass or Back-cover for
                your Device</h4>
            <p className='mt-[80px] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <Image className='mt-[80px]' src={img} />
        </div>
    )
}

export default AboutUs