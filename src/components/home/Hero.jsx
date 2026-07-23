import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 1.08 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.8, ease: "easeOut" }}
      className="relative h-screen overflow-hidden"
    >
      {/* Image de fond */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/couple.jpg')",
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Contenu */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 1.4,
          ease: "easeOut",
        }}
        className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6"
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: 0 }}
          animate={{ opacity: 1, letterSpacing: "8px" }}
          transition={{ delay: 0.8, duration: 1 }}
          className="uppercase text-xs md:text-sm text-[#F8F4EF]"
        >
          SAVE THE DATE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="font-script text-[#F8F4EF] text-6xl md:text-8xl mt-6"
        >
          Manix
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="font-elegant text-[#E9D7C3] text-2xl my-4"
        >
          &
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="font-script text-[#F8F4EF] text-6xl md:text-8xl"
        >
          Christelle
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 1 }}
          className="mt-10"
        >
          <p className="font-title uppercase tracking-[4px] text-[#E9D7C3] text-sm">
            Vendredi
          </p>

          <h2 className="font-title text-[#F8F4EF] text-4xl md:text-5xl mt-2">
            29 Août 2026
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-8 font-elegant italic text-[#E9D7C3] text-lg"
        >
          Nous avons la joie de vous inviter
          <br />
          à célébrer notre union.
        </motion.p>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
          className="mt-16 text-4xl text-[#F8F4EF]"
        >
          ↓
        </motion.div>
      </motion.div>
    </motion.section>
  );
}