import Image from 'next/image'
import React from 'react'

const Mapcard = (props) => {
    return (
        <div className='w-4/12 px-3'>
            <div className="border shadow-2xl rounded-3xl">
                <Image width={410} height={231} src={props.img} alt="images" />
                <div className='px-3 pb-4'>
                    <h2 className='pt-4 text-[20px] font-bold'>{props.heading}</h2>
                    <p className='pt-3 text-[12px] font-normal '>{props.para}</p>
                    <button className='bg-[#222861] rounded-3xl w-full py-2 text-white font-bold text-[15px] mt-3'>{props.btn}</button>
                </div>
            </div>
        </div>
    )
}

export default Mapcard
