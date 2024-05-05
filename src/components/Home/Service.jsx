import { useEffect, useState } from "react";
import Card from "../Card";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getAllServices = async () => {
      const res = await fetch("http://localhost:5000/services");
      const data = await res.json();

      setServices(data);
    };

    getAllServices();
  }, []);

  return (
    <div className="px-5 py-20">
      <h4 className="text-xl font-semibold text-[#FF3811] text-center">
        Service
      </h4>
      <div className="text-center">
        <h2 className="my-3 text-5xl font-bold">Our Service Area</h2>
        <p className="max-w-xl mx-auto text-[#737373]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>

      <div className="flex items-center justify-center mt-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            return <Card key={service._id} service={service} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
