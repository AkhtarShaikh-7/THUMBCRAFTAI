import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* HERO */}
      <section className="relative px-6 lg:px-20 py-28">
        {/* background glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full" />

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-300 text-sm mb-6">
              <Send size={16} />
              Get In Touch
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              Contact <span className="text-orange-500">ThumbCraftAI</span>
            </h1>

            <p className="mt-8 text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Have questions, feedback, or partnership ideas? We’d love to hear
              from you. Reach out and let’s build something amazing together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="px-6 lg:px-20 pb-28">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <h2 className="text-3xl font-black mb-6">
                Let’s Connect 🚀
              </h2>

              <p className="text-zinc-400 leading-relaxed">
                Whether you’re a creator, business owner, or just exploring AI
                thumbnails, feel free to contact us anytime.
              </p>

              <div className="space-y-6 mt-10">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 text-orange-400 flex items-center justify-center">
                    <Mail size={24} />
                  </div>

                  <div>
                    <p className="text-zinc-400 text-sm">Email</p>
                    <h3 className="text-lg font-semibold hover:text-orange-300 transition-all cursor-pointer">
                      support@thumblify.com
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 text-orange-400 flex items-center justify-center">
                    <Phone size={24} />
                  </div>

                  <div>
                    <p className="text-zinc-400 text-sm">Phone</p>
                    <h3 className="text-lg font-semibold hover:text-orange-300 transition-all cursor-pointer">
                      +91 98765 43210
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 text-orange-400 flex items-center justify-center">
                    <MapPin size={24} />
                  </div>

                  <div>
                    <p className="text-zinc-400 text-sm">Location</p>
                    <h3 className="text-lg font-semibold hover:text-orange-300 transition-all cursor-pointer">
                      Goa, India
                    </h3>
                  </div>
                </div>
              </div>

              {/* SOCIALS */}
              <div className="flex items-center gap-4 mt-10">
                {[Instagram, Twitter, Youtube].map((Icon, index) => (
                  <button
                    key={index}
                    className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-300 transition-all flex items-center justify-center"
                  >
                    <Icon size={22} />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <h2 className="text-3xl font-black mb-8">
                Send a Message
              </h2>

              <form className="space-y-6">
                {/* NAME */}
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-5 py-4 rounded-2xl bg-black/40 border border-white/10 focus:border-orange-500 focus:outline-none text-white placeholder:text-zinc-500"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-5 py-4 rounded-2xl bg-black/40 border border-white/10 focus:border-orange-500 focus:outline-none text-white placeholder:text-zinc-500"
                  />
                </div>

                {/* SUBJECT */}
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Project Inquiry"
                    className="w-full px-5 py-4 rounded-2xl bg-black/40 border border-white/10 focus:border-orange-500 focus:outline-none text-white placeholder:text-zinc-500"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Write your message..."
                    className="w-full px-5 py-4 rounded-2xl bg-black/40 border border-white/10 focus:border-orange-500 focus:outline-none text-white placeholder:text-zinc-500 resize-none"
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-orange-500 hover:bg-orange-600 transition-all font-bold text-lg shadow-lg shadow-orange-500/20"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}