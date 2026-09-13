import banner from "../assets/banner-stack.png";

const Banner = () => {
  return (



<section className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 px-5 sm:px-6 py-10 text-center lg:text-left">

      
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">

        <h2 className="font-extrabold text-3xl sm:text-5xl lg:text-6xl font-inter pb-5 leading-tight">
          Build Your Ideal
          <br />
          <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h2>

        <p className="pb-6 text-sm  sm:text-base text-slate-600 leading-6 max-w-xl">
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that fits
          your next project.
        </p>
        
        <div className="flex flex-row items-center justify-center lg:justify-start gap-3 w-full sm:w-auto">
          <button className="btn rounded-lg border-none bg-linear-to-r from-orange-500 to-pink-500 text-white hover:opacity-90 px-4 sm:px-6">
            Explore Technologies
          </button>
          <button className="btn btn-outline rounded-lg border-slate-300 text-slate-700 hover:bg-slate-100 px-4 sm:px-6">
            Learn More
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center overflow-visible">
  <img
    src={banner}
    alt="hero img"
    className=" w-[650px] max-w-none h-auto -my-10 sm:w-[550px] md:w-[500px] lg:w-[500px] xl:w-[550px]"/>
</div>

    </section>

  );
};

export default Banner;

