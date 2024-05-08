import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

import useAxiosSecure from "../hooks/useAxiosSecure";

const Booking = () => {
  const [bookingData, setBookingData] = useState([]);
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const handleDelete = async (id) => {
    const procead = confirm("Are you sure you want to delete?");

    if (procead) {
      const res = await fetch(`http://localhost:5000/booking/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.deletedCount > 0) {
        setBookingData((allBooking) => {
          return allBooking.filter((booking) => {
            return booking._id !== id;
          });
        });
      }
    }
  };

  const url = `/booking?email=${user?.email}`;

  useEffect(() => {
    const getMyBooking = async () => {
      const res = await axiosSecure.get(url);

      setBookingData(res.data);
    };

    getMyBooking();
  }, [url]);

  return (
    <div className="container py-10 mx-auto">
      <h2 className="mb-5 text-xl font-semibold text-center">
        Booking: {bookingData.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookingData.map((booking) => {
              return (
                <tr key={booking._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="w-12 h-12 mask mask-squircle">
                          <img
                            src={booking.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{booking.service}</div>
                        <div className="text-sm opacity-50">{booking.date}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h4 className="font-semibold capitalize">
                      {booking.address}
                    </h4>
                  </td>
                  <td>${booking.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(booking._id)}
                      className="btn bg-[#FF3811] text-white hover:bg-[#FF3811]"
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
