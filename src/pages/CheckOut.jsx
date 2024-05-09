import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const CheckOut = () => {
  const { user } = useContext(AuthContext);

  const service = useLoaderData();

  const { title, price, img } = service;

  const handleCheckOut = async (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const date = form.date.value;

    const order = {
      customerName: name,
      email,
      phone,
      address,
      date,
      img,
      service: title,
      price,
    };

    try {
      const res = await fetch("https://genius-cars-api.vercel.app/booking", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(order),
      });

      const data = await res.json();

      if (data.acknowledged) {
        form.reset();
        alert("Booking Added");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container py-10 mx-auto">
      <h2 className="my-5 text-xl font-semibold text-center">{title}</h2>
      <h2 className="my-5 text-xl font-semibold text-center">
        price: ${price}
      </h2>

      <h2></h2>

      <div className="w-full card shrink-0">
        <form
          onSubmit={handleCheckOut}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 "
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              defaultValue={user?.email}
              disabled
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              name="address"
              placeholder="Your Address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="col-span-1 form-control md:col-span-2">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              placeholder="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="col-span-1 mt-6 form-control md:col-span-2">
            <button className="btn w-full bg-[#FF3811] text-white hover:bg-[#FF3811]">
              Order Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
