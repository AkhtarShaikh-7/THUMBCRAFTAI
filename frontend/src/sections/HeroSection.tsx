'use client'
import { CheckIcon, ChevronRightIcon, VideoIcon } from "lucide-react";
import TiltedImage from "../components/TiltImage";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
    const navigate = useNavigate();
    const specialFeatures = [
        "Instant AI-powered creation",
        "Built for creators",
        "Boost clicks & engagement",
    ];

    return (
        <div className="relative flex flex-col items-center justify-center px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="absolute top-30 -z-10 left-1/4 size-72 bg-orange-600 blur-[300px]"></div>
            <motion.a href="https://prebuiltui.com?utm_source=pixels" className="group flex items-center gap-2 rounded-full p-1 pr-3 mt-44 text-orange-100 bg-orange-200/15"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <span className="bg-orange-800 text-white text-xs px-3.5 py-1 rounded-full">
                    NEW
                </span>
                <p className="flex items-center gap-1">
                    <span>AI Thumbnails That Grab Attention Instantly</span>
                    <ChevronRightIcon size={16} className="group-hover:translate-x-0.5 transition duration-300" />
                </p>
            </motion.a>
            <motion.h1 className="text-5xl/17 md:text-5xl/21 font-medium max-w-3xl text-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
            >
                Create Scroll-Stopping Thumbnails with AI{" "}
                {/* <span className="move-gradient px-3 rounded-xl text-nowrap">Videos.</span> */}
                <span className="
  bg-gradient-to-r
  from-orange-500
  via-amber-400
  to-orange-500
  bg-[length:200%_200%]
  animate-gradient
  hover:shadow-[0_0_30px_rgba(249,115,22,0.6)]
  transition-all
  duration-300
  text-white
  px-2
  py-2
  rounded-xl
  font-semibold
"
                >Content.</span>
            </motion.h1>
            <motion.p className="text-base text-center text-slate-200 max-w-lg mt-6"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
               From gaming to business content, generate professional thumbnails optimized for higher CTR and audience engagement.</motion.p>
            <motion.div className="flex items-center gap-4 mt-8"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <button onClick={() => navigate('/generate')} className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-7 h-11">
                    Watch Demo
                </button>
                <button className="flex items-center gap-2 border border-orange-900 hover:bg-orange-950/50 transition rounded-full px-6 h-11">
                    <VideoIcon strokeWidth={1} />
                    <span>See how it works</span>
                </button>
            </motion.div>

            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-14 mt-12">
                {specialFeatures.map((feature, index) => (
                    <motion.p className="flex items-center gap-2" key={index}
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.3 }}
                    >
                        <CheckIcon className="size-5 text-orange-600" />
                        <span className="text-slate-400">{feature}</span>
                    </motion.p>
                ))}
            </div>
            {/* <TiltedImage /> */}

        </div>

    );
}