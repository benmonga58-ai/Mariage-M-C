import { motion } from "framer-motion";

export default function MarqueeRow({
  images,
  direction = "left",
  onSelect,
}) {
  const duplicatedImages = [...images, ...images];

  return (
    <div className="overflow-hidden py-3">
      <motion.div
        className="flex gap-6 w-max"
        animate={{
          x: direction === "left"
            ? ["0%", "-50%"]
            : ["-50%", "0%"],
        }}
        transition={{
          duration: 35,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedImages.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt=""
            onClick={() => onSelect(image)}
            whileHover={{
              scale: 1.06,
            }}
            className="w-[180px] h-[250px] md:w-[240px] md:h-[330px]
                       object-cover rounded-3xl shadow-xl cursor-pointer
                       flex-shrink-0"
          />
        ))}
      </motion.div>
    </div>
  );
}