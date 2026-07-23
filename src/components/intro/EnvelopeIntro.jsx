import { useState } from "react";
import "./Envelope.css";

export default function EnvelopeIntro({ onOpen }) {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    if (opened) return;

    setOpened(true);

    setTimeout(() => {
      onOpen();
    }, 2500);
  };

  return (
    <div className="intro-screen">
      <div className={`envelope ${opened ? "opened" : ""}`}>

        <div className="letter">
          <h2>Invitation</h2>

          <p>
            Nous avons la joie de vous inviter
            à célébrer notre union.
          </p>

          <span>Touchez le sceau</span>
        </div>

        <div className="flap"></div>

        <div
          className="seal"
          onClick={handleOpen}
        >
          ❤
        </div>

      </div>
    </div>
  );
}