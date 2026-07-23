import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";

export default function Admin() {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    fetchGuests();
  }, []);

  async function fetchGuests() {
    const { data, error } = await supabase
      .from("guets")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.error(error);
      return;
    }

    setGuests(data);
  }

  const total = guests.length;
  const presents = guests.filter((g) => g.presence === "oui").length;
  const absents = guests.filter((g) => g.presence === "non").length;
  const accompagnants = guests.reduce(
    (sum, g) => sum + (g.guests_count || 0),
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">
        Administration RSVP
      </h1>

      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3>Total</h3>
          <p className="text-3xl">{total}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3>Présents</h3>
          <p className="text-3xl">{presents}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3>Absents</h3>
          <p className="text-3xl">{absents}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3>Accompagnants</h3>
          <p className="text-3xl">{accompagnants}</p>
        </div>
      </div>

      <table className="w-full bg-white rounded-xl shadow">
        <thead>
          <tr className="border-b">
            <th className="p-4">Nom</th>
            <th>Téléphone</th>
            <th>Présence</th>
            <th>Accompagnants</th>
            <th>Message</th>
          </tr>
        </thead>

        <tbody>
          {guests.map((guest) => (
            <tr key={guest.id} className="border-b">
              <td className="p-4">{guest.full_name}</td>
              <td>{guest.telephone}</td>
              <td>{guest.presence}</td>
              <td>{guest.guests_count}</td>
              <td>{guest.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}