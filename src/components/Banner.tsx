import  banner from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <div className="flex justify-between container mx-auto mt-4 bg-purple-500">
            <div>
            <h2 className="font-extrabold">Build Your Ideal <br /> <span>Development Stack</span></h2>
            <h3>Explore frontend, backend, database, and tooling options,<br />
            compare them side by side, and put together the stack that fits your <br />
            next project.</h3>

            <div className="flex items-center gap-6 mt-4" >
           <button className=" rounded-lg p-4 bg-linear-to-r from-orange-500 to-pink-500 text-white">Explore Technologies</button>
           <button className="btn  rounded-lg border">Learn More</button>
           </div>
            </div>
            <div >
                <img src={banner} alt="" />
            </div>
        </div>
        
    );
};

export default Banner;