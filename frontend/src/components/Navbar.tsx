import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContetx";

export default function Navbar() {
    const { isLoggedIn, user, logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            {/* Navbar */}
            <motion.nav
                className="fixed top-0 left-0 z-50 w-full backdrop-blur bg-black/20 border-b border-white/10"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 70,
                    mass: 1
                }}
            >
                <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 py-4">

                    {/* Logo */}
                    <Link to="/">
                        <img
                            src="/logo.png"
                            alt="logo"
                            className="h-10 sm:h-12 w-auto"
                        />
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-8 text-sm lg:text-base font-medium">
                        <Link
                            to="/"
                            className="hover:text-orange-300 transition"
                        >
                            Home
                        </Link>

                        <Link
                            to="/generate"
                            className="hover:text-orange-300 transition"
                        >
                            Generate
                        </Link>

                        {
                            isLoggedIn ? <Link
                                to="/my-generation"
                                className="hover:text-orange-300 transition"
                            >
                                My Generations
                            </Link>
                                : <Link
                                    to="/about"
                                    className="hover:text-orange-300 transition"
                                >
                                    About
                                </Link>
                        }

                        <Link
                            to="/contact"
                            className="hover:text-orange-300 transition"
                        >
                            Contact us
                        </Link>
                    </div>

                    {/* Desktop Button */}

                    <div className="flex items-center gap-2">
                        {
                            isLoggedIn ? (
                                <div className="relative group">
                                   <button className="rounded-full size-8 bg-white/20 border-2 border-white/10">
                                     {user?.name.charAt(0).toUpperCase()}
                                   </button>
                                   <div className="absolute hidden group-hover:block top-6 right-0 pt-4">
                                    <button onClick={()=>logout()} className="bg-white/20 border-2 border-white/10 px-5 py-1.5">
                                        Logout
                                    </button>
                                   </div>
                                </div>
                            ) : (
                                <button
                                    onClick={() => navigate("/login")}
                                    className="hidden md:block px-5 lg:px-6 py-2.5 bg-orange-500 hover:bg-orange-400 active:scale-95 transition-all rounded-full text-sm lg:text-base"
                                >
                                    Get Started
                                </button>
                            )
                        }
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="md:hidden"
                    >
                        <MenuIcon
                            size={28}
                            className="active:scale-90 transition"
                        />
                    </button>
                    </div>


                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-[100] bg-black/80 backdrop-blur-lg flex flex-col items-center justify-center gap-8 text-xl md:hidden transition-all duration-300 ${isOpen
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-full opacity-0"
                    }`}
            >

                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-6 right-6 p-2 rounded-full bg-orange-500 hover:bg-orange-600 transition"
                >
                    <XIcon size={28} />
                </button>

                {/* Mobile Links */}
                <Link
                    onClick={() => setIsOpen(false)}
                    to="/"
                    className="hover:text-orange-300 transition"
                >
                    Home
                </Link>

                <Link
                    onClick={() => setIsOpen(false)}
                    to="/generate"
                    className="hover:text-orange-300 transition"
                >
                    Generate
                </Link>

                {
                    isLoggedIn ? 
                    <Link
                    onClick={() => setIsOpen(false)}
                    to="/my-generation"
                    className="hover:text-orange-300 transition"
                >
                    My Generations
                </Link>
                 : <Link
                    onClick={() => setIsOpen(false)}
                    to="#"
                    className="hover:text-orange-300 transition"
                >
                    About
                </Link>

                }

                

                <Link
                    onClick={() => setIsOpen(false)}
                    to="#"
                    className="hover:text-orange-300 transition"
                >
                    Contact us
                </Link>

                {
                    isLoggedIn ? <button onClick={()=>{setIsOpen(false);logout()}}  className="px-6 py-3 bg-orange-500 hover:bg-orange-400 rounded-full transition">Logout</button>
                    : <Link onClick={()=>setIsOpen(false)} to='/login'>Login</Link>
                }

                
                
            </div>
        </>
    );
}