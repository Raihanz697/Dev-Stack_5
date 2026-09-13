import banner from "../assets/banner-stack.png";

const Banner = () => {
  return (

    <section className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 px-6 py-10 text-center lg:text-left">
      <div className="  text-left">
        <h2 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl font-inter pb-6">
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

        <div className="flex flex-row items-center justify-center lg:justify-start gap-3">
  <button className="btn rounded-lg border-none bg-linear-to-r from-orange-500 to-pink-500 text-white hover:opacity-90 px-4 sm:px-6">
    Explore Technologies
  </button>
  <button className="btn btn-outline rounded-lg border-slate-300 text-slate-700 hover:bg-slate-100 px-4 sm:px-6">
    Learn More
  </button>
</div>
      </div>
      <div>
        <img src={banner} alt="hero img" className="w-98 sm:w-96 md:w-[28rem] lg:w-[32rem] xl:w-auto mx-auto" />
      </div>
    </section>
    

  );
};

export default Banner;

