export default function ContactPage() {
  return (
    <main className="bg-[#1b1b1b] text-white pt-[72px]">

      {/* PAGE HEADER */}
      <section className="px-10 md:px-20 py-32 text-center">
        <h1 className="text-4xl md:text-5xl tracking-[0.35em] text-yellow-300 mb-6">
          CONTACT
        </h1>
        <p className="text-sm text-gray-400 max-w-2xl mx-auto">
          For collaborations, screenings, press, or general enquiries.
        </p>
      </section>

      {/* CONTACT CONTENT */}
      <section className="px-10 md:px-20 py-28 border-t border-white/10">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* CONTACT INFO */}
          <div className="space-y-8">
            <h2 className="text-xs tracking-[0.35em] text-yellow-300">
              CONTACT INFORMATION
            </h2>

            <div className="space-y-4 text-sm text-gray-300">
              <p>
                <span className="text-gray-400 block mb-1">Email</span>
                fmirrro@gmail.com
              </p>

              <p>
                <span className="text-gray-400 block mb-1">Phone</span>
                +91 98196 12604
              </p>

              <p>
                <span className="text-gray-400 block mb-1">Location</span>
                Thane, Maharashtra
              </p>
            </div>

            {/* SOCIAL ICONS */}
<div className="pt-6">
  <h3 className="text-xs tracking-[0.35em] text-yellow-300 mb-4">
    FOLLOW
  </h3>

  <div className="flex items-center gap-6">

    {/* Instagram */}
    <a
      href="https://www.instagram.com/mirrrofilmsofficial?igsh=MTh0MGxmNmdvN2lraw=="
      target="_blank"
      aria-label="Instagram"
      className="hover:opacity-80 transition"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#E1306C">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10z"/>
      </svg>
    </a>

    {/* YouTube */}
    <a
      href="https://youtube.com/@mirrrofilms?si=8LTtxHflCJXQZBF8"
      target="_blank"
      aria-label="YouTube"
      className="hover:opacity-80 transition"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#FF0000">
        <path d="M23.5 6.2s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.4-1C16.8 2.5 12 2.5 12 2.5h0s-4.8 0-8.2.4c-.5.1-1.5.1-2.4 1-.7.7-.9 2.3-.9 2.3S0 8.1 0 10v1.9c0 1.9.5 3.8.5 3.8s.2 1.6.9 2.3c.9.9 2.1.9 2.6 1 1.9.2 8 .4 8 .4s4.8 0 8.2-.4c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.3.9-2.3s.5-1.9.5-3.8V10c0-1.9-.5-3.8-.5-3.8zM9.6 13.9V7.8l6.4 3.1-6.4 3z"/>
      </svg>
    </a>

    {/* X (Twitter) */}
    <a
      href="https://x.com/"
      target="_blank"
      aria-label="X"
      className="hover:opacity-80 transition"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#000000">
        <path d="M18.9 2H22l-7.6 8.7L23 22h-6.8l-5.3-6.9L4.7 22H1.6l8.2-9.4L1 2h6.9l4.8 6.2L18.9 2z"/>
      </svg>
    </a>

    {/* Facebook */}
    <a
      href="https://www.facebook.com/"
      target="_blank"
      aria-label="Facebook"
      className="hover:opacity-80 transition"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#1877F2">
        <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-3h2.4V9.7c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.5.7-1.5 1.4V12H16l-.4 3h-2.3v7A10 10 0 0 0 22 12z"/>
      </svg>
    </a>

  </div>
</div>


          </div>

          {/* CONTACT FORM */}
          <form className="space-y-6">
            <input className="w-full bg-[#161616] border border-white/10 px-4 py-3" placeholder="Your Name" />
            <input className="w-full bg-[#161616] border border-white/10 px-4 py-3" placeholder="Your Email" />
            <textarea rows={5} className="w-full bg-[#161616] border border-white/10 px-4 py-3" placeholder="Your Message" />
            <button className="border border-yellow-300 text-yellow-300 px-8 py-3 text-xs tracking-widest hover:bg-yellow-300 hover:text-black transition">
              SEND MESSAGE
            </button>
          </form>

        </div>
      </section>

    </main>
  );
}
