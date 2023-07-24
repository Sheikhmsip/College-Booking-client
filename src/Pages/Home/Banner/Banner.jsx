import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './Banner.css'

// import required modules
import { Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
        </div>
    );
};

export default Banner;