import { useState } from "react";
import { supabase } from "../../services/supabase";

export default function RSVP() {
  const [fullName, setFullName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [presence, setPresence] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName.trim() || !telephone.trim() || !presence) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    setLoading(true);
    setSuccess(false);

    try {
      const { error } = await supabase
        .from("guets")
        .insert([
          {
            full_name: fullName.trim(),
            telephone: telephone.trim(),
            presence: presence,
            message: message.trim(),
          },
        ]);

      if (error) {
        console.error("Erreur Supabase :", error);
        alert("Erreur lors de l'enregistrement : " + error.message);
        return;
      }

      // Confirmation enregistrée
      setSuccess(true);

      // Réinitialisation du formulaire
      setFullName("");
      setTelephone("");
      setPresence("");
      setMessage("");

    } catch (error) {
      console.error("Erreur réseau :", error);

      alert(
        "Impossible de contacter le serveur. Vérifiez votre connexion et la configuration Supabase."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="rsvp" className="bg-[#f7efe2] py-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Introduction */}
        <div className="text-center">
          <p className="uppercase tracking-[0.35em] text-[#6b2f13] text-sm">
            RSVP
          </p>

          <h2 className="text-5xl font-serif text-[#35170b] mt-4">
            Confirmez votre présence
          </h2>

          <p className="mt-6 text-[#35170b]/65">
            Merci de nous confirmer votre présence à la célébration
            de l'anniversaire d'Emmanuel.
          </p>
        </div>

        {/* Confirmation */}
        {success && (
          <div className="mt-10 rounded-2xl border border-[#6b2f13]/20 bg-white px-6 py-5 text-center">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#6b2f13] text-white">
              ✓
            </div>

            <h3 className="text-lg font-semibold text-[#35170b]">
              Confirmation enregistrée
            </h3>

            <p className="mt-2 text-sm text-[#35170b]/65">
              Votre enregistrement a bien été confirmé.
              Merci et à très bientôt !
            </p>
          </div>
        )}

        {/* Formulaire */}
        <form
          onSubmit={handleSubmit}
          className="mt-12 rounded-[30px] bg-white p-8 shadow-lg md:p-10"
        >
          <input
            type="text"
            placeholder="Nom et prénom"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="mb-5 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#6b2f13]"
            required
          />

          <input
            type="tel"
            placeholder="Téléphone"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            className="mb-6 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#6b2f13]"
            required
          />

          <div className="mb-6">
            <p className="mb-3 font-medium text-[#35170b]">
              Serez-vous présent(e) ?
            </p>

            <label className="mb-3 flex cursor-pointer items-center">
              <input
                type="radio"
                name="presence"
                value="oui"
                checked={presence === "oui"}
                onChange={(e) => setPresence(e.target.value)}
                className="mr-3"
                required
              />
              Oui, je serai présent(e)
            </label>

            <label className="flex cursor-pointer items-center">
              <input
                type="radio"
                name="presence"
                value="non"
                checked={presence === "non"}
                onChange={(e) => setPresence(e.target.value)}
                className="mr-3"
              />
              Non, je ne pourrai pas être présent(e)
            </label>
          </div>

          <textarea
            placeholder="Laissez un petit message à Emmanuel (facultatif)"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mb-6 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#6b2f13]"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-[#6b2f13] py-4 text-white transition hover:bg-[#4e200c] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? "Enregistrement..."
              : "Confirmer ma présence"}
          </button>

          {/* Message surprise */}
          <div className="mt-10 border-t border-[#6b2f13]/10 pt-8 text-center">
            <p className="text-xs leading-5 text-[#35170b]/60">
              <span className="font-semibold text-[#6b2f13]">
                NB :
              </span>{" "}
              Ceci est une surprise d'anniversaire. Merci de préserver
              la discrétion afin que l'émotion du jour reste intacte.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}