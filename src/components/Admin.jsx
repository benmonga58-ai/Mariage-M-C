import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../services/supabase";

export default function Admin() {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [search, setSearch] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchGuests();
  }, []);

  async function fetchGuests() {
    setLoading(true);
    setErrorMessage("");

    const { data, error } = await supabase
      .from("guets")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.error("Erreur Supabase :", error);
      setErrorMessage(error.message);
      setGuests([]);
      setLoading(false);
      return;
    }

    setGuests(data || []);
    setLoading(false);
  }

  async function handleRefresh() {
    setRefreshing(true);
    await fetchGuests();
    setRefreshing(false);
  }

  async function deleteGuest(id) {
    const confirmed = window.confirm(
      "Voulez-vous vraiment supprimer cette confirmation ?"
    );

    if (!confirmed) return;

    const { error } = await supabase
      .from("guets")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Erreur suppression :", error);
      alert(error.message);
      return;
    }

    fetchGuests();
  }

  const filteredGuests = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) return guests;

    return guests.filter((guest) => {
      const name = guest.full_name?.toLowerCase() || "";
      const telephone = guest.telephone?.toLowerCase() || "";
      const message = guest.message?.toLowerCase() || "";

      return (
        name.includes(query) ||
        telephone.includes(query) ||
        message.includes(query)
      );
    });
  }, [guests, search]);

  const total = guests.length;

  const presents = guests.filter(
    (guest) => guest.presence === "oui"
  ).length;

  const absents = guests.filter(
    (guest) => guest.presence === "non"
  ).length;

  return (
    <main className="min-h-screen bg-[#f6f5f2] text-[#171717] px-5 py-8 md:px-10 md:py-12">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

            <div>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#888]">
                Espace privé
              </p>

              <h1 className="mt-3 text-4xl md:text-6xl font-light tracking-[-0.04em]">
                Emmanuel
              </h1>

              <p className="mt-2 text-sm md:text-base text-[#777]">
                Tableau de bord des confirmations
              </p>
            </div>

            <button
              type="button"
              onClick={handleRefresh}
              disabled={refreshing}
              className="
                self-start
                md:self-auto
                px-5
                py-3
                rounded-full
                border
                border-black/10
                bg-white
                text-sm
                hover:bg-black
                hover:text-white
                transition
                disabled:opacity-50
              "
            >
              {refreshing ? "Actualisation..." : "Actualiser"}
            </button>

          </div>

          <div className="w-full h-px bg-black/10 mt-8" />
        </motion.header>

        {/* ERREUR SUPABASE */}
        {errorMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              mb-8
              rounded-2xl
              border
              border-red-200
              bg-red-50
              p-5
              text-red-700
            "
          >
            <p className="font-semibold">
              Impossible de charger les confirmations.
            </p>

            <p className="mt-2 text-sm break-words">
              {errorMessage}
            </p>

            <button
              type="button"
              onClick={fetchGuests}
              className="
                mt-4
                px-4
                py-2
                rounded-full
                bg-red-700
                text-white
                text-sm
                hover:bg-red-800
                transition
              "
            >
              Réessayer
            </button>
          </motion.div>
        )}

        {/* STATISTIQUES */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-10">

          <StatCard
            label="Confirmations"
            value={total}
            delay={0}
          />

          <StatCard
            label="Présents"
            value={presents}
            delay={0.1}
          />

          <StatCard
            label="Absents"
            value={absents}
            delay={0.2}
          />

        </section>

        {/* RECHERCHE */}
        <section className="mb-8">
          <div className="bg-white border border-black/10 rounded-2xl px-5 py-4 shadow-sm">

            <input
              type="text"
              placeholder="Rechercher un invité..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="
                w-full
                bg-transparent
                outline-none
                text-[#171717]
                placeholder:text-[#aaa]
                text-sm
              "
            />

          </div>
        </section>

        {/* TABLEAU */}
        <section className="bg-white border border-black/10 rounded-3xl overflow-hidden shadow-sm">

          <div className="px-6 py-5 border-b border-black/10 flex flex-col md:flex-row md:items-center md:justify-between gap-2">

            <div>
              <h2 className="text-lg font-medium">
                Liste des invités
              </h2>

              <p className="text-xs text-[#999] mt-1">
                {filteredGuests.length} résultat
                {filteredGuests.length > 1 ? "s" : ""}
              </p>
            </div>

            <p className="text-xs uppercase tracking-[0.2em] text-[#aaa]">
              10 OCTOBRE 2026
            </p>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[700px]">

              <thead>
                <tr className="bg-[#f8f7f4] border-b border-black/10">

                  <th className="text-left px-6 py-4 text-xs uppercase tracking-[0.15em] text-[#888]">
                    Nom
                  </th>

                  <th className="text-left px-6 py-4 text-xs uppercase tracking-[0.15em] text-[#888]">
                    Téléphone
                  </th>

                  <th className="text-center px-6 py-4 text-xs uppercase tracking-[0.15em] text-[#888]">
                    Présence
                  </th>

                  <th className="text-left px-6 py-4 text-xs uppercase tracking-[0.15em] text-[#888]">
                    Message
                  </th>

                  <th className="text-center px-6 py-4 text-xs uppercase tracking-[0.15em] text-[#888]">
                    Action
                  </th>

                </tr>
              </thead>

              <tbody>

                {loading ? (

                  <tr>
                    <td
                      colSpan="5"
                      className="text-center py-16 text-[#999]"
                    >
                      Chargement des confirmations...
                    </td>
                  </tr>

                ) : filteredGuests.length === 0 ? (

                  <tr>
                    <td
                      colSpan="5"
                      className="text-center py-16"
                    >
                      <p className="text-[#555]">
                        Aucune confirmation trouvée.
                      </p>

                      <p className="text-sm text-[#aaa] mt-2">
                        Les réponses apparaîtront ici automatiquement.
                      </p>
                    </td>
                  </tr>

                ) : (

                  filteredGuests.map((guest) => (

                    <tr
                      key={guest.id}
                      className="border-b border-black/5 last:border-0 hover:bg-[#faf9f6] transition"
                    >

                      <td className="px-6 py-5">
                        <span className="font-medium">
                          {guest.full_name || "—"}
                        </span>
                      </td>

                      <td className="px-6 py-5 text-sm text-[#666]">
                        {guest.telephone || "—"}
                      </td>

                      <td className="px-6 py-5 text-center">

                        <span
                          className={`
                            inline-flex
                            items-center
                            px-3
                            py-1.5
                            rounded-full
                            text-xs
                            font-medium
                            ${
                              guest.presence === "oui"
                                ? "bg-emerald-50 text-emerald-700"
                                : "bg-red-50 text-red-600"
                            }
                          `}
                        >
                          {guest.presence === "oui"
                            ? "Présent"
                            : "Absent"}
                        </span>

                      </td>

                      <td className="px-6 py-5 text-sm text-[#777] max-w-sm">
                        <p className="truncate">
                          {guest.message || "—"}
                        </p>
                      </td>

                      <td className="px-6 py-5 text-center">

                        <button
                          type="button"
                          onClick={() => deleteGuest(guest.id)}
                          className="
                            px-4
                            py-2
                            rounded-full
                            border
                            border-red-200
                            text-red-600
                            text-xs
                            hover:bg-red-600
                            hover:text-white
                            transition
                          "
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
        </section>

        {/* FOOTER */}
        <footer className="text-center mt-10 pb-5">

          <p className="text-xs uppercase tracking-[0.25em] text-[#aaa]">
            Emmanuel Ngomela
          </p>

          <p className="mt-2 text-xs text-[#bbb]">
            Surprise • 18 ans • 10 octobre 2026
          </p>

        </footer>

      </div>
    </main>
  );
}

function StatCard({ label, value, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="
        bg-white
        border
        border-black/10
        rounded-3xl
        p-7
        shadow-sm
      "
    >
      <p className="text-xs uppercase tracking-[0.2em] text-[#999]">
        {label}
      </p>

      <p className="mt-4 text-5xl font-light tracking-[-0.04em]">
        {value}
      </p>
    </motion.div>
  );
}