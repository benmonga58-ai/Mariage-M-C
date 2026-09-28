import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../services/supabase";

export default function Admin() {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchGuests();
  }, []);

  async function fetchGuests() {
    setLoading(true);

    const { data, error } = await supabase
      .from("guets")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.error(error);
      setLoading(false);
      return;
    }

    setGuests(data || []);
    setLoading(false);
  }

  async function deleteGuest(id) {
    if (!window.confirm("Supprimer cet invité ?")) return;

    const { error } = await supabase
      .from("guets")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    fetchGuests();
  }

  const filteredGuests = useMemo(() => {
    return guests.filter((guest) =>
      guest.full_name
        ?.toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [guests, search]);

  const total = filteredGuests.length;

  const presents = filteredGuests.filter(
    (g) => g.presence === "oui"
  ).length;

  const absents = filteredGuests.filter(
    (g) => g.presence === "non"
  ).length;

  const accompagnants = filteredGuests.reduce(
    (sum, g) => sum + (Number(g.guests_count) || 0),
    0
  );

  return (
    <div className="relative min-h-screen bg-[#0d0e12] p-8 overflow-hidden">

      {/* Halo de fond, cohérent avec le reste du site */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px]
                       bg-[#D8C4A3]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative">

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="uppercase tracking-[6px] text-[#D8C4A3]/80 text-sm">
            Tableau de bord
          </p>

          <h1 className="text-4xl md:text-5xl font-serif font-light text-white mt-3">
            Administration du Mariage
          </h1>

          <p className="text-white/50 mt-3">
            Gérez toutes les confirmations de présence.
          </p>
        </motion.div>

        {/* Cartes statistiques */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

          {[
            {
              title: "Invités",
              value: total,
              color: "text-white",
            },
            {
              title: "Présents",
              value: presents,
              color: "text-emerald-400",
            },
            {
              title: "Absents",
              value: absents,
              color: "text-red-400",
            },
            {
              title: "Accompagnants",
              value: accompagnants,
              color: "text-[#D8C4A3]",
            },
          ].map((card, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-8"
            >

              <p className="text-white/50">
                {card.title}
              </p>

              <h2 className={`text-5xl font-serif font-light mt-3 ${card.color}`}>
                {card.value}
              </h2>

            </motion.div>

          ))}

        </div>

        {/* Recherche */}

        <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-5 mb-8">

          <input
            type="text"
            placeholder="🔍 Rechercher un invité..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none text-lg bg-transparent text-white placeholder-white/40"
          />

        </div>

        {/* Tableau des invités */}

        <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl overflow-hidden">

          <div className="overflow-x-auto">

            <table className="w-full text-white">

              <thead className="bg-white/10 border-b border-white/15">

                <tr>

                  <th className="text-left p-5 font-medium">Nom</th>

                  <th className="text-left p-5 font-medium">Téléphone</th>

                  <th className="text-center p-5 font-medium">Présence</th>

                  <th className="text-center p-5 font-medium">Accompagnants</th>

                  <th className="text-left p-5 font-medium">Message</th>

                  <th className="text-center p-5 font-medium">Action</th>

                </tr>

              </thead>

              <tbody>

                {loading ? (

                  <tr>

                    <td
                      colSpan="6"
                      className="text-center py-10 text-white/50"
                    >
                      Chargement...
                    </td>

                  </tr>

                ) : filteredGuests.length === 0 ? (

                  <tr>

                    <td
                      colSpan="6"
                      className="text-center py-10 text-white/50"
                    >
                      Aucun invité trouvé.
                    </td>

                  </tr>

                ) : (

                  filteredGuests.map((guest) => (

                    <tr
                      key={guest.id}
                      className="border-b border-white/10 hover:bg-white/5 transition"
                    >

                      <td className="p-5 font-semibold">
                        {guest.full_name}
                      </td>

                      <td className="p-5 text-white/70">
                        {guest.telephone}
                      </td>

                      <td className="text-center p-5">

                        <span
                          className={`px-4 py-2 rounded-full text-sm font-semibold ${
                            guest.presence === "oui"
                              ? "bg-emerald-400/15 text-emerald-400"
                              : "bg-red-400/15 text-red-400"
                          }`}
                        >
                          {guest.presence === "oui"
                            ? "Présent"
                            : "Absent"}
                        </span>

                      </td>

                      <td className="text-center p-5 text-white/70">
                        {guest.guests_count || 0}
                      </td>

                      <td className="p-5 max-w-xs text-white/60">
                        {guest.message || "-"}
                      </td>

                      <td className="text-center p-5">
                        <button
                          onClick={() => deleteGuest(guest.id)}
                          className="bg-red-500/20 hover:bg-red-500/30 text-red-300 px-4 py-2 rounded-xl transition border border-red-400/20"
                        >
                          Supprimer
                        </button>

                      </td>

                    </tr>

                  ))

                )}

              </tbody>

            </table>

          </div>

        </div>

        {/* Pied de page */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="text-white/50 text-sm">
            Manix & Christelle • Tableau de bord RSVP
          </p>

          <p className="text-xs text-white/30 mt-2">
            Les données sont synchronisées avec Supabase.
          </p>
        </motion.div>
      </div>
    </div>
  );
}