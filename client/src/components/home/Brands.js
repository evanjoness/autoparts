import { Virtual } from "swiper";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAllBrandsQuery } from "../../store/services/brandService";
import Skeleton from "../skeleton/Skeleton";
import Thumbnail from "../skeleton/Thumbnail";
const Brands = () => {
  const { data, isFetching } = useAllBrandsQuery();
  let i = 1;
  return isFetching ? (
    <div className="flex flex-wrap -mx-4 mb-10">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div
          className="w-6/12 sm:w-4/12 md:w-3/12 lg:w-[20%] xl:w-2/12 p-4"
          key={item}
        >
          <Skeleton>
            <Thumbnail />
          </Skeleton>
        </div>
      ))}
    </div>
  ) : (
    data?.brands.length > 0 && (
      <Swiper
        modules={[Virtual]}
        spaceBetween={20}
        slidesPerView={3}
        virtual
        className="w-full h-[150px] mb-10"
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1080: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 6,
          },
        }}
      >
        {data.brands.map((category, index) => {
          if (i >= 5) {
            i = 1;
          } else {
            i++;
          }
          return (
            <SwiperSlide
              className="w-full overflow-hidden  rounded-lg relative"
              key={index}
              virtualIndex={index}
            >
              <div className="w-full h-[150px] rounded-lg overflow-hidden">
                <img
                  src={`./slider/${i}.jpg`}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 w-full h-full bg-black/50 flex items-center justify-center p-4">
                <Link
                  to={`/brand-models/${category._id}`}
                  className="text-white text-base font-medium capitalize"
                >
                  {category.name}
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    )
  );
  return <div>Brands</div>;
};

export default Brands;