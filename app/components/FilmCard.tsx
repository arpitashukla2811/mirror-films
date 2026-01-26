import Link from "next/link";
import Image from "next/image";

interface FilmCardProps {
  title: string;
  year: string;
  image: string;
}

export default function FilmCard({ title, year, image }: FilmCardProps) {
  return (
    <Link href="/films/me-no-pause-me-play" className="group block text-center">

      <Image
        src={image}
        alt={title}
        width={600}
        height={340}
        className="rounded-xl object-contain transition-transform duration-300 group-hover:scale-[1.03]"
      />

      <h3 className="mt-6 text-sm tracking-widest text-white group-hover:text-yellow-300 transition">
        {title}
      </h3>

      <p className="mt-1 text-xs tracking-widest text-gray-400">
        {year}
      </p>

    </Link>
  );
}
