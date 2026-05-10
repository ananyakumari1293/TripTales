import { useNavigate } from "react-router-dom";

function IntroPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f6edef] text-[#1e1b1d] overflow-hidden">

      {/* NAVBAR */}
      <nav className="w-full px-6 md:px-16 py-10">

        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-[#1d1a1b]">

          Trip
          <span className="italic font-serif text-[#b07c8d] font-normal">
            Tales
          </span>

        </h1>

      </nav>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 pt-4 pb-24 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>

          <p className="uppercase tracking-[0.3em] text-[12px] text-[#9c7f89] mb-8">
            discover meaningful travel
          </p>

          <h1 className="text-6xl md:text-8xl leading-[0.95] font-bold text-[#1d1a1b]">

            Travel
            <span className="italic font-serif text-[#b07c8d] font-normal">
              {" "}beautifully
            </span>

            <br />

            with stories
            <br />

            that feel real.

          </h1>

          <p className="mt-10 text-[18px] leading-[1.9] text-[#5f575b] max-w-xl">

            Discover cozy places, peaceful stays, hidden cafés,
            dreamy sunsets, and authentic journeys shared by real travelers.

          </p>

          {/* BUTTON */}
          <div className="mt-12">

            <button
              onClick={() => navigate("/login")}
              className="bg-black text-white px-8 py-4 rounded-2xl text-[15px] hover:scale-[1.02] transition-all duration-300 shadow-xl"
            >
              Get Started
            </button>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative h-[600px] hidden md:block">

          {/* BIG CARD */}
          <div className="absolute top-0 right-0 w-[360px] h-[470px] rounded-[40px] bg-gradient-to-br from-[#efdbe2] to-[#e8d1d9] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8">

            <div className="w-full h-[280px] rounded-[30px] bg-[#f8eef1]" />

            <p className="mt-8 uppercase tracking-[0.25em] text-[11px] text-[#8d727c]">
              curated journeys
            </p>

            <h2 className="mt-3 text-3xl leading-tight text-[#2a2526]">

              Explore moments
              <span className="italic font-serif text-[#a67686]">
                {" "}beautifully.
              </span>

            </h2>

          </div>

          {/* FLOATING CARD */}
          <div className="absolute bottom-10 left-0 w-[260px] rounded-[35px] bg-white p-7 shadow-[0_20px_50px_rgba(0,0,0,0.07)]">

            <div className="w-14 h-14 rounded-2xl bg-[#f2dbe2] mb-6" />

            <p className="uppercase tracking-[0.25em] text-[11px] text-[#8f7981]">
              real experiences
            </p>

            <p className="mt-5 leading-[1.8] text-[#595255]">

              Find places and stories shared by people
              who genuinely experienced them.

            </p>

          </div>

        </div>

      </section>

      {/* SECOND SECTION */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 pb-24">

        <div className="grid md:grid-cols-2 gap-10">

          {/* CARD 1 */}
          <div className="bg-white rounded-[35px] p-10 shadow-[0_15px_40px_rgba(0,0,0,0.05)] border border-[#f1e4e8]">

            <p className="uppercase tracking-[0.3em] text-[12px] text-[#a0818b]">
              why triptales
            </p>

            <h2 className="mt-6 text-4xl leading-tight font-semibold text-[#211d1f]">

              Not just another
              <span className="italic font-serif text-[#ab7787]">
                {" "}travel platform.
              </span>

            </h2>

            <p className="mt-8 text-[17px] leading-[1.9] text-[#5f575b]">

              TripTales is made for travelers who want experiences
              that feel calm, personal, and meaningful instead of loud,
              crowded, and artificial.

            </p>

          </div>

          {/* CARD 2 */}
          <div className="bg-[#f2e4e8] rounded-[35px] p-10 shadow-[0_15px_40px_rgba(0,0,0,0.04)]">

            <p className="uppercase tracking-[0.3em] text-[12px] text-[#9c7e88]">
              community
            </p>

            <h2 className="mt-6 text-4xl leading-tight font-semibold text-[#211d1f]">

              Built for people
              who travel
              <span className="italic font-serif text-[#ab7787]">
                {" "}differently.
              </span>

            </h2>

            <p className="mt-8 text-[17px] leading-[1.9] text-[#5f575b]">

              Discover hidden cafés, peaceful mountain towns,
              dreamy sunsets, and unforgettable memories shared
              by real travelers around the world.

            </p>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="px-6 md:px-16 pb-28">

        <div className="max-w-6xl mx-auto bg-[#1d1a1b] rounded-[45px] py-20 px-8 md:px-20 text-center text-white">

          <p className="uppercase tracking-[0.3em] text-[12px] text-[#d1b6c0]">
            start your journey
          </p>

          <h2 className="mt-6 text-5xl md:text-6xl leading-tight font-bold">

            Collect memories
            <span className="italic font-serif text-[#d9b3c0] font-normal">
              {" "}beautifully.
            </span>

          </h2>

          <p className="mt-8 max-w-2xl mx-auto text-[#d6c8cd] text-lg leading-[1.9]">

            Join a growing community discovering places through
            emotion, comfort, and real experiences.

          </p>

          <button
            onClick={() => navigate("/login")}
            className="mt-12 bg-white text-black px-10 py-4 rounded-2xl hover:scale-[1.02] transition-all duration-300 shadow-xl"
          >
            Join Community
          </button>

        </div>

      </section>

    </div>
  );
}

export default IntroPage;