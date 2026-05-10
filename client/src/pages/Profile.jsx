import { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Profile({ trips = [] }) {

  const navigate = useNavigate();

  const currentUser =
    auth.currentUser;

  const [activeTab, setActiveTab] =
    useState("posts");

  /* USER POSTS */
  const myTrips = trips.filter(
    (trip) =>
      trip.userId === currentUser?.uid
  );

  /* SAVED */
  const savedTrips = trips.filter(
    (trip) =>
      trip.savedBy?.includes(
        currentUser?.uid
      )
  );

  /* LIKED */
  const likedTrips = trips.filter(
    (trip) =>
      trip.likes?.includes(
        currentUser?.uid
      )
  );

  /* ACTIVE DATA */
  const activeTrips =

    activeTab === "posts"

      ? myTrips

      : activeTab === "saved"

      ? savedTrips

      : likedTrips;

  return (

    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-6">

      {/* PROFILE CARD */}
      <div className="max-w-5xl mx-auto bg-white/40 backdrop-blur-lg rounded-3xl shadow-2xl p-8">

        <div className="flex flex-col md:flex-row items-center gap-6">

          {/* AVATAR */}
          <img
            src={
              currentUser?.photoURL ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="profile"
            className="w-32 h-32 rounded-full object-cover shadow-xl"
          />

          {/* INFO */}
          <div className="text-center md:text-left">

            <h1 className="text-4xl font-bold text-purple-700">

              {currentUser?.displayName ||
                "TripTales User"}

            </h1>

            <p className="text-gray-700 mt-2 text-lg">

              {currentUser?.email}

            </p>

            <p className="mt-3 text-gray-600">

              Exploring the world one trip at a time ✨

            </p>

            {/* STATS */}
            <div className="flex flex-wrap gap-6 mt-6 justify-center md:justify-start">

              <div className="bg-white/50 px-6 py-3 rounded-2xl shadow-lg">

                <p className="text-2xl font-bold text-purple-700">

                  {myTrips.length}

                </p>

                <p className="text-gray-600">

                  Posts

                </p>

              </div>

              <div className="bg-white/50 px-6 py-3 rounded-2xl shadow-lg">

                <p className="text-2xl font-bold text-pink-600">

                  {savedTrips.length}

                </p>

                <p className="text-gray-600">

                  Saved

                </p>

              </div>

              <div className="bg-white/50 px-6 py-3 rounded-2xl shadow-lg">

                <p className="text-2xl font-bold text-red-500">

                  {likedTrips.length}

                </p>

                <p className="text-gray-600">

                  Liked

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* TABS */}
      <div className="max-w-6xl mx-auto mt-10 flex flex-wrap gap-4">

        <button
          onClick={() =>
            setActiveTab("posts")
          }
          className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
            activeTab === "posts"
              ? "bg-black text-white"
              : "bg-white"
          }`}
        >

          My Posts

        </button>

        <button
          onClick={() =>
            setActiveTab("saved")
          }
          className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
            activeTab === "saved"
              ? "bg-black text-white"
              : "bg-white"
          }`}
        >

          Saved

        </button>

        <button
          onClick={() =>
            setActiveTab("liked")
          }
          className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
            activeTab === "liked"
              ? "bg-black text-white"
              : "bg-white"
          }`}
        >

          Liked

        </button>

      </div>

      {/* TRIPS GRID */}
      <div className="max-w-6xl mx-auto mt-12">

        <div className="grid md:grid-cols-3 gap-8">

          {activeTrips.length > 0 ? (

            activeTrips.map((trip) => (

              <div
                key={trip._id}
                className="bg-white/40 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl"
              >

                {/* IMAGE */}
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-56 object-cover"
                />

                {/* CONTENT */}
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

                  {/* BUTTON */}
                  <button
                    onClick={() =>
                      navigate(
                        `/itinerary/${trip._id}`
                      )
                    }
                    className="mt-5 w-full bg-black text-white py-3 rounded-2xl hover:scale-[1.02] transition-all duration-300"
                  >

                    View Itinerary

                  </button>

                </div>

              </div>

            ))

          ) : (

            <div className="text-2xl font-bold text-purple-700">

              No trips here yet 😔

            </div>

          )}

        </div>

      </div>

    </div>

  );

}

export default Profile;