import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Hero from "./components/home/Hero";
import Story from "./components/home/Story";
import Countdown from "./components/countdown/Countdown";
import Program from "./components/invitation/Program";
import Location from "./components/location/Location";
import Gallery from "./components/gallery/Gallery";
import RSVP from "./components/rsvp/RSVP";
import MusicPlayer from "./components/common/MusicPlayer";
import Admin from "./components/Admin";

function Invitation() {
  const [opened, setOpened] = useState(false);

  if (!opened) {
    return (
      <div className="min-h-screen bg-[#F8F4EF] flex items-center justify-center px-6 relative overflow-hidden">

        {/* Décoration de fond */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#F3E8DD] rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#F8E9E9] rounded-full blur-3xl opacity-40"></div>

        <div className="relative bg-white rounded-[40px] shadow-2xl border border-[#E8DDD2] p-12 max-w-md w-full text-center">

          <p className="uppercase tracking-[0.45em] text-[#8B2E2E] text-sm">
            Invitation
          </p>

          <h1 className="mt-5 text-6xl font-serif text-[#7B1E1E]">
            Mariage
          </h1>

          <div className="w-24 h-[2px] bg-[#C9A46C] mx-auto my-6 rounded-full"></div>

          <p className="text-gray-600 leading-8 text-lg">
            Bienvenue sur notre
            <br />
            <span className="font-semibold text-[#7B1E1E]">
              carte d'invitation
            </span>
          </p>

          <button
            onClick={() => setOpened(true)}
            className="mt-10 w-full bg-[#8B2E2E] hover:bg-[#6E2020] text-white py-4 rounded-full text-lg font-medium shadow-lg transition-all duration-300 hover:scale-105"
          >
            Ouvrir l'invitation
          </button>

          <p className="mt-8 text-sm italic text-gray-400">
            Une journée remplie d'amour, de joie et d'émotion vous attend.
          </p>

        </div>
      </div>
    );
  }

  return (
    <>
      <MusicPlayer play={opened} />
      <Hero />
      <Story />
      <Countdown />
      <Program />
      <Location />
      <Gallery />
      <RSVP />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Invitation />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}