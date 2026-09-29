import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./gallery.css";

const images = [
  "/images/emmanuel1.jpg",
  "/images/emmanuel2.jpg",
  "/images/emmanuel3.jpg",
  "/images/emmanuel4.jpg",
  "/images/emmanuel5.jpg",
  "/images/emmanuel6.jpg",
  "/images/emmanuel7.jpg",
  "/images/emmanuel8.jpg",
  "/images/emmanuel9.jpg",
  "/images/emmanuel10.jpg",
  "/images/emmanuel11.jpg",
  "/images/emmanuel12.jpg",
];

function MarqueeRow({
  images,
  direction = "left",
  duration = 35,
  onSelect,
  reverse = false,
}) {
  if (!images.length) return null;

  const duplicated = [...images, ...images];

  return (
    <div className="gallery-marquee">
      <motion.div
        className="gallery-track"
        animate={{
          x:
            direction === "left"
              ? ["0%", "-50%"]
              : ["-50%", "0%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicated.map((img, index) => (
          <motion.div
            key={`${img}-${index}`}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            transition={{ duration: 0.3 }}
            className={`gallery-image-wrapper ${
              reverse ? "gallery-image-tall" : ""
            }`}
          >
            <img
              src={img}
              alt={`Souvenir d'Emmanuel ${index + 1}`}
              onClick={() => onSelect(img)}
              className="gallery-image"
              draggable="false"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="gallery"
      className="relative bg-[#f8f8f6] text-[#171717] py-28 md:py-36 overflow-hidden"
    >
      {/* En-tête */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-6 text-center mb-20"
      >
        <p className="gallery-eyebrow">
          Nos souvenirs
        </p>

        <h2 className="gallery-title">
          Les moments
          <br />
          <span>qui restent.</span>
        </h2>

        <div className="gallery-line" />

        <p className="gallery-description">
          Des souvenirs, des rires, des amis et tous ces moments
          qui ont construit l'histoire d'Emmanuel.
        </p>
      </motion.div>

      {/* Première rangée */}
      <MarqueeRow
        images={images.slice(0, 4)}
        direction="left"
        duration={34}
        onSelect={setSelectedImage}
      />

      {/* Deuxième rangée */}
      <MarqueeRow
        images={images.slice(4, 8)}
        direction="right"
        duration={38}
        onSelect={setSelectedImage}
        reverse
      />

      {/* Troisième rangée */}
      <MarqueeRow
        images={images.slice(8, 12)}
        direction="left"
        duration={42}
        onSelect={setSelectedImage}
      />

      {/* Texte final */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mt-20 px-6"
      >
        <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#888]">
          18 ans de souvenirs
        </p>

        <p className="mt-4 text-sm text-[#777]">
          Et ce n'est que le début.
        </p>
      </motion.div>

      {/* Visionneuse */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-5 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Souvenir d'Emmanuel"
              initial={{
                opacity: 0,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                max-w-full
                max-h-[88vh]
                object-contain
                shadow-2xl
              "
              onClick={(event) => event.stopPropagation()}
            />

            <button
              type="button"
              aria-label="Fermer"
              onClick={() => setSelectedImage(null)}
              className="
                absolute
                top-6
                right-6
                md:top-10
                md:right-10
                w-10
                h-10
                flex
                items-center
                justify-center
                text-white
                text-3xl
                font-light
                border
                border-white/30
                rounded-full
                hover:bg-white
                hover:text-black
                transition
              "
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}