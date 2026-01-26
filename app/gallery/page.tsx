"use client";

import Image from "next/image";
import { useState } from "react";

const audienceVideos = [
  {
    poster: "/images/gallery/review-thumbnail.jpeg",
    video: "/videos/audience1.mp4",
    caption: "Audience reactions during theatrical screenings",
  },
  {
    poster: "/images/gallery/review-thumbnail.jpeg",
    video: "/videos/audience2.mp4",
    caption: "Post-screening conversations & responses",
  },
  {
    poster: "/images/gallery/review-thumbnail.jpeg",
    video: "/videos/audience3.mp4",
    caption: "Community engagement & shared reflections",
  },
  {
    poster: "/images/gallery/review-thumbnail.jpeg",
    video: "/videos/audience4.mp4",
    caption: "Community engagement & shared reflections",
  },
  {
    poster: "/images/gallery/review-thumbnail.jpeg",
    video: "/videos/audience5.mp4",
    caption: "Community engagement & shared reflections",
  },
  {
    poster: "/images/gallery/review-thumbnail.jpeg",
    video: "/videos/audience6.mp4",
    caption: "Community engagement & shared reflections",
  },
  {
    poster: "/images/gallery/review-thumbnail.jpeg",
    video: "/videos/audience7.mp4",
    caption: "Community engagement & shared reflections",
  },
  {
    poster: "/images/gallery/review-thumbnail.jpeg",
    video: "/videos/audience8.mp4",
    caption: "Community engagement & shared reflections",
  },
  {
    poster: "/images/gallery/review-thumbnail.jpeg",
    video: "/videos/audience9.mp4",
    caption: "Community engagement & shared reflections",
  },
  {
    poster: "/images/gallery/review-thumbnail.jpeg",
    video: "/videos/audience10.mp4",
    caption: "Community engagement & shared reflections",
  },
  {
    poster: "/images/gallery/review-thumbnail.jpeg",
    video: "/videos/audience11.mp4",
    caption: "Community engagement & shared reflections",
  },
  {
    poster: "/images/gallery/review-thumbnail.jpeg",
    video: "/videos/audience12.mp4",
    caption: "Community engagement & shared reflections",
  },
  {
    poster: "/images/gallery/review-thumbnail.jpeg",
    video: "/videos/audience13.mp4",
    caption: "Community engagement & shared reflections",
  },
  {
    poster: "/images/gallery/review-thumbnail.jpeg",
    video: "/videos/audience14.mp4",
    caption: "Community engagement & shared reflections",
  },
  {
    poster: "/images/gallery/review-thumbnail.jpeg",
    video: "/videos/audience15.mp4",
    caption: "Community engagement & shared reflections",
  },
  {
    poster: "/images/gallery/review-thumbnail.jpeg",
    video: "/videos/audience16.mp4",
    caption: "Community engagement & shared reflections",
  },
  {
    poster: "/images/gallery/review-thumbnail.jpeg",
    video: "/videos/audience17.mp4",
    caption: "Community engagement & shared reflections",
  },
  {
    poster: "/images/gallery/review-thumbnail.jpeg",
    video: "/videos/audience18.mp4",
    caption: "Community engagement & shared reflections",
  },
];

export default function GalleryPage() {

  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <main className="bg-[#1b1b1b] text-white">

      {/* PAGE INTRO */}
      <section className="px-10 md:px-20 py-32 text-center">
        <h1 className="text-4xl md:text-5xl tracking-[0.35em] text-yellow-300 mb-6">
          GALLERY
        </h1>
        <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
          A visual journey through theatrical screenings, conversations,
          and moments that shaped <span className="italic">Me No Pause Me Play</span>.
        </p>
      </section>

      {/* LEAD ACTRESS FEATURE */}
      <section className="px-10 md:px-20 py-28 bg-[#161616]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="flex justify-center">
            <Image
              src="/images/gallery/lead-actress.jpg"
              alt="With lead actress"
              width={500}
              height={650}
              className="rounded-xl"
            />
          </div>

          {/* CONTENT */}
          <div>
            <h2 className="text-xs tracking-[0.35em] text-yellow-300 mb-6">
              LEAD ACTRESS MOMENT
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
  A special moment with the lead actress <span className="font-medium text-white">Kamya Punjabi</span> from{" "}
  <span className="italic">Me No Pause Me Play</span>,
  reflecting the spirit, strength, and sensitivity the film stands for.
</p>

<p className="text-gray-400 leading-relaxed">
  These interactions go beyond cinema — they represent dialogue,
  connection, and a shared commitment to meaningful storytelling
  that resonates with audiences beyond the screen.
</p>
          </div>

        </div>
      </section>

      {/* THEATRICAL SCREENINGS */}
      <section className="px-10 md:px-20 py-28">
        <h2 className="text-xs tracking-[0.35em] text-yellow-300 mb-10 text-center">
          THEATRICAL SCREENINGS
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
          From packed cinema halls to deeply engaged audiences,
          the film found its voice through collective viewing experiences.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
  {[
    "/images/gallery/crowed1.jpeg",
    "/images/gallery/crowed2.jpg",
    "/images/gallery/crowed3.jpg",
    "/images/gallery/crowed4.jpg",
    "/images/gallery/crowed5.jpg",
    "/images/gallery/crowed6.jpg",
    "/images/gallery/crowed7.jpg",
    "/images/gallery/crowed9.jpg",
    "/images/gallery/crowed10.jpg",
    "/images/gallery/crowed11.jpg",
    "/images/gallery/crowed12.jpg",
    "/images/gallery/crowed13.jpg",
    "/images/gallery/crowed14.jpeg",
    "/images/gallery/crowed15.jpeg",
    "/images/gallery/crowed16.jpeg",
    "/images/gallery/crowed17.jpeg",
    "/images/gallery/crowed18.jpeg",
    "/images/gallery/crowed19.jpeg",
  ].map((src, i) => (
    <div
      key={i}
      className="bg-[#161616] rounded-xl border border-white/10
                 flex items-center justify-center
                 aspect-[16/10]"
    >
      <Image
        src={src}
        alt="Theatrical screening"
        width={1200}
        height={750}
        className="object-contain max-h-full max-w-full rounded-lg"
      />
    </div>
  ))}
</div>

      </section>

     {/* ================= AUDIENCE & COMMUNITY ================= */}
<section className="px-10 md:px-20 py-28 bg-[#161616]">
  <div className="text-center max-w-4xl mx-auto mb-20">
    <h2 className="text-xs tracking-[0.35em] text-yellow-300 mb-6">
      AUDIENCE & COMMUNITY
    </h2>
    <p className="text-gray-400 leading-relaxed">
      Genuine audience reactions and community engagement captured during
      screenings of <span className="italic">Me No Pause Me Play</span>.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
    {audienceVideos.map((item, index) => (
      <button
        key={index}
        onClick={() => setActiveVideo(item.video)}
        className="group text-left"
      >
        <div className="relative rounded-xl overflow-hidden bg-black aspect-[9/16] flex items-center justify-center">
          <Image
  src={item.poster}
  alt={item.caption}
  fill
  className="object-cover"
/>


          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
            <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center text-white text-xl">
              ▶
            </div>
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-300 text-center">
          {item.caption}
        </p>
      </button>
    ))}
  </div>
</section>

{activeVideo && (
  <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-6">
    
    {/* CLOSE BUTTON */}
    <button
      onClick={() => setActiveVideo(null)}
      className="absolute top-6 right-6 text-white text-3xl hover:opacity-70 transition"
      aria-label="Close video"
    >
      ✕
    </button>

    {/* VIDEO CONTAINER */}
    <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
      <video
        src={activeVideo}
        controls
        autoPlay
        className="
          w-full
          max-h-[80vh]
          object-contain
          rounded-xl
          bg-black
        "
      />
    </div>
  </div>
)}





    </main>
  );
}
