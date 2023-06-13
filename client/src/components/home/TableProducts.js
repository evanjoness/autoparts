import { Virtual } from "swiper";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAllProductsByModelQuery } from "../../store/services/modelService";
import Skeleton from "../skeleton/Skeleton";
import Thumbnail from "../skeleton/Thumbnail";

const Models = ({ modelId }) => {
  const { data, isFetching } = useAllProductsByModelQuery(modelId);
  console.log(12, data)
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
    111222
  );
};

export default Models;
