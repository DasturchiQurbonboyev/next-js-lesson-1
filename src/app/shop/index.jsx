import Image from 'next/image'
import React from 'react'
import img from '../../assets/hero/phone'

const shop = () => {
    return (
        <div>
            <div>
                <div className='bg-[#EDF2F4] rounded-md'>
                    <Image src={img} />
                </div>
                <div>
                    <h5>iPhone 13 Pro - Transparent</h5>
                    <p>LKR 499</p>
                </div>
            </div>
        </div>
    )
}

export default shop