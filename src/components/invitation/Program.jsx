export default function Program() {
  return (
    <section className="bg-[#F8F4EF] py-28 px-6">
      <div className="max-w-3xl mx-auto">

        <p className="text-center uppercase tracking-[6px] text-[#B58A8A] text-sm">
          PROGRAMME
        </p>

        <h2 className="text-center text-5xl font-serif text-[#7B1E1E] mt-4 mb-20">
          Nos célébrations
        </h2>

        <div className="relative border-l-2 border-[#B58A8A] ml-6">

          {/* Mariage civil */}
          <div className="relative pl-10 pb-14">
            <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-[#7B1E1E]"></div>

            <p className="uppercase tracking-[3px] text-[#B58A8A] text-sm">
              25 AOÛT 2026
            </p>

            <h3 className="text-3xl font-serif text-[#7B1E1E] mt-2">
              Mariage civil
            </h3>

            <p className="mt-3 text-gray-600">
              Première célébration de notre union.
            </p>
          </div>

          {/* Religieux */}
          <div className="relative pl-10 pb-14">
            <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-[#7B1E1E]"></div>

            <p className="uppercase tracking-[3px] text-[#B58A8A] text-sm">
              29 AOÛT 2026
            </p>

            <h3 className="text-3xl font-serif text-[#7B1E1E] mt-2">
              Cérémonie religieuse
            </h3>

            <p className="mt-3 text-gray-600">
              Matin
            </p>
          </div>

          {/* Réception */}
          <div className="relative pl-10">
            <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-[#7B1E1E]"></div>

            <p className="uppercase tracking-[3px] text-[#B58A8A] text-sm">
              29 AOÛT 2026
            </p>

            <h3 className="text-3xl font-serif text-[#7B1E1E] mt-2">
              Soirée de réception
            </h3>

            <p className="mt-3 text-gray-600">
              À partir de 19h00
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}