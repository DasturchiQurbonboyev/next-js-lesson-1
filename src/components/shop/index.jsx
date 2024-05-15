import Image from 'next/image'
import React from 'react'
import phon from '../../assets/hero/phone.png'

const ShopPremium = () => {
    return (
        <div className='kontainer  relative '>

            <div className='-t-[400px] top-[30px] right-[150px]  absolute flex items-center bg-[#EDF2F4] px-[33px] py-[22px] justify-between rounded-[20px]   '>
                <div className='w-[60%]'>
                    <h2 className='text-[#FF0000] text-[48px]'>Shop Premium Tempered Glass in wholesale Price !</h2>
                    <p className='mb-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

                        <br /><br /><br />
                        LKR : 299</p>
                    <button className='bg-[#FF0000] px-[30px] py-[15px] rounded-[20px] text-white       '>Shop Tempered Glass </button>
                </div>
                <div className='w-[40%]'>
                    <Image src={phon} />
                </div>
            </div>
            <div className=' grid grid-cols-2 gap-10 justify-between mt-[200px]'>
                <div></div>
                <div className='bg-[#003049] h-[532px] w-[532px] '></div>
            </div>
        </div>
    )
}

export default ShopPremium