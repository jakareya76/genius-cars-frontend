import { useSwiper } from "swiper/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const SwiperNavButton = () => {
  const swiper = useSwiper();

  return (
    <div className="absolute z-50 space-x-4 bottom-10 right-16">
      <button
        className="bg-transparent rounded-full btn hover:bg-red-600 hover:border-red-600"
        onClick={() => swiper.slidePrev()}
      >
        <FaArrowLeft color="#fff" />
      </button>
      <button
        className="bg-transparent rounded-full btn hover:bg-red-600 hover:border-red-600"
        onClick={() => swiper.slideNext()}
      >
        <FaArrowRight color="#fff" />
      </button>
    </div>
  );
};

export default SwiperNavButton;
