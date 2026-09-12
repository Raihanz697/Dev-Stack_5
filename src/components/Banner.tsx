import banner from "../assets/banner-stack.png";

const Banner = () => {
  return (

    <section className="container mx-auto flex justify-between items-center  bg-blue-100 ">
      <div className="  text-left">
        <h2 className="font-extrabold text-6xl font-inter pb-6">
          Build Your Ideal <br />
          <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h2>

        <p className="pb-6  ">
          Explore frontend, backend, database, and tooling options,<br />
          compare them side by side, and put together the stack that fits <br />
          your next project.
        </p>

        <div className="flex items-center  justify-start gap-4">
          <button className="btn rounded-lg border-none bg-linear-to-r from-orange-500 to-pink-500 text-white hover:opacity-90">
            Explore Technologies
          </button>
          <button className="btn btn-outline rounded-lg border-slate-300 text-slate-700 hover:bg-slate-100">
            Learn More
          </button>
        </div>
      </div>
      <div>
        <img src={banner} alt="hero img" />
      </div>
    </section>
    

  );
};

export default Banner;