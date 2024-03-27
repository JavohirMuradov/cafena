import React from 'react'
import img from './images/Group 132.png'
import img1 from './images/Group 133.png'
import img2 from './images/Group 134.png'

const Section2 = () => {
    return (
        <section className='container flex flex-col items-center my-10 lg:flex-row lg:justify-between gap-5 lg:gap-0'>
            <img src={img1} alt="" />
            <img src={img} alt="" />
            <img src={img2} alt="" />
        </section>
    )
}

export default Section2