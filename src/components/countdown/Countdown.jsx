import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  const targetDate = new Date(2026, 7, 29, 0, 0, 0).getTime();

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
        Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).padStart(2, "0"),
      minutes: String(
        Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
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
    { value: timeLeft.days, label: "JOURS" },
    { value: timeLeft.hours, label: "HEURES" },
    { value: timeLeft.minutes, label: "MINUTES" },
    { value: timeLeft.seconds, label: "SECONDES" },
  ];

  return (
    <section className="bg-[#F8F4EF] py-28 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[8px] text-[#9B6A6A] text-sm"
        >
          COMPTE À REBOURS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-5xl md:text-7xl font-serif text-[#7B1E1E]"
        >
          Le grand jour approche
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-20">

          {items.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
              }}
            >

              <motion.h3
                key={item.value}
                initial={{ opacity: 0.4, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="font-serif text-[#7B1E1E] text-7xl md:text-8xl"
              >
                {item.value}
              </motion.h3>

              <div className="w-14 h-[2px] bg-[#D9C1AE] mx-auto my-5"></div>

              <p className="uppercase tracking-[5px] text-sm text-[#8A6A6A]">
                {item.label}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}