export default function AboutPage() {
  return (
    <main className="bg-[#1b1b1b] text-white pt-[72px]">

      {/* PAGE HEADER */}
      <section className="px-10 md:px-20 py-32 text-center">
        <h1 className="text-4xl md:text-5xl tracking-[0.35em] text-yellow-300 mb-6">
          ABOUT MIRRRO FILMS
        </h1>
        <p className="text-sm text-gray-400 max-w-3xl mx-auto leading-relaxed">
          An independent film production house creating meaningful cinema
          rooted in truth, emotion, and social consciousness.
        </p>
      </section>

      {/* ABOUT CONTENT */}
      <section className="px-10 md:px-20 py-28 border-t border-white/10">
        <div className="max-w-4xl mx-auto space-y-8">

          <p className="text-gray-300 leading-relaxed">
            <span className="font-medium text-white">MIRRRO FILMS</span> is a
            purpose-driven production house committed to telling stories that
            challenge silence, question taboos, and spark dialogue through cinema.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Our debut feature film <span className="italic">Me No Pause Me Play </span>
            marked a significant milestone by addressing menopause — a subject
            rarely explored in Indian cinema — with sensitivity and honesty.
          </p>

          <p className="text-gray-400 leading-relaxed">
            With a strong emotional core and socially relevant narratives,
            MIRRRO FILMS aims to create cinema that resonates with audiences
            beyond the screen, fostering awareness, empathy, and change.
          </p>

          {/* TAGS */}
          <div className="pt-8 flex flex-wrap gap-4">
            {[
              "#emancipation",
              "#breakingSocialTaboos",
              "#beingVocal",
              "#menopause",
              "#socialCinema",
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs tracking-widest text-gray-400 border border-white/10 px-4 py-2 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
