import { motion } from "framer-motion";

const restaurantPhotos = [
  "/images/restaurant1.jpg",
  "/images/restaurant2.jpg",
  "/images/restaurant3.jpg",
];

export default function Program() {
  return (
    <section className="relative bg-[#f8f8f6] text-[#171717] py-28 md:py-36 overflow-hidden">

      {/* EN-TÊTE */}
      <div className="max-w-5xl mx-auto px-6 text-center">

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
          La célébration
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            mt-5
            text-4xl
            md:text-6xl
            font-light
            tracking-[-0.04em]
          "
        >
          Un moment à partager
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="
            max-w-md
            mx-auto
            mt-6
            text-sm
            md:text-base
            leading-relaxed
            text-[#666]
          "
        >
          Pour célébrer les 18 ans d'Emmanuel,
          retrouvons-nous autour d'une belle table.
        </motion.p>

      </div>


      {/* RESTAURANT */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mt-16 px-6"
      >

        <p className="
          text-[9px]
          md:text-[10px]
          uppercase
          tracking-[0.3em]
          text-[#888]
        ">
          Le lieu
        </p>

        <h3 className="
          mt-3
          text-3xl
          md:text-5xl
          font-light
          tracking-[-0.03em]
        ">
          Restaurant Vilakazi
        </h3>

        <p className="mt-3 text-sm text-[#777]">
          Samedi 10 octobre 2026
        </p>

      </motion.div>


      {/* RUBAN PHOTOS */}
      <div className="relative mt-16 overflow-hidden">

        <motion.div
          className="flex gap-5 w-max"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >

          {/* Série 1 */}
          {restaurantPhotos.map((photo, index) => (
            <div
              key={`first-${index}`}
              className="
                w-[230px]
                h-[300px]
                md:w-[320px]
                md:h-[410px]
                flex-shrink-0
                overflow-hidden
              "
            >
              <img
                src={photo}
                alt={`Restaurant Vilakazi ${index + 1}`}
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />
            </div>
          ))}

          {/* Série 2 — copie exacte pour la boucle */}
          {restaurantPhotos.map((photo, index) => (
            <div
              key={`second-${index}`}
              className="
                w-[230px]
                h-[300px]
                md:w-[320px]
                md:h-[410px]
                flex-shrink-0
                overflow-hidden
              "
            >
              <img
                src={photo}
                alt={`Restaurant Vilakazi ${index + 1}`}
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />
            </div>
          ))}

        </motion.div>

      </div>


      {/* DATE + BOUTON */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mt-16 px-6"
      >

        <p className="
          text-xs
          md:text-sm
          tracking-[0.2em]
          uppercase
          text-[#777]
        ">
          10 OCTOBRE 2026
        </p>

        <a
          href="#location"
          className="
            inline-flex
            items-center
            justify-center
            mt-7
            px-7
            py-3
            border
            border-[#171717]
            rounded-full
            text-xs
            md:text-sm
            tracking-wide
            hover:bg-[#171717]
            hover:text-white
            transition-all
            duration-300
          "
        >
          Voir le lieu
        </a>

      </motion.div>

    </section>
  );
}