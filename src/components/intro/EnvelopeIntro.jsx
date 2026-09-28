import { useState } from "react";
import "./Envelope.css";

export default function EnvelopeIntro({ onOpen }) {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    if (opened) return;

    setOpened(true);

    setTimeout(() => {
      onOpen();
    }, 1400);
  };

  return (
    <main className={`intro-screen ${opened ? "is-opening" : ""}`}>

      {/* Éléments décoratifs */}
      <div className="decor decor-one"></div>
      <div className="decor decor-two"></div>
      <div className="decor decor-three"></div>

      {/* Grand 18 en arrière-plan */}
      <div className="intro-number" aria-hidden="true">
        18
      </div>

      {/* En-tête */}
      <div className="intro-top">
        <span>EMMANUEL NGOMELA</span>
        <span>10.10.2026</span>
      </div>

      {/* Carte principale */}
      <div className={`birthday-card ${opened ? "opened" : ""}`}>

        <div className="card-frame"></div>

        <div className="birthday-content">

          {/* Invitation */}
          <div className="intro-small">
            <span className="intro-dot"></span>
            INVITATION
            <span className="intro-dot"></span>
          </div>

          {/* Âge */}
          <h1 className="birthday-title">
            <span className="main-age">18 ANS</span>
            <span className="birthday-label">D’ANNIVERSAIRE</span>
          </h1>

          <div className="separator"></div>

          {/* Message */}
          <p className="welcome-text">
            Une journée de joie, de rires
            <br />
            et de beaux souvenirs.
          </p>

          {/* Date */}
          <div className="birthday-info">
            <span className="date-label">
              SAMEDI
            </span>

            <strong>
              10 OCTOBRE 2026
            </strong>
          </div>

          {/* Nom */}
          <p className="guest-name">
            Emmanuel Ngomela
          </p>

          {/* Bouton */}
          <button
            type="button"
            className="open-button"
            onClick={handleOpen}
            disabled={opened}
          >
            <span>Découvrir l'invitation</span>

            <span className="button-arrow">
              ↗
            </span>
          </button>

          {/* Petite note */}
          <p className="surprise-note">
            Une surprise se prépare...
          </p>

        </div>
      </div>

      {/* Bas de page */}
      <div className="intro-bottom">
        <span>UNE JOURNÉE À CÉLÉBRER</span>

        <span className="scroll-line"></span>

        <span>18 ANS</span>
      </div>

    </main>
  );
}