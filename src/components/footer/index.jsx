import Image from 'next/image'
import React from 'react'
import logo from "../../assets/footer/logo.png"
import watsap from "../../assets/footer/watsap.png"
import instagram from "../../assets/footer/instagram.png"
import tiktok from "../../assets/footer/tiktok.png"
import facebook from "../../assets/footer/facebook.png"

const Footer = () => {
    return (
        <div className='bg-[rgb(237,242,244)] pt-[74px] mt-[100px]'>
            <div className='kontainer  grid grid-cols-4 gap-[20px]'>
                <div>
                    <Image src={logo} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='pt-[38px]'>
                    <h4 className='mb-[15px]'>Contact us</h4>
                    <div>
                        <p>E: info@example.com</p>
                        <p>P: +94 7670000000</p>
                        <p>A: 123 Hospital rd, </p>
                        <p>Kalubowila, Dehiwela</p>
                    </div>
                </div>
                <div className='pt-[38px]'>
                    <h4 className='mb-[15px]'>Useful links</h4>
                    <div>
                        <p>Shop All </p>
                        <p>Tempered Glass</p>
                        <p>Back-cover</p>
                        <p> About Us</p>
                    </div>
                </div>
                <div className='flex flex-col gap-3 '>
                    <div className='flex items-center gap-6 '>
                        <Image src={watsap} />
                        <p>Whatsapp</p>
                    </div>
                    <div className='flex items-center gap-6 '>
                        <div className='bg-[#000] p-[2] w-[35px] h-[35px] rounded-md flex justify-center items-center'>
                            <Image src={facebook} />
                        </div>
                        <p>Facebook</p>
                    </div>
                    <div className='flex items-center gap-6 '>
                        <Image src={instagram} />
                        <p>Instargram</p>
                    </div>
                    <div className='flex items-center gap-6 '>
                        <Image src={tiktok} />
                        <p>Tik Tok</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer