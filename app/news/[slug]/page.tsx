import Image from "next/image";

export default function NewsDetailPage() {
  return (
    <main className="bg-[#1b1b1b] text-white pt-[72px] px-10 md:px-20 py-24">

      <article className="max-w-3xl mx-auto">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl tracking-wide text-yellow-300 mb-4">
          Me No Pause Me Play Creates Strong Impact Across Northern India
        </h1>

        <p className="text-sm text-gray-500 mb-10">
          28 November 2025
        </p>

        {/* IMAGE */}
        <Image
          src="/images/news/news1.jpg"
          alt="Me No Pause Me Play News"
          width={900}
          height={500}
          className="rounded-xl mb-10"
        />

        {/* CONTENT */}
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            <span className="italic">Me No Pause Me Play</span>, the first
            Indian feature film to address menopausal issues, has created
            a powerful impact across Northern India, including Uttar Pradesh,
            Delhi, and Punjab.
          </p>

          <p>
            Produced by Manoj Kumar Sharma, the film stars Manoj Kumar Sharma
            and Kamya Punjabi in lead roles, delivering deeply emotional
            performances that resonated strongly with women and family audiences.
          </p>

          <p>
            With an exceptional IMDb rating of 9.1, the film has been widely
            appreciated by critics and viewers for breaking social taboos
            and initiating meaningful conversations around women’s health.
          </p>

          <p className="text-gray-400">
            #emancipation #breakingSocialTaboos #beingVocal #menopause
          </p>
        </div>

      </article>

    </main>
  );
}
