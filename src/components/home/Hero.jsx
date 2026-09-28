import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const cards = [
  {
    number: "01",
    label: "SURPRISE D'ANNIVERSAIRE",
    title: (
      <>
        Une journée
        <br />
        <strong>spéciale</strong>
        <br />
        se prépare.
      </>
    ),
    text: "Une célébration, des souvenirs et 18 années à honorer.",
  },
  {
    number: "02",
    label: "UNE NOUVELLE ÉTAPE",
    title: (
      <>
        Pour ses
        <br />
        <strong>18 ans</strong>
        <br />
        d'histoire.
      </>
    ),
    text: "Un nouveau chapitre commence et cette journée mérite d'être célébrée.",
  },
  {
    number: "03",
    label: "LA DATE",
    title: (
      <>
        Samedi
        <br />
        <strong>10 octobre</strong>
        <br />
        2026.
      </>
    ),
    text: "Rendez-vous pour partager ensemble cette journée particulière.",
  },
  {
    number: "04",
    label: "LA CÉLÉBRATION",
    title: (
      <>
        18 ans,
        <br />
        <strong>18 souvenirs</strong>
        <br />
        à créer.
      </>
    ),
    text: "Une soirée pensée autour de la joie, des rires et des beaux moments.",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % cards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const card = cards[active];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f8f8f6] text-[#171717]">

      {/* =========================================
          HEADER
      ========================================= */}

      <header className="absolute top-0 left-0 right-0 z-50 px-6 md:px-10 lg:px-14 py-7">
        <div className="flex items-center justify-between text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-[#777]">
          <span>Emmanuel</span>
          <span>10.10.2026</span>
        </div>
      </header>


      {/* =========================================
          GRAND 18 EN ARRIÈRE-PLAN
      ========================================= */}

      <div
        className="
          absolute
          left-[38%]
          top-[5%]
          -translate-x-1/2
          font-serif
          text-[280px]
          md:text-[480px]
          lg:text-[650px]
          leading-none
          text-[#171717]/[0.025]
          pointer-events-none
          select-none
          z-0
        "
      >
        18
      </div>


      {/* =========================================
          PHOTO EMMANUEL
          GRANDE / DROITE / SANS CADRE
      ========================================= */}

      <motion.div
        initial={{
          opacity: 0,
          x: 80,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        transition={{
          duration: 1.3,
          delay: 0.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          absolute
          right-[-7vw]
          bottom-0
          z-10
          w-[72vw]
          md:w-[62vw]
          lg:w-[59vw]
          h-[88vh]
          md:h-[94vh]
          lg:h-[100vh]
          pointer-events-none
        "
      >

        {/* Halo très léger derrière la silhouette */}

        <div
          className="
            absolute
            right-[15%]
            top-[18%]
            w-[55%]
            h-[60%]
            rounded-full
            bg-[#b49a82]/10
            blur-[100px]
          "
        />

        {/* Image détourée */}

        <img
          src="/images/emmanuel.png"
          alt="Emmanuel Ngomela"
          className="
            absolute
            right-0
            bottom-0
            w-full
            h-full
            object-contain
            object-right-bottom
            scale-[1.12]
            origin-bottom-right
          "
        />

      </motion.div>


      {/* =========================================
          CARTES À GAUCHE
      ========================================= */}

      <div
        className="
          absolute
          left-6
          md:left-10
          lg:left-[7%]
          top-1/2
          -translate-y-1/2
          z-30
          w-[calc(100%-48px)]
          md:w-[390px]
          lg:w-[450px]
        "
      >

        <AnimatePresence mode="wait">

          <motion.div
            key={card.number}
            initial={{
              opacity: 0,
              y: 35,
              rotate: 2,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: 0,
            }}
            exit={{
              opacity: 0,
              y: -35,
              rotate: -2,
            }}
            transition={{
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              min-h-[430px]
              md:min-h-[470px]
              rounded-[30px]
              border
              border-[#171717]/10
              bg-[#f8f8f6]
              px-7
              py-8
              md:px-10
              md:py-10
              flex
              flex-col
              justify-between
              shadow-[0_25px_70px_rgba(23,23,23,0.06)]
            "
          >

            {/* HAUT */}

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-2">

                <span className="w-1.5 h-1.5 rounded-full bg-[#a47b55]" />

                <span className="text-[8px] md:text-[9px] tracking-[0.28em] uppercase text-[#888]">
                  {card.label}
                </span>

              </div>

              <span className="text-[9px] tracking-[0.2em] text-[#999]">
                {card.number} / 04
              </span>

            </div>


            {/* CONTENU */}

            <div className="mt-10">

              <div className="w-9 h-px bg-[#a47b55] mb-7" />

              <h2
                className="
                  text-[43px]
                  md:text-[52px]
                  lg:text-[58px]
                  leading-[0.92]
                  font-light
                  tracking-[-0.055em]
                "
              >
                {card.title}
              </h2>

              <div className="w-10 h-px bg-[#171717]/20 mt-8" />

              <p className="mt-6 max-w-[300px] text-[11px] md:text-xs leading-[1.8] text-[#777]">
                {card.text}
              </p>

            </div>


            {/* BAS */}

            <div className="flex items-center justify-between gap-4 mt-8">

              <span className="text-[8px] tracking-[0.22em] uppercase text-[#999]">
                10 octobre 2026
              </span>

              <a
                href="#rsvp"
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-5
                  py-3
                  rounded-full
                  border
                  border-[#171717]/25
                  text-[9px]
                  tracking-[0.12em]
                  uppercase
                  whitespace-nowrap
                  hover:bg-[#171717]
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                Confirmer
                <span className="text-sm">↗</span>
              </a>

            </div>

          </motion.div>

        </AnimatePresence>


        {/* =========================================
            INDICATEURS
        ========================================= */}

        <div className="flex items-center gap-3 mt-5 ml-2">

          {cards.map((item, index) => (
            <button
              key={item.number}
              type="button"
              onClick={() => setActive(index)}
              className="flex items-center gap-2"
            >

              <span
                className={`
                  text-[8px]
                  tracking-[0.2em]
                  transition-all
                  duration-300
                  ${
                    active === index
                      ? "text-[#171717]"
                      : "text-[#aaa]"
                  }
                `}
              >
                {item.number}
              </span>

              <span
                className={`
                  h-px
                  transition-all
                  duration-500
                  ${
                    active === index
                      ? "w-8 bg-[#171717]"
                      : "w-3 bg-[#bbb]"
                  }
                `}
              />

            </button>
          ))}

        </div>

      </div>


      {/* =========================================
          INFORMATIONS BAS
      ========================================= */}

      <div className="absolute bottom-7 left-6 md:left-10 lg:left-[7%] z-40 text-[8px] md:text-[9px] tracking-[0.25em] uppercase text-[#999]">
        18 ans
      </div>

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-40 text-[8px] md:text-[9px] tracking-[0.25em] uppercase text-[#999]">
        Emmanuel
      </div>

      <div className="absolute bottom-7 right-6 md:right-10 lg:right-14 z-40 text-[8px] md:text-[9px] tracking-[0.25em] uppercase text-[#999]">
        Kinshasa
      </div>


      {/* =========================================
          VERSION MOBILE
      ========================================= */}

      <div className="absolute bottom-0 left-0 right-0 h-[35vh] bg-gradient-to-t from-[#f8f8f6] via-[#f8f8f6]/60 to-transparent z-20 pointer-events-none md:hidden" />

    </section>
  );
}