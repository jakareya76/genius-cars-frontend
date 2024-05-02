import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Card = ({ service }) => {
  return (
    <div className="p-5 border rounded-xl">
      <img
        src={service.img}
        alt="img"
        className="w-full rounded-xl h-[240px]"
      />
      <h2 className="my-4 text-[#444444] text-2xl font-bold">
        {service.title}
      </h2>
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold text-[#FF3811]">
          Price : ${service.price}
        </p>
        <Link to={`/service/${service._id}`}>
          <FaArrowRight color="#FF3811" size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Card;
