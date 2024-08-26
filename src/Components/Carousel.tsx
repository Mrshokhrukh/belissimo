import React from "react";
import img2 from "../assets/a7b348ce-343a-4127-889b-583edd12b213_uz.webp";
import img1 from "../assets/a95649d2-ee7e-4606-a65e-262015e5b1c6_uz.webp";
import img3 from "../assets/db9ec296-5c11-474a-a79e-57ed2debd2f2_uz.webp";
import { Swiper, SwiperSlide } from "swiper/react";

import "../index.css";
import "swiper/css";
import "swiper/css/navigation";

type CarouselProps = {};
import { Navigation } from "swiper/modules";

const Carousel: React.FC<CarouselProps> = () => {
  return (
    <div className="h-[450px] min-w-full hidden md:block">
      <Swiper
        spaceBetween={10}
        slidesPerView={1.5}
        centeredSlides={true}
        loop={true}
        autoplay={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="slide">
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={img1} alt="" />
        </SwiperSlide>

        {/* <SwiperSlide className="slide">
          {({ isActive }) => <div>Current slide is {isActive ? "active" : "not active"}</div>}
        </SwiperSlide>
        <SwiperSlide className="slide">
          {({ isActive }) => <div>Current slide is {isActive ? "active" : "not active"}</div>}
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};
export default Carousel;
