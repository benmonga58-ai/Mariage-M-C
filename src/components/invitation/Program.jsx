import { motion } from "framer-motion";

const events = [
  {
    date: "27 AOÛT 2026",
    title: "Mariage civil",
    description: "Première célébration de notre union.",
  },
  {
    date: "29 AOÛT 2026",
    title: "Cérémonie religieuse",
    description: "À partir de 16h",
  },
  {
    date: "29 AOÛT 2026",
    title: "Soirée de réception",
    description: "À partir de 19h00",
  },
];

export default function Program() {
  return (
    <section className="bg-[#F8F4EF] py-28 px-6">
      <div className="max-w-3xl mx-auto">

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center uppercase tracking-[6px] text-[#B58A8A] text-sm"
        >
          PROGRAMME
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-5xl font-serif text-[#7B1E1E] mt-4 mb-24"
        >
          Nos célébrations
        </motion.h2>

        <div className="relative ml-8">

          {/* Ligne verticale */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="absolute left-0 top-0 w-[2px] rounded-full
                       bg-gradient-to-b
                       from-[#E8D6C8]
                       via-[#CFA6A6]
                       to-[#7B1E1E]"
          />

          {events.map((event, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.25,
              }}
              whileHover={{
                x: 6,
              }}
              className={`relative pl-14 ${
                index !== events.length - 1 ? "pb-20" : ""
              }`}
            >

              {/* Point */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 12,
                  delay: index * 0.25,
                }}
                className="absolute -left-[12px] top-1
                           w-6 h-6
                           rounded-full
                           bg-[#7B1E1E]
                           border-4 border-white
                           shadow-md"
              />

              <p className="uppercase tracking-[4px] text-[#B58A8A] text-sm">
                {event.date}
              </p>

              <h3 className="text-4xl font-serif text-[#7B1E1E] mt-2">
                {event.title}
              </h3>

              <p className="mt-4 text-gray-600 text-lg">
                {event.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}