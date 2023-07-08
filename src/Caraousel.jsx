import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import  { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import SwiperCore from "swiper"

import Image_1 from "./Assets/Images_Drones/Image_1.jpeg"
import Image_2 from "./Assets/Images_Drones/Image_2.jpg"
import Image_3 from "./Assets/Images_Drones/Image_3.jpeg"
import Image_4 from "./Assets/Images_Drones/Image_4.jpg"
import Image_5 from "./Assets/Images_Drones/Image_5.jpg"
import Image_6 from "./Assets/Images_Drones/Image_6.jpg"
// Import Swiper styles



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export default function SwiperCoverflow() {
  return (
    <Fragment>
    <div className="App">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }}
        slidesPerView={2}
        centeredSlides
        style={{ height: "500px" }}
      >
        <SwiperSlide
          style={{
            backgroundImage: `url(${Image_1})`,
            backgroundPosition: "center bottom",
            backgroundSize: "cover",
          }}
        >
          Slide 1
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${Image_2})`,
            backgroundPosition: "center bottom",
            backgroundSize: "cover",
          }}
        >
          Slide 2
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${Image_3})`,
            backgroundPosition: "center bottom",
            backgroundSize: "cover",
          }}
        >
          Slide 3
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${Image_4})`,
            backgroundPosition: "center bottom",
            backgroundSize: "cover",
          }}
        >
          Slide 4
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${Image_5})`,
            backgroundPosition: "center bottom",
            backgroundSize: "100% 95%",
            backgroundRepeat: "no-repeat",
          }}
        >
          Slide 5
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${Image_6})`,
            backgroundPosition: "center bottom",
            backgroundSize: "cover",
          }}
        >
          Slide 6
        </SwiperSlide>
      </Swiper>
    </div>

    </Fragment>
  );
}
