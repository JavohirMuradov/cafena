import { Button } from '@material-tailwind/react'
import React, { useContext } from 'react'
import { Theme } from '../../Context/DarkMode'
import CardMy from './Card'
import img1 from "./images/Mask group-6.png"
import img2 from "./images/Mask group-7.png"
import img3 from "./images/Mask group-8.png"

const Section9 = () => {
    var { theme } = useContext(Theme)
    return (
        <section className='flex container items-center flex-col'>
            <Button variant="text" className={` ${theme === "light" ? "bg-[#232020] text-white hover:bg-black hover:shadow-black" : "bg-[#F2F2F2] text-black hover:bg-[#F2F2F2] hover:shadow-[#F2F2F2]"} hover:shadow-md mt-1 duration-300`}>
                Popular Product
            </Button>
            <div className='flex flex-col items-center gap-10 mt-3 mb-20 w-full'>
                <h1 className='text-4xl font-Zcool'>
                    OUR NEWS & ARTICLES
                </h1>
                <div className='w-full flex gap-5'>
                    <CardMy img={img1} />
                    <CardMy img={img1} />
                    <CardMy img={img1} />
                </div>
            </div>
        </section>
    )
}

export default Section9