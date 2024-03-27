import { Button } from '@material-tailwind/react'
import React, { useContext } from 'react'
import { Theme } from '../../Context/DarkMode'
import img1 from "./images/Mask group.png"
import img2 from "./images/Mask group-1.png"
import img3 from "./images/Mask group-2.png"
import img4 from "./images/Mask group-3.png"
import img5 from "./images/Mask group-4.png"
import img6 from "./images/Mask group-5.png"
const Section4 = () => {
    var { theme } = useContext(Theme)
    return (
        <section className='container flex flex-col items-center'>
            <Button variant="text" className={` ${theme === "light" ? "bg-[#232020] text-white hover:bg-black hover:shadow-black" : "bg-[#F2F2F2] text-black hover:bg-[#F2F2F2] hover:shadow-[#F2F2F2]"} hover:shadow-md mt-1 duration-300`}>
                Popular Product
            </Button>
            <div className='flex flex-col items-center gap-10 mt-3 mb-20'>
                <h1 className='text-4xl font-Zcool'>
                    Cafena Popular Product
                </h1>
                <div className='flex flex-col lg:flex-row gap-10 lg:gap-20'>
                    <div className='flex flex-col gap-10'>
                        <div className='relative w-72'>
                            <img src={img5} alt="" className=' w-24 h-24 absolute -left-12 -top-3' />
                            <div className='pl-12 border-2 border-[#414141] py-1 px-5 pt-3'>
                                <h1 className='text-xl font-Zcool'>Vicaragua Coffee Beans</h1>
                                <div className='w-full flex justify-end text-[#D48A5C]'>
                                    <span>$29</span>
                                </div>
                            </div>
                        </div>
                        <div className='relative w-72'>
                            <img src={img3} alt="" className=' w-24 h-24 absolute -left-12 -top-3' />
                            <div className='pl-12 border-2 border-[#414141] py-1 px-5 pt-3'>
                                <h1 className='text-xl font-Zcool'>Espresso Ristretto</h1>
                                <div className='w-full flex justify-end text-[#D48A5C]'>
                                    <span>$29</span>
                                </div>
                            </div>
                        </div>
                        <div className='relative w-72'>
                            <img src={img2} alt="" className=' w-24 h-24 absolute -left-12 -top-3' />
                            <div className='pl-12 border-2 border-[#414141] py-1 px-5 pt-3'>
                                <h1 className='text-xl font-Zcool'>Ethiopia Coffee</h1>
                                <div className='w-full flex justify-end text-[#D48A5C]'>
                                    <span>$29</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <div className='relative w-72'>
                            <img src={img5} alt="" className=' w-24 h-24 absolute -left-12 -top-3' />
                            <div className='pl-12 border-2 border-[#414141] py-1 px-5 pt-3'>
                                <h1 className='text-xl font-Zcool'>Vicaragua Coffee Beans</h1>
                                <div className='w-full flex justify-end text-[#D48A5C]'>
                                    <span>$29</span>
                                </div>
                            </div>
                        </div>
                        <div className='relative w-72'>
                            <img src={img3} alt="" className=' w-24 h-24 absolute -left-12 -top-3' />
                            <div className='pl-12 border-2 border-[#414141] py-1 px-5 pt-3'>
                                <h1 className='text-xl font-Zcool'>Espresso Ristretto</h1>
                                <div className='w-full flex justify-end text-[#D48A5C]'>
                                    <span>$29</span>
                                </div>
                            </div>
                        </div>
                        <div className='relative w-72'>
                            <img src={img2} alt="" className=' w-24 h-24 absolute -left-12 -top-3' />
                            <div className='pl-12 border-2 border-[#414141] py-1 px-5 pt-3'>
                                <h1 className='text-xl font-Zcool'>Ethiopia Coffee</h1>
                                <div className='w-full flex justify-end text-[#D48A5C]'>
                                    <span>$29</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Section4