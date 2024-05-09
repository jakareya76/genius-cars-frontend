import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();

  const [service, setService] = useState({});

  useEffect(() => {
    const getServiceData = async () => {
      const res = await fetch(
        `https://genius-cars-api.vercel.app/service/${id}`
      );

      const data = await res.json();
      setService(data);
    };

    getServiceData();
  }, [id]);

  return (
    <div>
      <h2 className="my-10 text-2xl font-bold text-center text-red-500">
        Service Details Coming Soon!!
      </h2>

      <Link
        to={`/checkout/${service._id}`}
        className="btn bg-[#FF3811] text-white hover:bg-red-600"
      >
        Proceed To Checkout
      </Link>
    </div>
  );
};

export default ServiceDetails;
