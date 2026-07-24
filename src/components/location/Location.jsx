import { MapPin, Clock, Navigation } from "lucide-react";

export default function Location() {
  return (
    <section className="bg-[#F8F4EF] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <p className="uppercase tracking-[0.35em] text-[#8B2E2E] text-sm">
          Réception
        </p>

        <h2 className="text-5xl font-serif text-[#2E2E2E] mt-4">
          Lieu de la réception
        </h2>

        <p className="text-gray-600 mt-5 max-w-2xl mx-auto leading-8">
          Nous serons honorés de partager cette soirée inoubliable avec vous.
        </p>

        <div className="mt-12 bg-white rounded-[35px] shadow-xl border border-[#EFE4D8] p-10">

          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-[#8B2E2E]/10 flex items-center justify-center">
              <MapPin className="text-[#8B2E2E]" size={30} />
            </div>
          </div>

          <h3 className="text-3xl font-serif text-[#8B2E2E]">
            Salle de fête BIBI ELONGA
          </h3>

          <div className="mt-8 space-y-5">

            <div className="flex justify-center items-center gap-3 text-gray-600">
              <MapPin size={20} />
              <span>En face de Kin Marché Brikin</span>
            </div>

            <div className="flex justify-center items-center gap-3 text-gray-600">
              <Clock size={20} />
              <span>Début de la réception : <strong>19h00</strong></span>
            </div>

          </div>

          <a
            href="https://maps.app.goo.gl/uEFw5waV16NKsY7k9?g_st=ipc"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 bg-[#8B2E2E] hover:bg-[#6E2020] text-white px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Navigation size={20} />
            Obtenir mon itinéraire
          </a>

        </div>

      </div>
    </section>
  );
}