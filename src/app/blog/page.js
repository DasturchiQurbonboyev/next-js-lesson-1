import Image from 'next/image'
import React from 'react'
import imgBir from "@/assets/blog/1.png"
import imgIkki from "@/assets/blog/2.png"

const Blog = () => {
    return (
        <div className='kontainer'>
            <div className='mt-[100px]   '>
                <h1 className='mb-[46px] text-[32px] font-[700]'> Blog Posts</h1>
                <div className='bg-[#EDF2F4] py-[30px] pl-[50px] pr-[35px] flex items-center gap-5 rounded-[20px] '>
                    <div className='w-[70%]'>
                        <h2 className='text-[24px] font-[600]   '>Tempered Glass</h2>
                        <p className='text-[16px] font-[300] mt-[44px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum sit amet justo donec enim diam vulputate ut. Malesuada fames ac turpis egestas maecenas. Dictum fusce ut placerat orci nulla pellentesque dignissim. Neque laoreet suspendisse interdum consectetur. Turpis massa sed elementum tempus egestas sed sed. Ornare massa eget egestas purus viverra accumsan in. Tristique senectus et netus et malesuada. Ornare suspendisse sed nisi lacus sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue mauris augue neque gravida in fermentum et. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Proin libero nunc consequat interdum varius sit amet mattis. Odio eu feugiat pretium nibh ipsum.</p>
                    </div>
                    <div className='w-[30%]'>
                        <Image src={imgBir} />
                    </div>
                </div>
                <div className='bg-[#EDF2F4] rounded-[20px] mb-[63px] mt-[33px] py-[30px] pl-[50px] pr-[35px] flex items-center gap-5'>
                    <div className='w-[30%]'>
                        <Image src={imgIkki} />
                    </div>
                    <div className='w-[70%]'>
                        <h2 className='text-[24px] font-[600]   '>Tempered Glass</h2>
                        <p className='text-[16px] font-[300] mt-[44px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum sit amet justo donec enim diam vulputate ut. Malesuada fames ac turpis egestas maecenas. Dictum fusce ut placerat orci nulla pellentesque dignissim. Neque laoreet suspendisse interdum consectetur. Turpis massa sed elementum tempus egestas sed sed. Ornare massa eget egestas purus viverra accumsan in. Tristique senectus et netus et malesuada. Ornare suspendisse sed nisi lacus sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue mauris augue neque gravida in fermentum et. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Proin libero nunc consequat interdum varius sit amet mattis. Odio eu feugiat pretium nibh ipsum.</p>
                    </div>

                </div>
                <div className='bg-[#EDF2F4] py-[30px] pl-[50px] pr-[35px] rounded-[20px] '>
                    <h2 className='text-[24px] font-[600]   '>Mobile Brand and Price Strategy</h2>
                    <p className='text-[16px] font-[300] mt-[44px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum sit amet justo donec enim diam vulputate ut. Malesuada fames ac turpis egestas maecenas. Dictum fusce ut placerat orci nulla pellentesque dignissim. Neque laoreet suspendisse interdum consectetur. Turpis massa sed elementum tempus egestas sed sed. Ornare massa eget egestas purus viverra accumsan in. Tristique senectus et netus et malesuada. Ornare suspendisse sed nisi lacus sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue mauris augue neque gravida in fermentum et. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Proin libero nunc consequat interdum varius sit amet mattis. Odio eu feugiat pretium nibh ipsum.</p>
                </div>
            </div>
        </div>
    )
}

export default Blog