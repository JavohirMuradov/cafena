import { Button } from '@material-tailwind/react'
import React, { useContext } from 'react'
import { Theme } from '../../Context/DarkMode'

const Section3 = () => {
    var { theme } = useContext(Theme)
    return (
        <section className='bg-salam bg-cover bg-center'>
            <div className='flex flex-col items-center my-10 justify-center container h-[500px] gap-10 text-black'>
                <h1 className='text-4xl font-Zcool'>Roasted CoffeeFor You</h1>
                <p className='text-center lg:w-1/2'>
                    Donec et nibh maximus, congue est eu, mattis nunc. Praesent utquam quis quam venenatis fringilla. Morbi vestibulum id tellusmmodo mattis. Aliquam erat volutpat.
                </p>
                <Button variant="text" className={` ${theme === "light" ? "bg-[#232020] text-white hover:bg-black hover:shadow-black" : "bg-[#F2F2F2] text-black hover:bg-[#F2F2F2] hover:shadow-[#F2F2F2]"} hover:shadow-md mt-1 duration-300`}>
                    Explore More
                </Button>
            </div>
        </section>
    )
}

export default Section3