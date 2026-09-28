import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  // Date de l'anniversaire : 10 octobre 2026
  const targetDate = new Date(2026, 9, 10, 0, 0, 0).getTime();

  const getTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(
        Math.floor(difference / (1000 * 60 * 60 * 24))
      ).padStart(2, "0"),

      hours: String(
        Math.floor(
          (difference % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        )
      ).padStart(2, "0"),

      minutes: String(
        Math.floor(
          (difference % (1000 * 60 * 60)) /
            (1000 * 60)
        )
      ).padStart(2, "0"),

      seconds: String(
        Math.floor((difference % (1000 * 60)) / 1000)
      ).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const items = [
    { value: timeLeft.days, label: "Jours" },
    { value: timeLeft.hours, label: "Heures" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Secondes" },
  ];

  return (
    <section className="relative bg-[#f8f8f6] text-[#171717] py-28 md:py-36 px-6 overflow-hidden">

      <div className="max-w-6xl mx-auto">

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#777]">
            Le temps passe...
          </p>

          <h2 className="mt-5 text-4xl md:text-6xl font-light tracking-[-0.04em]">
            Le grand jour approche
          </h2>

          <div className="w-12 h-px bg-[#171717]/30 mx-auto mt-8" />
        </motion.div>


        {/* Compte à rebours */}
        <div className="grid grid-cols-2 md:grid-cols-4 mt-20 md:mt-24">

          {items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className={`
                relative
                text-center
                py-8
                md:py-4
                ${index < 2 ? "border-b md:border-b-0" : ""}
                ${index % 2 === 0 ? "border-r md:border-r" : ""}
                md:border-[#171717]/15
                border-[#171717]/10
              `}
            >

              {/* Nombre */}
              <motion.div
                key={item.value}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="
                  text-6xl
                  md:text-7xl
                  lg:text-8xl
                  font-light
                  tracking-[-0.06em]
                  leading-none
                "
              >
                {item.value}
              </motion.div>

              {/* Label */}
              <p className="
                mt-5
                text-[9px]
                md:text-[10px]
                uppercase
                tracking-[0.3em]
                text-[#777]
              ">
                {item.label}
              </p>

            </motion.div>
          ))}

        </div>


        {/* Date */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center mt-20"
        >
          <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-[#777]">
            Samedi
          </p>

          <p className="
            mt-3
            text-lg
            md:text-xl
            font-medium
            tracking-[0.08em]
          ">
            10 OCTOBRE 2026
          </p>
        </motion.div>

      </div>
    </section>
  );
}