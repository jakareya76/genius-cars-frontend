import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import SlideOne from "../Slides/SlideOne";
import SlideTow from "../Slides/SlideTow";
import SlideThree from "../Slides/SlideThree";
import SlideFour from "../Slides/SlideFour";
import SlideFive from "../Slides/SlideFive";
import SwiperNavButton from "../Slides/SwiperNavButton";

import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <div className="relative mb-5">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination]}
        spaceBetween={50}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <SlideOne />
        </SwiperSlide>
        <SwiperSlide>
          <SlideTow />
        </SwiperSlide>
        <SwiperSlide>
          <SlideThree />
        </SwiperSlide>
        <SwiperSlide>
          <SlideFour />
        </SwiperSlide>
        <SwiperSlide>
          <SlideFive />
        </SwiperSlide>
        <SwiperNavButton />
      </Swiper>
    </div>
  );
};

export default Banner;
