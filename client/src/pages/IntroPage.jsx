import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function IntroPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f7f1f3] text-[#2d2a26] overflow-hidden relative">

      {/* TEXTURE BACKGROUND */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#f2d7e1] rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#eadfe4] rounded-full blur-[140px]" />
      </div>

      {/* NAVBAR */}
      <nav className="relative z-10 flex items-center justify-between px-8 md:px-16 py-8">

        <h1 className="text-2xl tracking-[0.35em] font-light">
          TRIPTALES
        </h1>

        <div className="hidden md:flex items-center gap-10 text-[15px] text-[#5e5853]">
          <p className="cursor-pointer hover:text-black transition">
            Home
          </p>

          <p className="cursor-pointer hover:text-black transition">
            Explore
          </p>

          <p className="cursor-pointer hover:text-black transition">
            Stories
          </p>

          <p className="cursor-pointer hover:text-black transition">
            Community
          </p>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-24 pb-32">

        <div className="max-w-5xl">

          <p className="uppercase tracking-[0.4em] text-sm text-[#8b7d74] mb-8">
            discover meaningful travel
          </p>

          <h1 className="text-6xl md:text-8xl leading-[0.95] font-light tracking-tight text-[#2d2926]">

            Travel
            <span className="italic font-serif text-[#8f6f79]">
              {" "}beautifully
            </span>

            <br />

            with stories that feel real.

          </h1>

          <p className="mt-10 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-[#5f5853]">

            TripTales helps travelers discover cozy places,
            hidden experiences, peaceful stays, and authentic
            journeys shared by real people around the world.

          </p>

          {/* BUTTON */}
          <button
            onClick={() => navigate("/login")}
            className="group mt-14 bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-3 mx-auto hover:scale-[1.02] transition-all duration-300 shadow-xl"
          >

            <span className="text-[15px] tracking-wide">
              Get Started
            </span>

            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition"
            />

          </button>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="relative z-10 px-6 md:px-16 pb-28">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-[40px] p-10 shadow-[0_10px_60px_rgba(0,0,0,0.04)]">

            <p className="text-sm uppercase tracking-[0.3em] text-[#9b8a81] mb-6">
              Why TripTales
            </p>

            <h2 className="text-4xl leading-tight font-light text-[#2d2926]">

              Not just another
              travel platform.

            </h2>

            <p className="mt-8 text-[17px] leading-relaxed text-[#5d5651]">

              We wanted travel to feel softer, calmer,
              and more personal again.

              Instead of crowded guides and unrealistic
              recommendations, TripTales focuses on real
              experiences shared by people who genuinely
              explored a place.

            </p>

          </div>

          <div className="bg-[#efe4e8] rounded-[40px] p-10 shadow-[0_10px_60px_rgba(0,0,0,0.03)]">

            <p className="text-sm uppercase tracking-[0.3em] text-[#907d85] mb-6">
              Community
            </p>

            <h2 className="text-4xl leading-tight font-light text-[#2d2926]">

              Built for people
              who love meaningful journeys.

            </h2>

            <p className="mt-8 text-[17px] leading-relaxed text-[#5d5651]">

              From peaceful cafés and mountain towns
              to spontaneous solo trips and dreamy stays,
              every story on TripTales carries a memory
              worth sharing.

              Explore experiences that feel human,
              comforting, and authentic.

            </p>

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative z-10 px-6 md:px-16 pb-24">

        <div className="max-w-6xl mx-auto rounded-[50px] bg-[#1d1b19] text-white py-20 px-10 md:px-20 text-center overflow-hidden relative">

          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-gradient-to-br from-pink-200 to-transparent" />

          <h2 className="text-5xl md:text-6xl leading-tight font-light">

            Start collecting
            stories worth remembering.

          </h2>

          <p className="mt-8 text-lg text-[#d1cbc7] max-w-2xl mx-auto leading-relaxed">

            Join a growing community of travelers
            discovering places through emotion,
            experience, and real human connection.

          </p>

          <button
            onClick={() => navigate("/login")}
            className="group mt-12 bg-white text-black px-8 py-4 rounded-2xl flex items-center gap-3 mx-auto hover:scale-[1.02] transition-all duration-300"
          >

            <span className="text-[15px] tracking-wide">
              Join Our Community
            </span>

            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition"
            />

          </button>

        </div>

      </section>

    </div>
  );
}

export default IntroPage;