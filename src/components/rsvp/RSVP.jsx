import { useState } from "react";
import { supabase } from "../../services/supabase";

export default function RSVP() {
  const [fullName, setFullName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [presence, setPresence] = useState("");
  const [guestsCount, setGuestsCount] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("guets")
      .insert([
        {
          full_name: fullName,
          telephone: telephone,
          presence: presence,
          guests_count: Number(guestsCount),
          message: message,
        },
      ]);

    if (error) {
      alert("Erreur : " + error.message);
      console.error(error);
      return;
    }

    alert("Votre présence a été confirmée avec succès !");

    setFullName("");
    setTelephone("");
    setPresence("");
    setGuestsCount("");
    setMessage("");
  };

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <p className="uppercase tracking-[0.35em] text-[#8B2E2E] text-sm">
            RSVP
          </p>

          <h2 className="text-5xl font-serif text-[#2E2E2E] mt-4">
            Confirmez votre présence
          </h2>

          <p className="mt-6 text-gray-600">
            Merci de nous confirmer votre présence avant le 20 août 2026.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-12 bg-[#F8F4EF] rounded-[30px] shadow-lg p-8"
        >
          <input
            type="text"
            placeholder="Nom et prénom"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-5 outline-none focus:border-[#8B2E2E]"
            required
          />

          <input
            type="tel"
            placeholder="Téléphone"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-5 outline-none focus:border-[#8B2E2E]"
            required
          />

          <div className="mb-5">
            <p className="font-medium text-[#2E2E2E] mb-3">
              Serez-vous présent ?
            </p>

            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="presence"
                value="oui"
                checked={presence === "oui"}
                onChange={(e) => setPresence(e.target.value)}
                className="mr-2"
                required
              />
              Oui, je serai présent(e)
            </label>

            <label className="flex items-center">
              <input
                type="radio"
                name="presence"
                value="non"
                checked={presence === "non"}
                onChange={(e) => setPresence(e.target.value)}
                className="mr-2"
              />
              Non, je ne pourrai pas être présent(e)
            </label>
          </div>

          <input
            type="number"
            placeholder="Nombre d'accompagnants"
            min="0"
            value={guestsCount}
            onChange={(e) => setGuestsCount(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-5 outline-none focus:border-[#8B2E2E]"
          />

          <textarea
            placeholder="Laissez un petit message aux mariés (facultatif)"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-6 outline-none focus:border-[#8B2E2E]"
          />

          <button
            type="submit"
            className="w-full bg-[#8B2E2E] hover:bg-[#6E2020] text-white py-4 rounded-full transition"
          >
            Confirmer ma présence
          </button>

          <div className="mt-10 text-center">
            <h3 className="font-serif text-3xl text-[#8B2E2E]">
              Cadeau en espèces
            </h3>

            <p className="mt-2 italic text-gray-500">
              Merci de votre générosité.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}