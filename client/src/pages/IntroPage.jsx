import { useNavigate } from "react-router-dom";

function IntroPage() {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-[#f6edef] text-[#1e1b1d] overflow-hidden">

      {/* NAVBAR */}
      <nav className="w-full px-6 md:px-16 py-10">

        <h1 className="text-6xl md:text-7xl font-extrabold tracking-[-0.04em] text-[#1d1a1b]">

          Trip
          <span className="text-[#b07c8d] ml-1">
            Tales
          </span>

        </h1>

      </nav>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 pt-4 pb-28 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <div>

          <p className="uppercase tracking-[0.35em] text-[12px] text-[#9c7f89] mb-8">

            discover meaningful travel

          </p>

          <h1 className="text-6xl md:text-8xl leading-[0.92] font-bold text-[#1d1a1b]">

            Travel
            <span className="text-[#b07c8d] font-medium">
              {" "}beautifully
            </span>

            <br />

            with stories
            <br />

            that feel real.

          </h1>

          <p className="mt-10 text-[18px] leading-[2] text-[#5f575b] max-w-xl">

            Some journeys become photographs.

            The special ones become memories you carry forever.

            Discover peaceful cafés, dreamy sunsets,
            hidden mountain towns, quiet roads,
            and emotional stories shared by travelers
            who truly lived those moments.

          </p>

          {/* BUTTON */}
          <div className="mt-12">

            <button
              onClick={() => navigate("/login")}
              className="bg-black text-white px-9 py-4 rounded-2xl text-[15px] hover:scale-[1.03] transition-all duration-300 shadow-xl"
            >

              Get Started

            </button>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative h-[620px] hidden md:block">

          {/* MAIN CARD */}
          <div className="absolute top-0 right-0 w-[380px] h-[500px] rounded-[45px] bg-gradient-to-br from-[#efdbe2] to-[#e8d1d9] shadow-[0_25px_70px_rgba(0,0,0,0.08)] p-8">

            <div className="w-full h-[300px] rounded-[35px] bg-[#f8eef1]" />

            <p className="mt-8 uppercase tracking-[0.28em] text-[11px] text-[#8d727c]">

              curated journeys

            </p>

            <h2 className="mt-4 text-3xl leading-tight text-[#2a2526] font-semibold">

              Places that stay
              with you forever.

            </h2>

          </div>

          {/* FLOATING CARD */}
          <div className="absolute bottom-10 left-0 w-[270px] rounded-[35px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.07)]">

            <div className="w-16 h-16 rounded-2xl bg-[#f2dbe2] mb-6" />

            <p className="uppercase tracking-[0.28em] text-[11px] text-[#8f7981]">

              real experiences

            </p>

            <p className="mt-5 leading-[1.9] text-[#595255]">

              Every memory holds a feeling —
              the laughter, the sunsets,
              the silence, the people,
              and the little moments
              that unexpectedly become unforgettable.

            </p>

          </div>

        </div>

      </section>

      {/* SECOND SECTION */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 pb-24">

        <div className="grid md:grid-cols-2 gap-10">

          {/* CARD 1 */}
          <div className="bg-white rounded-[38px] p-10 shadow-[0_15px_45px_rgba(0,0,0,0.05)] border border-[#f1e4e8]">

            <p className="uppercase tracking-[0.3em] text-[12px] text-[#a0818b]">

              why triptales

            </p>

            <h2 className="mt-6 text-4xl leading-tight font-semibold text-[#211d1f]">

              Travel is more than
              just destinations.

            </h2>

            <p className="mt-8 text-[17px] leading-[2] text-[#5f575b]">

              It’s the warmth of a tiny café on a rainy evening,
              the comfort of a quiet stay after a long journey,
              and the memories attached to places
              you never expected to miss.

              TripTales is built to preserve those feelings.

            </p>

          </div>

          {/* CARD 2 */}
          <div className="bg-[#f2e4e8] rounded-[38px] p-10 shadow-[0_15px_45px_rgba(0,0,0,0.04)]">

            <p className="uppercase tracking-[0.3em] text-[12px] text-[#9c7e88]">

              community

            </p>

            <h2 className="mt-6 text-4xl leading-tight font-semibold text-[#211d1f]">

              Stories that feel
              personal and human.

            </h2>

            <p className="mt-8 text-[17px] leading-[2] text-[#5f575b]">

              From hidden cafés and peaceful mountain towns
              to spontaneous late-night adventures,
              discover emotional travel experiences
              shared by people around the world.

            </p>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="px-6 md:px-16 pb-20">

        <div className="max-w-6xl mx-auto bg-[#1d1a1b] rounded-[50px] py-24 px-8 md:px-20 text-center text-white shadow-[0_25px_80px_rgba(0,0,0,0.15)]">

          <p className="uppercase tracking-[0.35em] text-[12px] text-[#d1b6c0]">

            start your journey

          </p>

          <h2 className="mt-6 text-5xl md:text-7xl leading-tight font-bold">

            Collect memories
            <span className="text-[#d9b3c0] font-medium">
              {" "}beautifully.
            </span>

          </h2>

          <p className="mt-10 max-w-3xl mx-auto text-[#d6c8cd] text-lg leading-[2]">

            The best journeys are never remembered
            only through pictures.

            They stay in the emotions,
            the people you met,
            the sunsets you watched quietly,
            and the memories that continue
            long after the trip ends.

          </p>

          <button
            onClick={() => navigate("/login")}
            className="mt-14 bg-white text-black px-10 py-4 rounded-2xl hover:scale-[1.03] transition-all duration-300 shadow-xl text-[15px] font-medium"
          >

            Join Community

          </button>

        </div>

      </section>

      {/* FOOTER */}
      <div className="pb-10 text-center">

        <p className="text-[#8e7b82] text-sm tracking-[0.18em]">

          made with ♡ by
          <span className="text-[#b07c8d] ml-2 font-medium">
            Ananya
          </span>

        </p>

      </div>

    </div>

  );

}

export default IntroPage;