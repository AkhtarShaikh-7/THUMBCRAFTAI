import { motion } from "motion/react";
import {
    Sparkles,
    ImageIcon,
    Zap,
    Palette,
    Rocket,
    Stars,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            {/* HERO SECTION */}
            <section className="relative px-6 lg:px-20 py-28">
                {/* background glow */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/20 blur-3xl rounded-full" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full" />

                <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-300 text-sm mb-6">
                            <Sparkles size={16} />
                            AI Powered Thumbnail Generation
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                            Create <span className="text-orange-500">Viral</span> YouTube
                            Thumbnails in Seconds
                        </h1>

                        <p className="mt-8 text-zinc-400 text-lg leading-relaxed max-w-xl">
                            ThumbCraftAI helps creators generate cinematic, high CTR, eye-catching
                            thumbnails using powerful AI. From tech videos to finance,
                            gaming, fitness, and AI content — create thumbnails that people
                            actually click.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-10">
                            <Link to='/generate' className="px-7 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 transition-all font-semibold">
                                Generate Now
                            </Link>

                            <button className="px-7 py-3 rounded-xl border border-white/10 hover:border-orange-400 hover:text-orange-300 transition-all font-semibold">
                                Explore Features
                            </button>
                        </div>
                    </motion.div>

                    {/* RIGHT */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full" />

                        <div className="relative bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                                alt="thumbnail"
                                className="rounded-2xl w-full h-[500px] object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="px-6 lg:px-20 py-24">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl lg:text-5xl font-black">
                            Why Creators Love{" "}
                            <span className="text-orange-500">ThumbCraftAI</span>
                        </h2>

                        <p className="text-zinc-400 mt-5 text-lg max-w-2xl mx-auto">
                            Designed for creators who want more clicks, better branding,
                            and professional looking thumbnails instantly.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Zap size={32} />,
                                title: "AI Powered Generation",
                                desc: "Generate stunning thumbnails instantly using advanced AI models.",
                            },
                            {
                                icon: <Palette size={32} />,
                                title: "Modern Thumbnail Styles",
                                desc: "Create cinematic, futuristic, minimalist, and high CTR thumbnail styles.",
                            },
                            {
                                icon: <Rocket size={32} />,
                                title: "Boost Your CTR",
                                desc: "Designed specifically to improve YouTube click-through rates.",
                            },
                            {
                                icon: <ImageIcon size={32} />,
                                title: "Professional Quality",
                                desc: "Studio-level visuals, dramatic lighting, and modern aesthetics.",
                            },
                            {
                                icon: <Stars size={32} />,
                                title: "Custom Prompting",
                                desc: "Describe your vision and generate unique thumbnails every time.",
                            },
                            {
                                icon: <Sparkles size={32} />,
                                title: "Fast & Easy",
                                desc: "No Photoshop skills needed. Create thumbnails in seconds.",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -8 }}
                                className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-orange-500/40 transition-all"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all">
                                    {item.icon}
                                </div>

                                <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-300 transition-all">
                                    {item.title}
                                </h3>

                                <p className="text-zinc-400 leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MISSION */}
            <section className="px-6 lg:px-20 py-24">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-sm mb-8">
                        Our Mission
                    </div>

                    <h2 className="text-4xl lg:text-6xl font-black leading-tight">
                        Empowering Creators With
                        <span className="text-orange-500"> AI Creativity</span>
                    </h2>

                    <p className="mt-8 text-zinc-400 text-lg leading-relaxed">
                        We believe every creator deserves access to high-quality design.
                        ThumbCraftAI was built to remove complexity and help creators make
                        thumbnails that stand out in a crowded feed.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 lg:px-20 ">
                <div className="max-w-6xl mx-auto rounded-[40px] overflow-hidden border border-orange-500/20 bg-gradient-to-br from-orange-500/20 to-black">
                    <div className="px-8 lg:px-20 py-20 text-center">
                        <h2 className="text-4xl lg:text-6xl font-black leading-tight">
                            Ready to Create
                            <span className="text-orange-500"> Viral Thumbnails?</span>
                        </h2>

                        <p className="mt-6 mb-6 text-zinc-300 text-lg max-w-2xl mx-auto">
                            Start generating cinematic AI thumbnails and make your content
                            impossible to ignore.
                        </p>

                        <Link to='/generate' className="mt-10 px-8 py-4 rounded-2xl bg-orange-500 hover:bg-orange-600 transition-all font-bold text-lg shadow-lg shadow-orange-500/30">
                            Start Generating
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}