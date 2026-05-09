import { auth } from "../firebase";

function Profile({ trips = [] }) {

  const currentUser =
    auth.currentUser;

  const myTrips = trips.filter(
    (trip) =>
      trip.userId === currentUser?.uid
  );

  return (

    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-6">

      {/* Profile Card */}
      <div className="max-w-4xl mx-auto bg-white/40 backdrop-blur-lg rounded-3xl shadow-2xl p-8">

        <div className="flex flex-col md:flex-row items-center gap-6">

          {/* Avatar */}
          <img
            src={
              currentUser?.photoURL ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="profile"
            className="w-32 h-32 rounded-full object-cover shadow-xl"
          />

          {/* User Info */}
          <div>

            <h1 className="text-4xl font-bold text-purple-700">

              {currentUser?.displayName ||
                "TripTales User"}

            </h1>

            <p className="text-gray-700 mt-2 text-lg">

              {currentUser?.email}

            </p>

            <div className="flex gap-6 mt-4">

              <div className="bg-white/50 px-6 py-3 rounded-2xl shadow-lg">

                <p className="text-2xl font-bold text-purple-700">

                  {myTrips.length}

                </p>

                <p className="text-gray-600">

                  My Trips

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* My Trips */}
      <div className="max-w-6xl mx-auto mt-12">

        <h2 className="text-4xl font-bold text-purple-700 mb-8">

          My Trips

        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {myTrips.length > 0 ? (

            myTrips.map((trip) => (

              <div
                key={trip._id}
                className="bg-white/40 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl"
              >

                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">

                  <h3 className="text-2xl font-bold text-gray-800">

                    {trip.title}

                  </h3>

                  <p className="text-gray-600 mt-2">

                    {trip.type}

                  </p>

                  <p className="text-purple-700 font-semibold mt-2">

                    {trip.displayBudget}

                  </p>

                </div>

              </div>

            ))

          ) : (

            <div className="text-2xl font-bold text-purple-700">

              No trips published yet 😔

            </div>

          )}

        </div>

      </div>

    </div>

  );

}

export default Profile;