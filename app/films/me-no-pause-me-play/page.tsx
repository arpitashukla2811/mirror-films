import Image from "next/image";

export default function MeNoPauseMePlayPage() {
  return (
    <main className="bg-[#1b1b1b] text-white">

      {/* HERO */}
      <section className="px-10 md:px-20 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* POSTER */}
          <div className="flex justify-center">
            <Image
              src="/images/film-placeholder1.jpeg"
              alt="Me No Pause Me Play"
              width={520}
              height={720}
              className="rounded-xl"
            />
          </div>

          {/* CONTENT */}
          {/* FILM IMPACT & CREDITS */}
<div className="mt-10 space-y-6">

  <p className="text-gray-300 leading-relaxed">
    <span className="italic">Me No Pause Me Play</span> is the first-ever Indian
    Hindi film to address the menopausal journey of women — a subject long
    treated as a social taboo. The film has achieved a remarkable{" "}
    <span className="text-white font-medium">IMDb rating of 9.1</span>,
    reflecting its deep resonance with audiences.
  </p>

  <p className="text-gray-300 leading-relaxed">
    Produced by <span className="text-white font-medium">Manoj Kumar Sharma</span>,
    who also plays a pivotal role in the film, the story has created a powerful
    social impact across Northern India — particularly in{" "}
    <span className="text-white">Uttar Pradesh, Delhi, and Punjab</span> —
    sparking conversations within families and communities.
  </p>

  <p className="text-gray-300 leading-relaxed">
    The female lead, <span className="text-white font-medium">Kamya Punjabi</span>,
    delivers an emotionally charged performance that brings honesty, strength,
    and vulnerability to the screen. Her portrayal has established a deep
    emotional connection with women and family audiences alike, earning
    widespread appreciation from critics, viewers, and social platforms.
  </p>

  <p className="text-gray-400 leading-relaxed">
    The film stands as a voice for awareness, empathy, and open dialogue —
    encouraging society to confront silence and embrace understanding.
  </p>

  {/* THEMES / HASHTAGS */}
  <div className="pt-4 flex flex-wrap gap-3 text-sm text-yellow-300 tracking-widest">
    <span>#Emancipation</span>
    <span>#BreakingSocialTaboos</span>
    <span>#BeingVocal</span>
    <span>#MenopauseAwareness</span>
  </div>

</div>

        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="px-10 md:px-20 py-24 bg-[#161616]">
        <h2 className="text-xs tracking-[0.35em] text-yellow-300 mb-14 text-center">
          FILM HIGHLIGHTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            "/images/gallery/crowed1.jpeg",
            "/images/gallery/crowed4.jpg",
            "/images/gallery/crowed9.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-xl flex items-center justify-center aspect-[16/10]"
            >
              <Image
                src={src}
                alt="Film screening"
                width={1200}
                height={750}
                className="object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </section>

      {/* IMPACT TIMELINE */}
<section className="border-t border-white/10 py-20">

  <h2 className="text-xs tracking-[0.35em] text-yellow-300 mb-16 text-center">
    TIMELINE OF IMPACT
  </h2>

  <div className="relative max-w-4xl mx-auto">

    {/* Vertical line — trimmed equally top & bottom */}
    <div className="absolute left-[7px] top-6 bottom-6 w-px bg-white/10"></div>

    <div className="space-y-20">

      {/* ITEM 1 */}
      <div className="flex gap-8 items-start">
        <span className="mt-1 w-3 h-3 rounded-full bg-yellow-300 shrink-0"></span>
        <div className="pt-1">
          <h3 className="text-sm tracking-widest text-white mb-3">
            THEATRICAL SCREENINGS
          </h3>
          <p className="text-gray-400 leading-relaxed">
            The film premiered through theatrical screenings across multiple cities,
            engaging diverse audiences and initiating open conversations around menopause —
            a subject rarely addressed in Indian cinema.
          </p>
        </div>
      </div>

      {/* ITEM 2 */}
      <div className="flex gap-8 items-start">
        <span className="mt-1 w-3 h-3 rounded-full bg-yellow-300 shrink-0"></span>
        <div className="pt-1">
          <h3 className="text-sm tracking-widest text-white mb-3">
            RECOGNITION & AWARDS
          </h3>
          <p className="text-gray-400 leading-relaxed">
            The impact-driven narrative earned recognition through awards,
            certificates, and media coverage, acknowledging the film’s courage
            in addressing social taboos with sensitivity and honesty.
          </p>
        </div>
      </div>

      {/* ITEM 3 */}
      <div className="flex gap-8 items-start">
        <span className="mt-1 w-3 h-3 rounded-full bg-yellow-300 shrink-0"></span>
        <div className="pt-1">
          <h3 className="text-sm tracking-widest text-white mb-3">
            AUDIENCE RESPONSE
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Audience reactions, family discussions, and community engagement
            transformed the film into a shared experience — reflected in its
            exceptional IMDb rating and strong emotional connection with women
            and family audiences.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* CTA */}
      <section className="px-10 md:px-20 py-28 text-center bg-[#161616]">
        <p className="text-gray-400 mb-8">
          Explore awards, screenings, and audience reactions from the journey of the film.
        </p>

        <a
          href="/gallery"
          className="inline-block border border-yellow-300 text-yellow-300 px-8 py-3 tracking-widest text-sm hover:bg-yellow-300 hover:text-black transition"
        >
          VIEW GALLERY
        </a>
      </section>

      

    </main>
  );
}
