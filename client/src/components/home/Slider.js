import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const Slider = () => {
  return (
    <Swiper
    pagination={{
      dynamicBullets: true,
    }}
    modules={[Pagination]}
    className="mySwiper"
  >
    <SwiperSlide className="slide">
      <div className="slide-img bg-[url('../public/slider/1.jpg')]">
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="slide-img bg-[url('../public/slider/2.jpg')]">
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="slide-img bg-[url('../public/slider/3.jpg')]">
      </div>
    </SwiperSlide>
    <SwiperSlide>      
      <div className="slide-img bg-[url('../public/slider/4.jpg')]">
      </div>
      </SwiperSlide>
  </Swiper>
  )
}

export default Slider