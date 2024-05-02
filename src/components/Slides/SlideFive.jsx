import bannerImageFive from "../../assets/images/banner/4.jpg";

const SlideFive = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bannerImageFive})` }}
      className="w-full h-[calc(100vh-100px)] bg-orange-300 rounded-xl bg-cover object-cover bg-center bg-no-repeat"
    >
      <div className="flex flex-col items-center justify-center w-full h-full rounded-xl md:flex-row bg-gradient-to-r from-zinc-950 to-transparent">
        <div className="px-10">
          <h2 className="lg:max-w-[480px] md:max-w-2xl text-5xl font-bold leading-snug text-white font-inter lg:text-7xl">
            Easy Booking, Top Service
          </h2>
          <p className="max-w-md my-2 font-normal text-white">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex items-center gap-8 mt-8">
            <button className="btn bg-[#FF3811] border-none hover:bg-red-600 text-white px-8">
              Discover More
            </button>
            <button className="px-8 text-white btn btn-outline">
              Latest Project
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2"></div>
      </div>
    </div>
  );
};

export default SlideFive;
