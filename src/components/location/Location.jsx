import { MapPin, Clock, Navigation } from "lucide-react";
import { motion } from "framer-motion";

export default function Location() {
  return (
    <section
      id="location"
      className="relative bg-[#f8f8f6] text-[#171717] py-28 md:py-36 px-6 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#777]">
            L'itinéraire
          </p>

          <h2 className="mt-5 text-4xl md:text-6xl font-light tracking-[-0.04em]">
            Rendez-vous au restaurant
          </h2>

          <div className="w-12 h-px bg-[#171717]/30 mx-auto mt-8" />
        </motion.div>

        {/* Informations */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-center mt-16"
        >
          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-[#888]">
            Le lieu
          </p>

          <h3 className="mt-4 text-3xl md:text-5xl font-light tracking-[-0.03em]">
            Restaurant Vilakazi
          </h3>

          <p className="mt-5 text-sm md:text-base text-[#666]">
            Samedi 10 octobre 2026
          </p>

          {/* Infos pratiques */}
          <div className="mt-12 flex flex-col md:flex-row justify-center gap-8 md:gap-16">

            <div className="flex items-center justify-center gap-3 text-sm text-[#666]">
              <MapPin size={18} strokeWidth={1.5} />
              <span>Restaurant Vilakazi</span>
            </div>

            <div className="flex items-center justify-center gap-3 text-sm text-[#666]">
              <Clock size={18} strokeWidth={1.5} />
              <span>
                Début à <strong className="text-[#171717]">16h30</strong>
              </span>
            </div>

          </div>

          {/* Google Maps */}
          <motion.a
            href="https://maps.app.goo.gl/fkpQ4pPdarXVR1Yy5?g_st=ic"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="
              inline-flex
              items-center
              justify-center
              gap-3
              mt-12
              px-8
              py-4
              border
              border-[#171717]
              rounded-full
              text-xs
              md:text-sm
              tracking-wide
              transition-all
              duration-300
              hover:bg-[#171717]
              hover:text-white
            "
          >
            <Navigation size={17} strokeWidth={1.5} />
            Ouvrir l'itinéraire
          </motion.a>

        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="
            text-center
            text-[10px]
            md:text-xs
            text-[#999]
            mt-16
          "
        >
          Votre présence rendra cette journée encore plus spéciale.
        </motion.p>

      </div>
    </section>
  );
}