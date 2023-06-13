import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";
import { useAllBrandsQuery } from "../../store/services/brandService";
import Spinner from "../Spinner";
const Slider = () => {
  const { data, isFetching } = useAllBrandsQuery();
  console.log(data, isFetching);
  return isFetching ? (
    <div className="my-container h-[70vh] flex items-center justify-center">
      <Spinner />
    </div>
  ) : (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {data?.brands.length > 0 &&
        data?.brands.map((brand, index) => (
          <SwiperSlide className="slide" key={brand._id}>
            <div className={`slide-img`}>
              <img
                src={`./slider/${index + 1}.jpg`}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="absolute inset-0 w-full h-full bg-black/50">
              <div className="my-container h-[70vh] flex flex-col items-center justify-center">
                <h1 className="text-white text-xl font-medium capitalize">
                  {brand.name}
                </h1>
                <div className="mt-10">
                  <Link
                    to={`/`}
                    className="btn btn-indigo text-sm"
                  >
                    browse products
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Slider;