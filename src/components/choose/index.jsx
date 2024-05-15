import Image from 'next/image'
import React from 'react'
import car from '../../assets/hero/car.png'
import dollar from '../../assets/hero/dollar.png'
import medal from '../../assets/hero/medal.png'

const ChoseUs = () => {
    return (
        <div className='kontainer'>
            <div className=' mx-auto  w-[23px] h-[79px] bg-[#FF0404] rounded-[10px]  mt-[80px]  '></div>
            <p className='text-center mt-[40px] mb-[100px]'>Why Choose US</p>
            <div className='flex justify-between gap-5'>
                <div className='flex flex-col items-center gap-5'>
                    <Image src={car} />
                    <h5 className='text-[48px] leading-[60px]'>Fast Delivery</h5>
                    <p className='text-[18px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='flex flex-col items-center gap-5'>
                    <Image src={dollar} />
                    <h5 className='text-[48px] leading-[60px]'>Cheap Price</h5>
                    <p className='text-[18px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='flex flex-col items-center gap-5'>
                    <Image src={medal} />
                    <h5 className='text-[48px] leading-[60px]'>Premium Quality</h5>
                    <p className='text-[18px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
    )
}

export default ChoseUs