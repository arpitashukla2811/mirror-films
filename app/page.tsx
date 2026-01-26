import Link from "next/link";
import FilmCard from "./components/FilmCard";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-[#1b1b1b] text-white pt-[72px]">

      <section className="min-h-[70vh] flex items-start justify-center px-6 pt-32">
  <div className="text-center">

    

    <h1 className="relative inline-flex items-center gap-3 text-5xl md:text-6xl tracking-[0.45em] font-bold text-yellow-300">
  MIRRRO FILMS

  <Image
    src="/images/mirrro-logo.png"
    alt="Mirrro Films Logo"
    width={166}
    height={166}
    className="opacity-90"
  />
</h1>


    <p className="mt-6 text-xs tracking-[0.35em] uppercase text-gray-400">
      CINEMA • STORIES • VISUAL POETRY
    </p>

  </div>
</section>


      {/* FEATURED FILM */}
      <section className="px-10 md:px-20 py-24 border-t border-white/10">
        <div className="flex items-center justify-between mb-14">
          <h2 className="text-xs tracking-[0.35em] text-yellow-300">
            FEATURED FILM
          </h2>
          <Link href="/films" className="text-xs text-gray-400 hover:text-yellow-300">
            VIEW FILMS →
          </Link>
        </div>

        <div className="flex justify-center">
          <FilmCard
            title="ME NO PAUSE ME PLAY"
            year="2025"
            image="/images/film-placeholder1.jpeg"
          />
        </div>
      </section>

      {/* AWARDS PREVIEW */}
      <section className="px-10 md:px-20 py-24 bg-[#161616]">
        <div className="flex items-center justify-between mb-14">
          <h2 className="text-xs tracking-[0.35em] text-yellow-300">
            AWARDS & RECOGNITION
          </h2>
          <Link href="/awards" className="text-xs text-gray-400 hover:text-yellow-300">
            VIEW ALL →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Image src="/images/awards/film1.jpeg" alt="" width={400} height={250} className="rounded-lg object-contain" />
          <Image src="/images/awards/cert1.jpeg" alt="" width={400} height={250} className="rounded-lg object-contain" />
          <Image src="/images/awards/film3.jpeg" alt="" width={400} height={250} className="rounded-lg object-contain" />
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="px-10 md:px-20 py-24">
        <div className="flex items-center justify-between mb-14">
          <h2 className="text-xs tracking-[0.35em] text-yellow-300">
            GALLERY
          </h2>
          <Link href="/gallery" className="text-xs text-gray-400 hover:text-yellow-300">
            VIEW GALLERY →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Image src="/images/gallery/crowed1.jpeg" alt="" width={400} height={260} className="rounded-lg object-cover" />
          <Image src="/images/gallery/crowed13.jpg" alt="" width={400} height={260} className="rounded-lg object-cover" />
          <Image src="/images/gallery/crowed10.jpg" alt="" width={400} height={260} className="rounded-lg object-cover" />
        </div>
      </section>

      {/* NEWS PREVIEW */}
      <section className="px-10 md:px-20 py-24 bg-[#161616]">
        <div className="flex items-center justify-between mb-14">
          <h2 className="text-xs tracking-[0.35em] text-yellow-300">
            NEWS
          </h2>
          <Link href="/news" className="text-xs text-gray-400 hover:text-yellow-300">
            VIEW NEWS →
          </Link>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-300 leading-relaxed">
            <span className="italic">Me No Pause Me Play</span> becomes India’s
            first feature film addressing menopause, receiving widespread
            audience response and critical appreciation.
          </p>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="px-10 md:px-20 py-24 border-t border-white/10 text-center">
        <p className="text-gray-400 mb-6">
          Interested in collaborations, screenings, or conversations?
        </p>
        <Link
          href="/contact"
          className="inline-block border border-yellow-300 text-yellow-300 px-10 py-3 text-xs tracking-widest hover:bg-yellow-300 hover:text-black transition"
        >
          CONTACT MIRRRO FILMS
        </Link>
      </section>
      

    </main>
  );
}
