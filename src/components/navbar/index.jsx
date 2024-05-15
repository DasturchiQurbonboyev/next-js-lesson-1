import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import logo from "../../assets/navbar/logo.png"
import serach from "../../assets/navbar/Vector.png"

const Navbar = () => {
    return (
        <div className='shadow-md '>
            <div className='kontainer flex items-center justify-between'>
                <div >
                    <ul className='flex items-center gap-12'>
                        <li>
                            <Link href={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link href={"shop"}>Shop All</Link>
                        </li>
                        <li>
                            <Link href={"/blog"}>Blog</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <Link href={"/"}>
                        <Image src={logo} />
                    </Link>
                </div>
                <div className='flex items-center gap-4'>
                    <Link href={"/about"}>About Us</Link>
                    <div className='bg-[#EDF2F4] py-[6px] flex items-center pr-3 rounded-[15px]'>
                        <input className='bg-transparent outline-none pl-[15px]' type="text" />
                        <Image src={serach} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar