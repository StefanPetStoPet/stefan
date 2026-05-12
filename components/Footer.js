import ContactForm from "@/components/ContactForm";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <section
      id="contact"
      className="relative w-full py-20 bg-gradient-to-br from-[#00003f] via-[#1206b6] to-[#4508c0]"
    >
      {/* Background overlay texture (same vibe as stats section) */}
      <div
        className="absolute inset-0 w-full h-full opacity-50 pointer-events-none"
        style={{
          backgroundImage: "url('/backgroundLines.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      />

      <div className="relative max-w-6xl mx-auto flex flex-col items-center px-6">

        {/* TITLE (same hierarchy as StatsSection) */}
        <h2 className="text-5xl md:text-6xl font-semibold text-white text-center mb-10">
          Zapocni konverzaciju
        </h2>

        {/* Glass Card wrapper like stats cards */}
        <div className="w-full max-w-3xl">
          <ContactForm />
        </div>

        {/* SOCIAL ICONS (clean, inside glass style row) */}
        <div className="mt-10 flex gap-6 backdrop-blur-5xl bg-gradient-to-r from-[#4f6cff] to-[#6aa9ff] border border-white/10 rounded-2xl px-6 py-4 shadow-lg">
          
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-white/80 hover:text-white transition text-2xl" />
          </a>

          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white/80 hover:text-white transition text-2xl" />
          </a>

          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white/80 hover:text-white transition text-2xl" />
          </a>

        </div>

        {/* Small footer note */}
        <p className="mt-8 text-white/40 text-sm text-center">
          Stvorimo zajedno nešto što vrijedi
        </p>

      </div>
    </section>
  );
}