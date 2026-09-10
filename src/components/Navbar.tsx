import logo from "../assets/logo-text.png"

const Navbar = () => {
    return (
    <nav className="container mx-auto mt-2" >
        <div className="flex justify-between" >
           <img src={logo} alt="" /> 
           <ul className="flex gap-4 items-center">
            <li><span style={{ color:"#DB2777"}}>Home</span></li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
           </ul>
            
           <div className="flex items-center gap-6" >
           <button>Sign In</button>
           <button className="rounded-full bg-pink-600 px-6 py-3 text-white">Sign Up</button>
           </div>
        </div>
    </nav>
        
    );
};

export default Navbar;