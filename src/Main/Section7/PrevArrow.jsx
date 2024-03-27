import React from 'react'
import { useSwiper } from 'swiper/react'

const PrevArrow = () => {
    const swiper = useSwiper()
    return (
        <button onClick={() => swiper.slidePrev()} className='absolute top-1/2 left-0 z-10'>
            <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50.7499 25.625C50.7499 39.6417 39.3916 51 25.375 51C11.3583 51 1.35447e-07 39.6417 3.02594e-07 25.625C4.6974e-07 11.6084 11.3583 0.250054 25.375 0.250054C39.3916 0.250054 50.7499 11.6084 50.7499 25.625ZM1.61157 25.625C1.61157 38.7554 12.2449 49.3884 25.375 49.3884C38.5051 49.3884 49.1384 38.7551 49.1384 25.625C49.1384 12.4949 38.5051 1.86162 25.375 1.86162C12.2449 1.86162 1.61157 12.4949 1.61157 25.625Z" fill="#D48A5C" />
                <path d="M31.3366 15.395L21.1057 25.6254L31.3366 35.8558L30.2086 37.0641L18.8503 25.6254L30.2086 14.1867L31.3366 15.395Z" fill="#D48A5C" />
            </svg>
        </button>
    )
}

export default PrevArrow