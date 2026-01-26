
import Image from "next/image";

export default function AwardsPage() {
  return (
    <main className="bg-[#1b1b1b] text-white">

      {/* PAGE HEADER */}
      <section className="py-32 text-center px-6">
        <h1 className="text-4xl md:text-5xl tracking-[0.35em] text-yellow-300 mb-6">
          AWARDS & RECOGNITION
        </h1>
        <p className="text-sm text-gray-400 max-w-2xl mx-auto">
          Celebrating impact, storytelling, and social change through cinema and literature.
        </p>
      </section>

      {/* FILM RECOGNITION */}
      <section className="px-10 md:px-20 py-24 border-t border-white/5">
        <h2 className="text-xs tracking-[0.35em] text-yellow-300 mb-10 text-center">
          FILM RECOGNITION
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
          <span className="italic">“Me No Pause Me Play”</span> is a socially driven film that
          created awareness around women’s issues and menstrual health,
          receiving recognition across screenings, press, and cultural platforms.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
  {[
    "/images/awards/film1.jpeg",
    "/images/awards/film2.jpeg",
    "/images/awards/film3.jpeg",
    "/images/awards/film4.jpeg",
    "/images/awards/film5.jpeg",
    "/images/awards/film6.jpeg",
    "/images/awards/film7.jpeg",
    "/images/awards/film8.jpeg",
    "/images/gallery/crowed18.jpeg",
  ].map((src, i) => (
    <div
      key={i}
      className="bg-[#161616] border border-white/10 rounded-xl p-4 flex items-center justify-center"
    >
      <div className="relative w-full h-[320px]">
        <Image
          src={src}
          alt="Film recognition"
          fill
          className="object-contain"
        />
      </div>
    </div>
  ))}
</div>

      </section>

      {/* PRESS COVERAGE */}
<section className="px-10 md:px-20 py-24 bg-[#161616]">
  <h2 className="text-xs tracking-[0.35em] text-yellow-300 mb-14 text-center">
    PRESS & MEDIA COVERAGE
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
  {[
    "/images/awards/press1.jpeg",
    "/images/awards/press2.jpeg",
    "/images/awards/press3.jpeg",
    "/images/awards/press4.jpeg",
    "/images/awards/press5.jpeg",
    "/images/awards/press6.jpeg",
    "/images/awards/press7.jpeg",
    "/images/awards/press8.jpeg",
    "/images/awards/press9.jpeg",
  ].map((src, i) => (
    <div
      key={i}
      className="bg-[#1b1b1b] border border-white/10 rounded-xl p-4 flex items-center justify-center"
    >
      <div className="relative w-full h-[420px]">
        <Image
          src={src}
          alt="Press coverage"
          fill
          className="object-contain"
        />
      </div>
    </div>
  ))}
</div>

</section>


      {/* CERTIFICATES */}
      <section className="px-10 md:px-20 py-24 border-t border-white/5">
        <h2 className="text-xs tracking-[0.35em] text-yellow-300 mb-14 text-center">
          AWARDS & CERTIFICATES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
  {[
    "/images/awards/cert1.jpeg",
    "/images/awards/cert2.jpg",
    "/images/awards/cert3.webp",
  ].map((src, i) => (
    <div
      key={i}
      className="bg-[#161616] border border-white/10 rounded-xl p-6 flex items-center justify-center"
    >
      <div className="relative w-full h-[300px]">
        <Image
          src={src}
          alt="Certificate"
          fill
          className="object-contain"
        />
      </div>
    </div>
  ))}
</div>

      </section>

      {/* BOOK RECOGNITION */}
      <section className="px-10 md:px-20 py-28 bg-[#161616] text-center">
        <h2 className="text-xs tracking-[0.35em] text-yellow-300 mb-10">
          LITERARY RECOGNITION
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto mb-14">
          The film is based on the acclaimed book <span className="italic">“Me No Pause Me Play”</span>,
          recognized for its powerful narrative on women empowerment and social awareness.
        </p>

        <div className="flex justify-center">
          <Image
            src="/images/awards/book1.jpg"
            alt="Book Cover"
            width={320}
            height={450}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

    </main>
  );
}
