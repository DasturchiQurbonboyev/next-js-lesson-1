import Image from 'next/image'
import React from 'react'
import img from '@/assets/hero/phone.png'
import Product from '@/components/product'

const shop = () => {
    return (
        <div className='mt-[100px]'>
            <div className='kontainer flex gap-8 flex-wrap'>
                <Product limit={0} />
            </div>
        </div>
    )
}

export default shop