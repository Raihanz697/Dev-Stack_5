import { IoLogoGithub } from "react-icons/io";
import banner from "../assets/logo-text.png";
import { FaXTwitter } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";

const Footer = () => {
    return (
        <footer className="bg-slate-100   container mx-auto">


            <section className="container mx-auto px-6 py-12">

                <div className="grid   grid-cols-4 gap-">


                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <img src={banner} alt="" />
                        </div>

                        <p className=" text-[#64748B]  ">
                            Curated tools, technologies, and resources for developers building
                            modern software.
                        </p>


                        <div className="flex items-center gap-3 mt-6 text-2xl">
                            <IoLogoGithub />
                            <FaXTwitter />
                            <GrLinkedin />
                        </div>
                    </div>
                
                    <div>
                        <h3 className="font-bold  mb-2">PRODUCT</h3>
                        <ul  className="space-y-2" >
                            <li>Home</li>
                            <li>Technologies</li>
                            <li>Projects</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold  mb-2">COMPANY</h3>

                        <ul  className="space-y-2" >
                            <li>About</li>
                            <li>Contact</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold  mb-2">LEGAL</h3>
                        <ul  className="space-y-2" >
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>

                </div>
                <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

                    <p className="text-sm text-[#94A3B8]">
                        © 2026 DevStack. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <ul className="text-sm text-[#94A3B8] flex gap-6 ">
                            <li>Privacy</li>
                            <li>Terms</li>
                        </ul>

                        
                    </div>

                </div>

            </section>
        </footer>
    );
};


export default Footer;