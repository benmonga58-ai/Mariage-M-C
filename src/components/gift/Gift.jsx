import { motion } from "framer-motion";
import { Gift as GiftIcon } from "lucide-react";

export default function Gift() {
  return (
    <section className="bg-[#F8F4EF] py-24 px-6">
      <div className="max-w-3xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[40px] shadow-xl border border-[#EEE2D8] p-10 text-center"
        >

          <div className="w-24 h-24 rounded-full bg-[#F4ECE6] flex items-center justify-center mx-auto mb-8">
            <GiftIcon size={42} className="text-[#8B2E2E]" />
          </div>

          <p className="uppercase tracking-[6px] text-[#B48A8A] text-sm">
            UN PETIT MOT
          </p>

          <h2 className="mt-5 text-5xl font-serif text-[#7B1E1E]">
            Les cadeaux
          </h2>

          <p className="mt-8 text-lg leading-9 text-[#5E6472]">
            Votre présence à nos côtés sera notre plus belle joie.
          </p>

          <p className="mt-6 text-lg leading-9 text-[#5E6472]">
            Si vous souhaitez nous témoigner votre affection par un présent,
            nous apprécierions particulièrement une
            <span className="font-semibold text-[#8B2E2E]">
              {" "}contribution en espèces
            </span>,
            qui nous accompagnera dans le début de notre nouvelle vie ensemble.
          </p>

          <p className="mt-8 italic text-[#8B6F6F]">
            Merci du fond du cœur pour votre générosité et votre bienveillance.
          </p>

        </motion.div>
      </div>
    </section>
  );
}