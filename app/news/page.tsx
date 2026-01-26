import Image from "next/image";

const news = [
  {
    title: "Me No Pause Me Play: A Bold Cinematic Leap in Hindi Cinema",
    source: "News Nation",
    image: "/images/news/newsnation.webp",
    link: "https://english.newsnationtv.com/brand-stories/brand-stories-english/me-no-pause-me-play-hindi-film-manoj-kumar-sharma-samar-k-mukherjee-2025-10808330",
  },
  {
    title: "From Page to Power: Manoj Kumar Sharma’s Book Becomes a Movement",
    source: "UP18 News",
    image: "/images/news/up18.jpg",
    link: "https://up18news.com/from-page-to-power-manoj-kumar-sharmas-book-becomes-a-cinematic-movement-led-by-samar-k-mukherjee/",
  },
  {
    title: "Creates History with Phenomenal Success in Uttar Pradesh",
    source: "The Print",
    image: "/images/news/theprint.jpg",
    link: "https://theprint.in/brandit/me-no-pause-me-play-a-bold-first-in-hindi-cinema-marking-highest-success-in-up/2805145/",
  },
  {
    title: "A Bold First in Hindi Cinema Marking Highest Success",
    source: "Asianet News",
    image: "/images/news/asianet.jpg",
    link: "https://newsable.asianetnews.com/pr-spot/me-no-pause-me-play-a-bold-first-in-hindi-cinema-marking-highest-success-in-up-articleshow-e8zfaym",
  },
  {
    title: "Creates History with Phenomenal Theatre Response",
    source: "The Blunt Times",
    image: "/images/news/blunttimes.png",
    link: "https://theblunttimes.in/me-no-pause-me-play-creates-history-with-phenomenal-success-in-uttar-pradesh/55270/",
  },
  {
  title: "Me No Pause Me Play – A Bold Cinematic Leap",
  source: "MyNation",
  image: "/images/news/mynation.jpg",
  link: "https://www.mynation.com/entertainment/me-no-pause-me-play-a-bold-cinematic-leap-by-sharma-and-mukherjee-articleshow-qzamu4f",
  },
  {
    title: "Manoj Kumar Sharma Creates Record in Hindi Cinema",
    source: "Tribune India",
    image: "/images/news/tribune.png",
    link: "https://www.tribuneindia.com/news/business/manoj-kumar-sharma-creates-record-with-me-no-pause-me-play-in-hindi-cinema/",
  },
  {
    title: "A Cinematic Leap Highlighting a Social Taboo",
    source: "Outlook India",
    image: "/images/news/outlook.jpg",
    link: "https://www.outlookindia.com/entertainment-spotlight/me-no-pause-me-play-creates-history-with-phenomenal-success-in-uttar-pradesh",
  },
  {
    title: "A Bold Step Addressing Menopause in Indian Cinema",
    source: "Hindustan Metro",
    image: "/images/news/hindustanmetro.png",
    link: "https://www.hindustanmetro.com/manoj-kumar-sharma-creates-history-with-me-no-pause-me-play-in-theatres/",
  },
];

export default function NewsPage() {
  return (
    <main className="bg-[#1b1b1b] text-white">

      {/* PAGE HEADER */}
      <section className="px-10 md:px-20 py-28 text-center">
        <h1 className="text-4xl md:text-5xl tracking-[0.35em] text-yellow-300 mb-6">
          NEWS & MEDIA
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Selected national and international media coverage highlighting the
          cultural impact of <span className="italic">Me No Pause Me Play</span>.
        </p>
      </section>

      {/* NEWS GRID */}
      <section className="px-10 md:px-20 pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {news.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-[#161616] rounded-xl overflow-hidden border border-white/10 transition group-hover:border-yellow-300/40">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs tracking-widest text-yellow-300 mb-2">
                    {item.source}
                  </p>
                  <h3 className="text-sm text-gray-200 leading-relaxed group-hover:text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* PRESS ARCHIVE */}
      <section className="px-10 md:px-20 py-28 border-t border-white/5">
  <div className="max-w-6xl mx-auto bg-[#161616] border border-white/10 rounded-2xl p-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    {/* LEFT – PDF COVER */}
    <div className="flex justify-center md:justify-start">
      <div className="relative w-[260px] h-[360px] rounded-xl overflow-hidden border border-white/10 bg-[#1b1b1b]">
        <Image
          src="/images/awards/book1.jpg"
          alt="Press Archive PDF"
          fill
          className="object-cover"
        />
      </div>
    </div>

    {/* RIGHT – CONTENT */}
    <div>
      <h3 className="text-xs tracking-[0.35em] text-yellow-300 mb-4">
        PRESS ARCHIVE
      </h3>

      <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
        A comprehensive press dossier documenting national and international
        media coverage of <span className="italic">Me No Pause Me Play</span>.
      </p>

      <a
        href="/me-no-pause-me-play-press.pdf"
        target="_blank"
        className="inline-block text-sm tracking-widest text-yellow-300 border border-yellow-300/40 px-6 py-3 rounded-full hover:bg-yellow-300 hover:text-black transition"
      >
        DOWNLOAD FULL PRESS ARCHIVE (PDF)
      </a>
    </div>

  </div>
</section>



    </main>
  );
}
