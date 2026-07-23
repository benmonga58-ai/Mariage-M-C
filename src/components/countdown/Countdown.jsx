import { useEffect, useState } from "react";

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
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
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

  return (
    <section className="bg-[#F8F4EF] py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <p className="uppercase tracking-[6px] text-[#B58A8A] text-sm">
          COMPTE À REBOURS
        </p>

        <h2 className="mt-4 text-6xl font-serif text-[#7B1E1E]">
          Le grand jour approche
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-5xl font-bold text-[#7B1E1E]">
              {timeLeft.days}
            </h3>
            <p className="mt-3 uppercase text-sm">Jours</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-5xl font-bold text-[#7B1E1E]">
              {timeLeft.hours}
            </h3>
            <p className="mt-3 uppercase text-sm">Heures</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-5xl font-bold text-[#7B1E1E]">
              {timeLeft.minutes}
            </h3>
            <p className="mt-3 uppercase text-sm">Minutes</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-5xl font-bold text-[#7B1E1E]">
              {timeLeft.seconds}
            </h3>
            <p className="mt-3 uppercase text-sm">Secondes</p>
          </div>

        </div>

      </div>
    </section>
  );
}