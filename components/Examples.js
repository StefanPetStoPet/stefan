export default function ProductsSection() {
  const items = [
    {
      img: "/asa2.png",
      video: "/videos/agencyv.mp4",
      link: "https://anchor-support-agency.vercel.app/",
    },
    {
      img: "/biju3.png",
      video: "/videos/bijuv.mp4",
      link: "https://biju-sand.vercel.app/",
    },
    {
      img: "/vina.png",
      video: "/videos/vinav.mp4",
      link: "https://vinarijaraznatovic.vercel.app/",
    },
    {
      img: "/amigurumi.png",
      video: "/videos/siveniv.mp4",
      link: "https://siveni.myshopify.com/",
    },
  ];

  return (
    <section id="work" className="w-full relative">
      <div className="mx-auto px-6 py-8 bg-[linear-gradient(230deg,_#e6eaff,_#e6eefa_25%,_#e3f2f9_64%,_#d6f6ff)]">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {items.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl shadow-lg h-[200px] md:h-[350px] block"
            >
<div className="absolute top-0 left-0 w-full h-10 z-20 flex items-center justify-between px-4 bg-black/1 backdrop-blur-xs text-white text-sm tracking-wide">
  <span>↗ Posjeti sajt</span>
</div>
              {/* IMAGE */}
              <img
                src={item.img}
                alt="project"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
              />

              {/* VIDEO */}
              <video
                src={item.video}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                muted
                loop
                playsInline
                preload="auto"
  onMouseEnter={(e) => e.currentTarget.play()}
  onMouseLeave={(e) => e.currentTarget.pause()}
              />

            </a>
          ))}

        </div>

      </div>
    </section>
  );
}