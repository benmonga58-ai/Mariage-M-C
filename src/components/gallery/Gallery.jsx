import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./gallery.css";

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
  "/images/gallery7.jpg",
  "/images/gallery8.jpg",
];

function MarqueeRow({ images, direction, duration, onSelect }) {
  const duplicated = [...images, ...images];

  return (
    <div className="overflow-hidden py-4">
      <motion.div
        className="flex gap-6 w-max"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicated.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            onClick={() => onSelect(img)}
            className="w-[260px] h-[360px] object-cover rounded-3xl shadow-xl cursor-pointer transition-transform duration-500 hover:scale-105"
          />
        ))}
      </motion.div>
    </div>
  );
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="bg-[#F8F4EF] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="uppercase tracking-[6px] text-[#8B2E2E] text-sm">
            Nos souvenirs
          </p>

          <h2 className="text-5xl font-serif text-[#7B1E1E] mt-4">
            Galerie
          </h2>
        </motion.div>

        <MarqueeRow
          images={images.slice(0, 4)}
          direction="left"
          duration={30}
          onSelect={setSelectedImage}
        />

        <MarqueeRow
          images={images.slice(4, 8)}
          direction="right"
          duration={30}
          onSelect={setSelectedImage}
        />
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt=""
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-h-[90vh] rounded-3xl shadow-2xl"
            />

            <button
              className="absolute top-8 right-8 text-white text-5xl"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}