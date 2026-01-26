export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-10 md:px-20 py-16 text-center bg-[#1b1b1b]">
      
      <h3 className="text-sm tracking-[0.35em] text-yellow-300 mb-4">
        MIRRRO FILMS
      </h3>

      <p className="text-xs tracking-widest text-gray-400 mb-6">
        CINEMA • STORIES • VISUAL POETRY
      </p>

      <p className="text-xs text-gray-500">
        © {new Date().getFullYear()} MIRRRO FILMS. All rights reserved.
      </p>

    </footer>
  );
}
