import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import img from "./images/Mask Group.png"
import { Button } from '@material-tailwind/react';
import { useContext } from 'react';
import { Theme } from '../../Context/DarkMode';
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';

function Section7() {
    var { theme } = useContext(Theme)
    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            className='relative'
        >
            <SwiperSlide className='container my-10'>
                <div className='flex flex-col items-center text-center gap-5'>
                    <Button variant="text" className={` ${theme === "light" ? "bg-[#232020] text-white hover:bg-black hover:shadow-black" : "bg-[#F2F2F2] text-black hover:bg-[#F2F2F2] hover:shadow-[#F2F2F2]"} hover:shadow-md mt-1 duration-300`}>
                        CUSTOMER FEEDBACK
                    </Button>
                    <h1 className='text-5xl font-Zcool'>OUR CUSTOMER REVIEW</h1>
                    <p className='text-lg w-5/6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem opposed to using 'Content here, content here..</p>
                    <div className='flex flex-col items-center gap-3'>
                        <img src={img} alt="" />
                        <span>Rasalida Williamson</span>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='container mb-10'>Slide 2</SwiperSlide>
            <SwiperSlide className='container mb-10'>Slide 3</SwiperSlide>
            <SwiperSlide className='container mb-10'>Slide 4</SwiperSlide>
            <PrevArrow />
            <NextArrow />
        </Swiper >
    );
}

export default Section7