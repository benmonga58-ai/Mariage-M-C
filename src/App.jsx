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

import EnvelopeIntro from "./components/intro/EnvelopeIntro";

function Invitation() {
  const [opened, setOpened] = useState(false);

  if (!opened) {
    return <EnvelopeIntro onOpen={() => setOpened(true)} />;
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