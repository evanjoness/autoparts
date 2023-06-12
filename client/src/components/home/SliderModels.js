import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";
import { useAllModelsByBrandQuery } from "../../store/services/brandService";
import Spinner from "../Spinner";

const SliderModels = ({ brandId }) => {
  const { data, isFetching } = useAllModelsByBrandQuery(brandId);
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
      {data?.models.length > 0 &&
        data?.models.map((model, index) => (
          <SwiperSlide className="slide" key={model._id}>
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
                  {model.brandId.name} {model.model} {model.year} {model.carBody} {model.carEngine} {model.enginePower}
                </h1>
                <div className="mt-10">
                  <Link
                    to={`/products-by-model/${model._id}`}
                    className="btn btn-indigo text-sm"
                  >
                    browse collections
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default SliderModels;
