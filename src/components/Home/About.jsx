import aboutImageOne from "../../assets/images/about_us/person.jpg";
import aboutImageTow from "../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="px-5 py-20">
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
        <div className="w-full md:w-1/2">
          <div className="relative w-full">
            <img
              src={aboutImageOne}
              alt="person"
              className="w-[85%] rounded-xl h-[480px] object-cover bg-center bg-cover"
            />
            <img
              src={aboutImageTow}
              alt="parts"
              className="absolute right-0  w-[300px] h-[300px] object-cover -bottom-16 rounded-xl border-[10px] border-white"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="p-8">
            <h4 className="text-xl font-semibold text-[#FF3811]">About Us</h4>
            <h2 className="text-4xl max-w-[480px] font-bold my-5 font-inter lg:text-6xl">
              We are qualified & of experience in this field
            </h2>
            <p className="text-[#737373]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p className="text-[#737373] my-5">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>

            <button className="btn px-8 bg-[#FF3811] text-lg text-white hover:bg-red-600">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
