function Help() {

  return (

    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-8">

      <div className="max-w-4xl mx-auto bg-white/40 backdrop-blur-lg rounded-3xl shadow-2xl p-10">

        <h1 className="text-5xl font-bold text-purple-700">
          Help Center
        </h1>

        <p className="text-gray-600 mt-4 text-lg">
          Need help using TripTales?
        </p>

        <div className="mt-10 space-y-6">

          <div className="bg-white/50 rounded-2xl p-6 shadow-md">

            <h2 className="text-2xl font-semibold text-gray-800">
              How to create a trip?
            </h2>

            <p className="text-gray-600 mt-3">
              Go to Create Post and fill your itinerary details.
            </p>

          </div>

          <div className="bg-white/50 rounded-2xl p-6 shadow-md">

            <h2 className="text-2xl font-semibold text-gray-800">
              How to search trips?
            </h2>

            <p className="text-gray-600 mt-3">
              Use search and filters on the Explore page.
            </p>

          </div>

          <div className="bg-white/50 rounded-2xl p-6 shadow-md">

            <h2 className="text-2xl font-semibold text-gray-800">
              Contact Support
            </h2>

            <p className="text-gray-600 mt-3">
              support@triptales.com
            </p>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Help;