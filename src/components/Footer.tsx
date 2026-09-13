

import { IoLogoGithub } from "react-icons/io";
import banner from "../assets/logo-text.png";
import { FaXTwitter } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";

const Footer = () => {
    return (
        <footer className="bg-slate-100   container mx-auto">


            <section className="container mx-auto px-6 py-12">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">


                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <img src={banner} alt="Dev Stack" />
                        </div>

                        <p className=" text-[#64748B]  ">
                            Curated tools, technologies, and resources for developers building
                            modern software.
                        </p>


                        <div className="flex items-center gap-3 mt-6 text-2xl">
                            <a href="#" aria-label="GitHub"><IoLogoGithub /></a>
                            <a href="#" aria-label="Twitter"><FaXTwitter /></a>
                            <a href="#" aria-label="LinkedIn"><GrLinkedin /></a>
                        </div>
                    </div>
                
                    <div>
                        <h3 className="font-bold  mb-2">PRODUCT</h3>
                        <ul  className="space-y-2" >
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Technologies</a></li>
                            <li><a href="#">Projects</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold  mb-2">COMPANY</h3>

                        <ul  className="space-y-2" >
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold  mb-2">LEGAL</h3>
                        <ul  className="space-y-2" >
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>

                </div>
                <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

                    <p className="text-sm text-[#94A3B8]">
                        © 2026 DevStack. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <ul className="text-sm text-[#94A3B8] flex gap-6 ">
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Terms</a></li>
                        </ul>

                        
                    </div>

                </div>

            </section>
        </footer>
    );
};


export default Footer;