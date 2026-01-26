import FilmCard from "../components/FilmCard";

export default function FilmsPage() {
  return (
    <main className="bg-[#1b1b1b] text-white px-10 md:px-20 py-24">

      {/* PAGE TITLE */}
      <div className="text-center mb-20">
        <h1 className="text-4xl tracking-[0.4em] text-yellow-300 font-bold">
          FILMS
        </h1>
        <p className="mt-6 text-sm tracking-widest text-gray-400">
          FEATURE FILMS • SHORTS • DOCUMENTARIES
        </p>
      </div>

      {/* FILMS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-3 flex justify-center">
    <FilmCard
      title="ME NO PAUSE ME PLAY"
      year="2025"
      image="/images/film-placeholder1.jpeg"
    />
  </div>

        {/* <FilmCard
          title="UNTITLED PROJECT"
          year="2024"
          image="/images/film-placeholder3.png"
        />

        <FilmCard
          title="DOCUMENTARY"
          year="2023"
          image="/images/film-placeholder.png"
        /> */}
      </div>

    </main>
  );
}
