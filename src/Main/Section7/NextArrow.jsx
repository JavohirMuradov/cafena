import React from 'react'
import { useSwiper } from 'swiper/react'

const NextArrow = () => {
    var swiper = useSwiper()
    return (
        <button onClick={() => { swiper.slideNext(); console.log("dsjakl"); }} className='absolute top-1/2 right-0 z-10'>
            <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.22966e-05 25.375C5.29093e-05 11.3583 11.3584 -1.72186e-06 25.375 -1.10918e-06C39.3917 -4.96488e-07 50.75 11.3583 50.75 25.375C50.75 39.3916 39.3917 50.7499 25.375 50.7499C11.3584 50.7499 5.16839e-05 39.3916 5.22966e-05 25.375ZM49.1384 25.375C49.1384 12.2446 38.5051 1.61157 25.375 1.61157C12.2449 1.61157 1.61163 12.2449 1.61162 25.375C1.61162 38.5051 12.2449 49.1384 25.375 49.1384C38.5051 49.1384 49.1384 38.5051 49.1384 25.375Z" fill="#D48A5C" />
                <path d="M19.4135 35.605L29.6444 25.3746L19.4135 15.1442L20.5415 13.9359L31.8998 25.3746L20.5415 36.8133L19.4135 35.605Z" fill="#D48A5C" />
            </svg>
        </button>
    )
}

export default NextArrow