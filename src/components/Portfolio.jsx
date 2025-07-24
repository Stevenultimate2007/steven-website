import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';

export default function Portfolio({ robotStage, onLandingPosition }) {
  const { t } = useTranslation();
  const [activeProject, setActiveProject] = useState(null);
  const gridRef = useRef(null);

  // Zielposition berechnen
  useEffect(() => {
    if (robotStage === 2 && gridRef.current) {
      const firstCard = gridRef.current.querySelector('div');
      if (firstCard) {
        const rect = firstCard.getBoundingClientRect();
        onLandingPosition({
          x: rect.left + rect.width / 2 - 40,
          y: rect.top + window.scrollY - 200,
        });
      }
    }
  }, [robotStage, onLandingPosition]);

  const projects = [
    { title: "Social Media Cut", desc: "Edits for TikTok & Instagram", thumb: "https://via.placeholder.com/600x400/000000/FFFFFF?text=Social+Media+Cut", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Cinematic Short", desc: "Short film storytelling", thumb: "https://via.placeholder.com/600x400/000000/FFFFFF?text=Cinematic+Short", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Gaming Montage", desc: "Dynamic gaming edits", thumb: "https://via.placeholder.com/600x400/000000/FFFFFF?text=Gaming+Montage", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Corporate Video", desc: "Clean business editing", thumb: "https://via.placeholder.com/600x400/000000/FFFFFF?text=Corporate+Video", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Music Video", desc: "Music video production", thumb: "https://via.placeholder.com/600x400/000000/FFFFFF?text=Music+Video", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Documentary", desc: "Emotional storytelling", thumb: "https://via.placeholder.com/600x400/000000/FFFFFF?text=Documentary", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  ];

  // Parallax-Licht
  const { scrollY } = useScroll();
  const lightY = useTransform(scrollY, [0, 1000], [0, 150]);

  return (
    <section id="portfolio" className="relative py-32 px-6 overflow-hidden">
      {/* Hintergrund */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F9FAFB] via-[#F3F8FC] to-[#E6F0FA]"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-5 pointer-events-none"></div>
      <motion.div
        style={{ y: lightY }}
        className="absolute top-20 left-1/3 w-[500px] h-[500px] rounded-full bg-[#1E90FF]/10 blur-[150px] pointer-events-none"
      />

      {/* Titel */}
     <motion.h2
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="text-6xl font-extrabold text-center text-black mb-20 tracking-wide relative z-10"
>
  {t('portfolio.title')}
</motion.h2>

      {/* Grid */}
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto relative z-10">
        {projects.map((p, idx) => (
          <motion.div
            key={idx}
            onClick={() => setActiveProject(p)}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.08 }} // Hover-Zoom
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="relative group rounded-xl overflow-hidden bg-black border-4 border-black shadow-lg hover:shadow-[0_0_25px_#1E90FF] cursor-pointer transform-gpu transition-transform duration-500"
          >
            <img
              src={p.thumb}
              alt={p.title}
              className="w-full h-72 object-cover opacity-80 group-hover:opacity-100 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-white text-white group-hover:border-[#63B3FF] group-hover:text-[#63B3FF] group-hover:scale-110 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
              <h3 className="text-white text-2xl font-bold mt-4">{p.title}</h3>
              <p className="text-gray-300 text-sm mt-2">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center">
          <div className="relative w-full max-w-4xl bg-[#0D1B2A] rounded-2xl p-6 shadow-[0_0_20px_#1E90FF]">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 text-white text-3xl hover:text-[#63B3FF]"
            >
              ✕
            </button>
            <div className="aspect-video">
              <iframe
                src={activeProject.video}
                title={activeProject.title}
                className="w-full h-full rounded-lg"
                frameBorder="0"
                allow="autoplay; fullscreen"
              ></iframe>
            </div>
            <h3 className="text-[#1E90FF] text-2xl font-bold mt-6">{activeProject.title}</h3>
            <p className="text-gray-300 mt-2">{activeProject.desc}</p>
          </div>
        </div>
      )}
    </section>
  );
}
