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

  return (<div className="min-h-screen bg-[#F8F4EF] p-8">

      {/* En-tête */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <p className="uppercase tracking-[6px] text-[#B48A8A] text-sm">
          Tableau de bord
        </p>

        <h1 className="text-5xl font-serif text-[#7B1E1E] mt-3">
          Administration du Mariage
        </h1>

        <p className="text-gray-500 mt-3">
          Gérez toutes les confirmations de présence.
        </p>
      </motion.div>

      {/* Cartes statistiques */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

        {[
          {
            title: "Invités",
            value: total,
            color: "text-[#7B1E1E]",
          },
          {
            title: "Présents",
            value: presents,
            color: "text-green-600",
          },
          {
            title: "Absents",
            value: absents,
            color: "text-red-500",
          },
          {
            title: "Accompagnants",
            value: accompagnants,
            color: "text-[#C38B2A]",
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
            className="bg-white rounded-3xl shadow-lg border border-[#ECE2D8] p-8"
          >

            <p className="text-gray-500">
              {card.title}
            </p>

            <h2 className={`text-5xl font-serif mt-3 ${card.color}`}>
              {card.value}
            </h2>

          </motion.div>

        ))}

      </div>

      {/* Recherche */}

      <div className="bg-white rounded-2xl shadow-md border border-[#ECE2D8] p-5 mb-8">

        <input
          type="text"
          placeholder="🔍 Rechercher un invité..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none text-lg"
        />

      </div>{/* Tableau des invités */}

      <div className="bg-white rounded-3xl shadow-lg border border-[#ECE2D8] overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-[#7B1E1E] text-white">

              <tr>

                <th className="text-left p-5">Nom</th>

                <th className="text-left p-5">Téléphone</th>

                <th className="text-center p-5">Présence</th>

                <th className="text-center p-5">Accompagnants</th>

                <th className="text-left p-5">Message</th>

                <th className="text-center p-5">Action</th>

              </tr>

            </thead>

            <tbody>

              {loading ? (

                <tr>

                  <td
                    colSpan="6"
                    className="text-center py-10 text-gray-500"
                  >
                    Chargement...
                  </td>

                </tr>

              ) : filteredGuests.length === 0 ? (

                <tr>

                  <td
                    colSpan="6"
                    className="text-center py-10 text-gray-500"
                  >
                    Aucun invité trouvé.
                  </td>

                </tr>

              ) : (

                filteredGuests.map((guest) => (

                  <tr
                    key={guest.id}
                    className="border-b hover:bg-[#FAF7F3] transition"
                  >

                    <td className="p-5 font-semibold">
                      {guest.full_name}
                    </td>

                    <td className="p-5">
                      {guest.telephone}
                    </td>

                    <td className="text-center p-5">

                      <span
                        className={`px-4 py-2 rounded-full text-sm font-semibold ${
                          guest.presence === "oui"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {guest.presence === "oui"
                          ? "Présent"
                          : "Absent"}
                      </span>

                    </td>

                    <td className="text-center p-5">
                      {guest.guests_count || 0}
                    </td>

                    <td className="p-5 max-w-xs">
                      {guest.message || "-"}
                    </td>

                    <td className="text-center p-5"><button
                        onClick={() => deleteGuest(guest.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl transition"
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

      </div>{/* Pied de page */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-10 text-center"
      >
        <p className="text-gray-500 text-sm">
          Manix & Christelle • Tableau de bord RSVP
        </p>

        <p className="text-xs text-gray-400 mt-2">
          Les données sont synchronisées avec Supabase.
        </p>
      </motion.div></div>
  );
}