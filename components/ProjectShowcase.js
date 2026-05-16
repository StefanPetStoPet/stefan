"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  FaLightbulb,
  FaChartLine,
  FaProjectDiagram,
  FaRocket,
} from "react-icons/fa";

const images = [
    "/mockup5.png",
    "/mockup2.png",
    "/mockup3.png",
  ];


const sharedTransition = {
  type: "spring",
  stiffness: 90,
  damping: 14,
  mass: 1,
};

const leftVariant = {
  hidden: { opacity: 0, x: -300 },
  show: {
    opacity: 1,
    x: 0,
    transition: sharedTransition,
  },
};

const rightVariant = {
  hidden: { opacity: 0, x: 300 },
  show: {
    opacity: 1,
    x: 0,
    transition: sharedTransition,
  },
};

export default function ProjectShowcase({
  projectImages,
  mobileImages,
  projectImg,
}) {
  const [activeItem, setActiveItem] = useState(null);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: true });

  const items = [
  {
    icon: <FaLightbulb />,
    title: "Analiza ciljane publike",
    subtitle: "Razumijevanje za koga dizajniramo",
    text: `Svaki projekat počinje razumijevanjem vaše publike.

Analiziram ponašanje korisnika, njihova očekivanja i namjeru — šta traže, šta ih motiviše i šta ih dovodi do konverzije.

Kombinovanjem toga sa analizom konkurencije i provjerenim obrascima, gradim jasnu osnovu za odluke koje nisu zasnovane na pretpostavkama, već na onome što zaista funkcioniše.`,
  },
  {
    icon: <FaChartLine />,
    title: "Dizajn za konverzije",
    subtitle: "Ne samo vizuelno — već i performanse",
    text: `Dizajn nije tu da samo izgleda dobro — već da vodi korisnika ka akciji.

Strukturiram layout, hijerarhiju i tokove na osnovu CRO principa:
• jasnoća poruke  
• jaka vizuelna hijerarhija  
• jednostavno korisničko iskustvo  

Svaki element ima svoju svrhu — da poveća angažman, povjerenje i konverzije.`,
  },
  {
    icon: <FaProjectDiagram />,
    title: "Razvoj",
    subtitle: "Od dizajna do gotovog proizvoda",
    text: `Nakon što definišem dizajn u Figmi, pretvaram ga u funkcionalan proizvod kroz razvoj.

Uglavnom radim sa Shopify-jem, kreirajući brze, responzivne i skalabilne sajtove koji u potpunosti prate dizajn.

Pošto razumijem i dizajn i development, proces je mnogo glađi — bez praznina i nesporazuma, samo čista realizacija.`,
  },
  {
    icon: <FaRocket />,
    title: "Odravanje + Analitika i optimizacija",
    subtitle: "Kontinuirano poboljšavanje",
    text: `Lansiranje je tek početak.

Analiziram kako korisnici koriste sajt i identifikujem mogućnosti za poboljšanje.

• praćenje ponašanja  
• uvidi u konverzije  
• optimizacija performansi  

To mi omogućava da stalno unapređujem rezultate — pretvarajući dobre rezultate u još bolje tokom vremena.`,
  },
];

  return (
    <section
  ref={sectionRef}
  className="overflow-x-hidden relative min-h-screen py-24 w-full bg-[linear-gradient(230deg,_#e6eaff,_#e6eefa_25%,_#e3f2f9_64%,_#d6f6ff)]"
>
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-12">

       

        <motion.div
  initial="hidden"
  animate={isInView ? "show" : "hidden"}
  className="flex flex-col md:flex-row gap-10 w-full items-stretch"
>

  {/* IMAGE CARD */}
  <motion.div
    variants={leftVariant}
    className="w-full md:w-3/5 flex items-center justify-center"
  >
   <div className="backdrop-blur-xl bg-[#fafafa]/100 border border-white/10 rounded-3xl p-8 shadow-2xl w-full">

  {/* Desktop */}
  <img
    src={projectImages[projectImg]}
    alt="desktop mockup"
    className="
      hidden md:block
      w-full
      max-w-xl
      object-contain
      rounded-xl
    "
  />

  {/* Mobile */}
  <img
    src={mobileImages[projectImg]}
    alt="mobile mockup"
    className="
      block md:hidden
      w-full
      h-[400px]
      max-w-[400px]
      mx-auto
      object-cover
      rounded-xl
    "
  />

</div>
  </motion.div>

  {/* TEXT CARD */}
  <motion.div
    variants={rightVariant}
    className="w-full md:w-2/5"
  >
    <div className="backdrop-blur-xl bg-[#fafafa]/100 border border-white/10 rounded-3xl p-8 h-full">

      <AnimatePresence mode="wait">
        {activeItem === null ? (

          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >

            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-black/85">
                Moj proces
              </h2>
              <p className="text-black/50 text-sm mt-1">
                Pristup, strategija i rezultati
              </p>
            </div>

            {items.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveItem(index)}
                className="group cursor-pointer flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-blue-600/3 hover:bg-[#e6eaff]/100 transition"
              >
                <div className="text-xl text-blue-600/100 transition">
                  {item.icon}
                </div>

                <div>
                  <div className="text-black/85 font-medium">
                    {item.title}
                  </div>
                  <div className="text-black/50 text-sm">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            ))}

          </motion.div>

        ) : (

          <motion.div
            key="detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col h-full"
          >

            <button
              onClick={() => setActiveItem(null)}
              className="mb-6 text-black/50 hover:text-black transition text-sm"
            >
              ← Nazad
            </button>

            <div className="flex items-center gap-3 mb-2">
              <div className="text-xl text-blue-600/100">
                {items[activeItem].icon}
              </div>

              <h3 className="text-xl font-semibold text-blue-600/100">
                {items[activeItem].title}
              </h3>
            </div>

            <p className="text-black/50 text-sm mb-4">
              {items[activeItem].subtitle}
            </p>

            <p className="text-black/70 text-[15px] leading-relaxed whitespace-pre-line">
              {items[activeItem].text}
            </p>

          </motion.div>

        )}
      </AnimatePresence>

    </div>
  </motion.div>

</motion.div>


        
      </div>
    </section>
  );
}





// "use client";

// import { useState, useRef } from "react";
// import { motion, AnimatePresence, useInView } from "framer-motion";

// export default function ProjectShowcase({
//   projectImages,
//   projectImg,
// }) {
//   const [activeItem, setActiveItem] = useState(null);

//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { amount: 0.3, once: true });

//   const items = [
//     {
//       title: "What I Do",
//       subtitle: "Design + development mindset",
//       text: `I started as a front-end developer, which gave me a strong understanding of how products are built.

// Now I focus on UI/UX design — creating interfaces that are both visually strong and easy to develop.

// This allows me to bridge the gap between design and development, making collaboration smoother and faster.`,
//     },
//     {
//       title: "Results I Focus On",
//       subtitle: "Real impact, not just visuals",
//       text: `My work is focused on improving business metrics.

// • +1K monthly organic traffic  
// • +150% inbound calls  
// • +50% average order value  

// I constantly study user behavior, CRO and growth strategies to deliver measurable results.`,
//     },
//     {
//       title: "How I Approach Projects",
//       subtitle: "Structured and research-driven",
//       text: `Every project starts with research — audience, competitors and proven patterns.

// Then I define direction through moodboards and structure through CRO-based wireframes.

// Execution in Figma follows best practices: clean systems, auto-layout, scalable components and consistency.`,
//     },
//     {
//       title: "What Makes Me Different",
//       subtitle: "Built for results",
//       text: `I don’t treat design as decoration.

// • I focus on revenue impact  
// • I adapt instead of forcing a style  
// • I constantly improve and learn  

// I design based on what works — not assumptions.`,
//     },
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       id="projects"
//       className="relative py-20 w-full overflow-hidden bg-[#05000d]"
//     >
//       {/* BACKGROUND SPLIT */}
//       {/* BACKGROUND SPLIT */}
// <div className="pointer-events-none absolute inset-0 bg-[#f5f5f5]">
//   {/* RIGHT SIDE (ANIMATED OVERLAY) */}
//   <motion.div
//     className="absolute top-0 right-0 w-[40%] h-full bg-[#1F61D6]"
//     initial={{ x: "100%" }}
//     animate={isInView ? { x: 0 } : { x: "100%" }}
//     transition={{
//       duration: 2.8,
//       ease: [0.22, 1, 0.36, 1],
//     }}
//   />
// </div>

//       <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center">

//         {/* TITLE */}
//        <div
//   className="relative w-full mb-20 text-left pb-12"
//   style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
// >
//   <h2 className="text-5xl md:text-6xl font-bold leading-tight flex justify-center bg-gradient-to-b from-[#1F61D6] via-[#1F61D6] to-[#1F61D6] bg-clip-text text-transparent">
//     My Approach{" "}
//     <span
//       className="text-[#f5f5f5] ml-70"
//       style={{
//         WebkitTextStroke: "0px transparent",
//         textShadow: "none",
//       }}
//     >
//       to Design
//     </span>
//   </h2>

//   {/* FULL-WIDTH ANIMATED BORDER */}
//   <motion.div
//     className="absolute left-1/2 -translate-x-1/2 w-screen h-[0px] bg-[#1F61D6]"
//     style={{
//       top: "calc(100% + 24px)", // spacing under title
//       transformOrigin: "left",
//     }}
//     initial={{ scaleX: 0 }}
//     animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
//     transition={{
//       duration: 3.8,
//       ease: [0.22, 1, 0.36, 1],
//     }}
//   />
// </div>

//         {/* CONTENT WRAPPER */}
//         <div className="w-full space-y-28 flex flex-col items-center">

//           <motion.div
//             className="w-full flex justify-center"
//             initial={{ y: 60, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
//             viewport={{ once: true, amount: 0.3 }}
//           >
//             <div className="flex w-full max-w-6xl h-[90vh] rounded-3xl overflow-hidden">

//               {/* LEFT IMAGE */}
//               <div className="relative w-[65%] h-full flex items-center justify-start pl-10">
//                 <img
//                   src={projectImages[projectImg]}
//                   alt="mockup"
//                   className="w-[92%] h-[88%] object-contain transition-all duration-1000 ease-in-out"
//                 />
//               </div>

//               {/* RIGHT CONTENT */}
//               <div className="relative w-[35%] h-full flex flex-col justify-center px-12">

//                 <AnimatePresence mode="wait">
//                   {activeItem === null ? (
//                     <motion.div
//                       key="list"
//                       initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
//                       animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//                       exit={{ opacity: 0, y: -18, filter: "blur(10px)" }}
//                       transition={{ duration: 0.4 }}
//                       className="space-y-8"
//                     >
//                       <div className="mb-10">
//                         <h2 className="text-[35px] font-semibold text-white tracking-tight">
//                           About My Work
//                         </h2>
//                         <p className="text-white/70 text-sm mt-1">
//                           Approach, results and what sets me apart
//                         </p>
//                       </div>

//                       {items.map((item, index) => (
//                         <div
//                           key={index}
//                           onClick={() => setActiveItem(index)}
//                           className="group cursor-pointer pl-4 border-l border-white/90 opacity-50 hover:opacity-100"
//                         >
//                           <div className="text-[18px] font-medium text-white">
//                             {item.title}
//                           </div>
//                           <div className="text-[16px] text-white/70 mt-1">
//                             {item.subtitle}
//                           </div>
//                         </div>
//                       ))}
//                     </motion.div>
//                   ) : (
//                     <motion.div
//                       key="detail"
//                       initial={{ opacity: 0, x: 45, scale: 0.97 }}
//                       animate={{ opacity: 1, x: 0, scale: 1 }}
//                       exit={{ opacity: 0, x: -45, scale: 0.97 }}
//                       transition={{ duration: 0.4 }}
//                       className="absolute inset-0 flex flex-col justify-center px-12"
//                     >
//                       <button
//                         onClick={() => setActiveItem(null)}
//                         className="absolute top-8 left-10 text-white/60"
//                       >
//                         ← Back
//                       </button>

//                       <h3 className="text-2xl font-semibold text-white mb-3">
//                         {items[activeItem].title}
//                       </h3>

//                       <p className="text-white/40 text-sm mb-6">
//                         {items[activeItem].subtitle}
//                       </p>

//                       <p className="text-white/60 text-[15px] leading-relaxed whitespace-pre-line">
//                         {items[activeItem].text}
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>

//               </div>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }