import React from 'react'
import Mapcard from './Mapcard'

const Mymap = () => {
    const card = [
        {
            id: 1,
            img: "/images/img-first.png",
            head: "How to choose the right colors",
            para: "The app is a comprehensive resource that can help you stay up-to-date on everything that's happening at the",
            button: "CTA button",
        },
        {
            id: 2,
            img: "/images/img-second.png",
            head: "How to choose the right colors",
            para: "The app is a comprehensive resource that can help you stay up-to-date on everything that's happening at the",
            button: "CTA button",
        },
        {
            id: 3,
            img: "/images/images-third.png",
            head: "How to choose the right colors",
            para: "The app is a comprehensive resource that can help you stay up-to-date on everything that's happening at the",
            button: "CTA button",
        }
    ]
    return (
        <div className='max-w-[1140px] mx-auto px-3'>
            <div className="flex flex-nowrap -mx-3 flex-row">
                {
                    card.map((p) => <Mapcard key={p.id} heading={p.head} para={p.para} btn={p.button} img={p.img} />)
                }
            </div>
        </div>
    )
}

export default Mymap