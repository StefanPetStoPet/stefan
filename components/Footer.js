import { useState } from "react";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { Icon } from "@iconify/react";

export default function Footer() {
  const [active, setActive] = useState("whatsapp");

  const contacts = {
    whatsapp: {
      title: "WhatsApp",
      icon: "mdi:whatsapp",
      color: "from-green-400 to-green-600",
      text: "Odgovor u roku od 60 minuta.",
      value: "Poruka na WhatsApp",
      action: "https://wa.me/381XXXXXXXX",
    },
    email: {
      title: "Email",
      icon: "mdi:gmail",
      color: "from-red-400 to-yellow-400",
      text: "Pošaljite mi detalje vašeg projekta.",
      value: "stefankp505@gmail.com",
      action: "mailto:stefankp505@gmail.com",
    },
    phone: {
      title: "Poziv",
      icon: "mdi:phone",
      color: "from-blue-400 to-indigo-600",
      text: "Direktan razgovor za brze dogovore.",
      value: "+382 69 458 654",
      action: "tel:+381XXXXXXXX",
    },
  };

  const activeContact = contacts[active];

  const tabColors = {
    whatsapp: "bg-white/40 text-white",
    email:
      "bg-white/40 text-white",
    phone: "bg-white/40 text-white",
  };

  return (
    <section
      id="contact"
      className="relative w-full py-20 bg-gradient-to-br from-blue-500 via-indigo-600 to-indigo-900 transition-all duration-1000 ease-in-out"
    >
      {/* Background overlay */}
      <div
        className="absolute inset-0 w-full h-full opacity-50 pointer-events-none"
        style={{
          backgroundImage: "url('/backgroundLines.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      />

      <div className="relative max-w-6xl mx-auto flex flex-col items-center px-6">

        {/* TITLE */}
        <h2 className="text-5xl md:text-6xl font-semibold text-white text-center mb-10">
          Zapocni konverzaciju
        </h2>

        {/* CONTACT TABS CARD */}
        <div className="w-full max-w-3xl backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl p-6 shadow-2xl">

          {/* Tabs */}
          <div className="flex gap-3 justify-center mb-6">
            {Object.keys(contacts).map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                  active === key
                    ? tabColors[key]
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                <Icon icon={contacts[key].icon} className="text-xl" />
                {contacts[key].title}
              </button>
            ))}
          </div>

          {/* Active content */}
          <div
  className={`p-6 rounded-xl bg-gradient-to-r ${activeContact.color} text-white transition-all duration-500`}
> {/* Icon + title */}
            <div className="flex items-center gap-3 mb-3">
              <Icon icon={activeContact.icon} className="text-2xl" />
              <h3 className="text-xl font-semibold tracking-tight">
                {activeContact.title}
              </h3>
            </div>

            {/* Text */}
            <div className="mb-4 space-y-1">
              <p className="text-white/95 font-medium">
                {activeContact.text}
              </p>

              <p className="text-white/70 text-sm">
                Odgovaram u roku od nekoliko sati — najbrže preko WhatsApp-a.
              </p>
            </div>

            {/* CTA */}
            <a
              href={activeContact.action}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-white/15 hover:bg-white/25 border border-white/30 transition-all duration-300 font-semibold group"
            >
              <span className="group-hover:translate-x-0.5 transition">
                {activeContact.value}
              </span>

              <span className="text-white/60 group-hover:text-white transition">
                →
              </span>
            </a>
          </div>
        </div>

        {/* SOCIAL ICONS */}
        <div className="mt-10 flex gap-6 backdrop-blur-5xl bg-blue-500/50 border border-white/10 rounded-2xl px-6 py-4 shadow-lg transition-all duration-300">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-white/80 hover:text-white transition text-2xl" />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-white/80 hover:text-white transition text-2xl" />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-white/80 hover:text-white transition text-2xl" />
          </a>
        </div>

        {/* FOOTER NOTE */}
        <p className="mt-8 text-white/40 text-sm text-center">
          Stvorimo zajedno nešto što vrijedi
        </p>
      </div>
    </section>
  );
}