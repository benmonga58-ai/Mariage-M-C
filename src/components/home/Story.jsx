import { motion } from "framer-motion";

export default function Story() {
  return (
    <section className="relative bg-[#f8f8f6] text-[#171717] py-28 md:py-36 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">

        {/* Petit titre */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            text-[10px]
            md:text-xs
            uppercase
            tracking-[0.35em]
            text-[#777]
          "
        >
          Un jour unique
        </motion.p>

        {/* Nom */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="
            mt-5
            text-4xl
            md:text-6xl
            font-light
            tracking-[-0.04em]
          "
        >
          Emmanuel Ngomela
        </motion.h2>

        {/* Petite ligne */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-12 h-px bg-[#171717]/30 mx-auto mt-8"
        />

        {/* Texte */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="
            max-w-2xl
            mx-auto
            mt-10
            text-sm
            md:text-base
            leading-[1.9]
            text-[#666]
          "
        >
          Comme une étoile qui illumine la nuit, Emmanuel Ngomela
          brille par sa présence et son cœur.
          <br /><br />
          À l’occasion de son anniversaire, nous vous invitons à
          partager un instant de joie, de rires et de lumière.
          <br /><br />
          Venez célébrer avec nous ce jour unique, où chaque sourire
          sera une offrande et chaque éclat de rire, une mélodie.
        </motion.p>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#888]">
            18 ans
          </p>

          <p className="mt-3 text-sm tracking-[0.2em] text-[#555]">
            10 OCTOBRE 2026
          </p>
        </motion.div>

      </div>
    </section>
  );
}