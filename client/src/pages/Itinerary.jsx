import { useParams } from "react-router-dom";

function Itinerary({ trips }) {

  const { id } = useParams();

  const trip = trips.find(
    (trip) => trip._id === id
  );

  if (!trip) {

    return (

      <div className="min-h-screen flex items-center justify-center text-5xl font-bold">

        Trip Not Found

      </div>

    );

  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 py-10 px-4">

      <div className="max-w-6xl mx-auto">

        {/* Hero Image */}
        <div className="rounded-3xl overflow-hidden shadow-2xl">

          <img
            src={trip.image}
            alt={trip.title}
            className="w-full h-[450px] object-cover"
          />

        </div>

        {/* Main Content */}
        <div className="bg-white/50 backdrop-blur-lg rounded-3xl shadow-2xl p-8 mt-8">

          {/* Title */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <div>

              <h1 className="text-5xl font-bold text-purple-700">
                {trip.title}
              </h1>

              <p className="text-gray-600 text-xl mt-2">
                {trip.type} Trip
              </p>

            </div>

            <div className="bg-purple-600 text-white px-6 py-3 rounded-2xl text-2xl font-bold shadow-xl">

              {trip.displayBudget}

            </div>

          </div>

          {/* Overview */}
          <div className="mt-10">

            <h2 className="text-3xl font-bold text-purple-700 mb-4">
              Overview
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">

              {trip.overview}

            </p>

          </div>

          {/* Day Plans */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="bg-white/60 p-6 rounded-3xl shadow-lg">

              <h3 className="text-2xl font-bold text-purple-700 mb-4">
                Day 1
              </h3>

              <p className="text-gray-700 leading-relaxed">

                {trip.day1}

              </p>

            </div>

            <div className="bg-white/60 p-6 rounded-3xl shadow-lg">

              <h3 className="text-2xl font-bold text-purple-700 mb-4">
                Day 2
              </h3>

              <p className="text-gray-700 leading-relaxed">

                {trip.day2}

              </p>

            </div>

            <div className="bg-white/60 p-6 rounded-3xl shadow-lg">

              <h3 className="text-2xl font-bold text-purple-700 mb-4">
                Day 3
              </h3>

              <p className="text-gray-700 leading-relaxed">

                {trip.day3}

              </p>

            </div>

          </div>

          {/* Dos and Don'ts */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">

            {/* Dos */}
            <div className="bg-green-100 p-6 rounded-3xl shadow-lg">

              <h2 className="text-3xl font-bold text-green-700 mb-4">

                Do’s ✅

              </h2>

              <ul className="space-y-3">

                {trip.dos?.map((item, index) => (

                  <li
                    key={index}
                    className="text-gray-700"
                  >

                    • {item}

                  </li>

                ))}

              </ul>

            </div>

            {/* Donts */}
            <div className="bg-red-100 p-6 rounded-3xl shadow-lg">

              <h2 className="text-3xl font-bold text-red-700 mb-4">

                Don’ts ❌

              </h2>

              <ul className="space-y-3">

                {trip.donts?.map((item, index) => (

                  <li
                    key={index}
                    className="text-gray-700"
                  >

                    • {item}

                  </li>

                ))}

              </ul>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Itinerary;