import { useEffect, useRef, useState } from "react";

export default function MusicPlayer({ play }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current || !play) return;

    audioRef.current.volume = 0.4;

    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((err) => {
        console.error("Erreur de lecture :", err);
      });
  }, [play]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/music.mp3" loop preload="auto" />

      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#7B1E1E] text-white shadow-xl text-xl"
      >
        {isPlaying ? "⏸" : "▶"}
      </button>
    </>
  );
}