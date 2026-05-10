import { useNavigate } from "react-router-dom";

function IntroPage() {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-[#eef3f5] text-[#3f3b37] overflow-hidden">

      {/* NAVBAR */}
      <div className="w-full flex items-center justify-center py-8 bg-white/60 backdrop-blur-md shadow-sm">

        <h1 className="text-4xl tracking-[10px] font-serif text-[#4a4039]">

          TRIPTALES

        </h1>

      </div>

      {/* HERO SECTION */}
      <div className="relative w-full h-[90vh] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop"
          alt="travel"
          className="w-full h-full object-cover brightness-[0.88]"
        />

        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px] flex flex-col items-center justify-center px-6 text-center">

          <h2 className="text-5xl md:text-7xl font-serif text-[#3f3b37] leading-tight">

            Discover
            <span className="italic font-light ml-4 text-[#6d5c51]">

              Wanderlust

            </span>

            <br />

            Adventures

          </h2>

          <p className="mt-6 italic text-lg md:text-2xl text-[#5f5750] max-w-3xl leading-relaxed">

            explore your world, one beautiful adventure at a time.

          </p>

          <button

            onClick={() => navigate("/login")}

            className="mt-10 bg-[#6d7f91] hover:bg-[#5d6f82] transition-all duration-300 text-white px-10 py-4 rounded-full text-lg shadow-2xl hover:scale-105"
          >

            Get Started ✨

          </button>

        </div>

      </div>

      {/* FIRST TRIP SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">

        <div>

          <img
            src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1200&auto=format&fit=crop"
            alt="first trip"
            className="rounded-[40px] shadow-2xl object-cover h-[500px] w-full"
          />

        </div>

        <div>

          <h2 className="text-5xl font-serif text-[#4f443d] leading-tight">

            Planning your

            <span className="italic block text-[#7a6558]">

              first trip?

            </span>

          </h2>

          <p className="mt-8 text-xl leading-relaxed text-[#5d5751]">

            First trips are always special. The excitement, the nervousness,
            the tiny little moments you remember forever — they deserve care.
            Don’t let confusion, rushed planning, or random decisions take away
            from the magic of your journey.

          </p>

          <p className="mt-6 text-lg leading-relaxed text-[#6a625c]">

            At TripTales, we want travel to feel calm, meaningful, and personal.
            Whether it’s a quiet mountain town, a dreamy beach, or a spontaneous
            solo adventure, we help you discover experiences through real people
            and real stories.

          </p>

        </div>

      </div>

      {/* COMMUNITY SECTION */}
      <div className="bg-white/60 py-28 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-serif text-[#4b4139]">

            A growing

            <span className="italic text-[#7b685c] ml-3">

              community

            </span>

            of travelers

          </h2>

          <p className="mt-10 text-xl leading-relaxed text-[#5e5750] max-w-4xl mx-auto">

            We are building more than just a travel platform.
            We are creating a space where travelers can share honest experiences,
            hidden gems, cozy cafés, peaceful stays, unforgettable itineraries,
            and memories that actually matter.

          </p>

          <p className="mt-6 text-lg leading-relaxed text-[#6c645d] max-w-4xl mx-auto">

            Every itinerary shared on TripTales comes from someone who explored,
            felt, learned, and wanted others to experience something beautiful too.
            Be a part of this little world of dreamers, explorers, storytellers,
            and wanderers.

          </p>

          <button

            onClick={() => navigate("/login")}

            className="mt-12 bg-[#4d5f73] hover:bg-[#425366] transition-all duration-300 text-white px-10 py-4 rounded-full text-lg shadow-xl hover:scale-105"
          >

            Join Our Community 🌍

          </button>

        </div>

      </div>

      {/* FOOTER */}
      <div className="py-10 text-center text-[#706861] italic text-lg">

        made with stories, memories & soft little adventures ✨

        <p className="mt-3 text-[#8a7f77]">

          by Ananya 🤍

        </p>

      </div>

    </div>

  );

}

export default IntroPage;