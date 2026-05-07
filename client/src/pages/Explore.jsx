import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

import axios from "axios";

import { useAuth } from "../context/AuthContext";

function Explore({ trips = [] }) {

  const navigate = useNavigate();

  const { logout } = useAuth();

  const [showMenu, setShowMenu] =
    useState(false);

  const [selectedType, setSelectedType] =
    useState("All");

  const [selectedBudget, setSelectedBudget] =
    useState("All");

  const [searchTerm, setSearchTerm] =
    useState("");

  const [localTrips, setLocalTrips] =
    useState([]);

  useEffect(() => {
    setLocalTrips(trips);
  }, [trips]);

  const filteredTrips = localTrips.filter((trip) => {

    const matchesType =
      selectedType === "All" ||
      trip.type === selectedType;

    const matchesSearch =
      trip.title
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesBudget =
      selectedBudget === "All" ||

      (selectedBudget === "3000" &&
        trip.budget <= 3000) ||

      (selectedBudget === "5000" &&
        trip.budget <= 5000) ||

      (selectedBudget === "7000" &&
        trip.budget <= 7000) ||

      (selectedBudget === "10000" &&
        trip.budget <= 10000) ||

      (selectedBudget === "15000" &&
        trip.budget <= 15000);

    return (
      matchesType &&
      matchesSearch &&
      matchesBudget
    );

  });

  const handleLogout = async () => {

    await logout();

    navigate("/");

  };

  const handleDelete = async (id) => {

    try {

      await axios.delete(
        `https://triptales-1-pb97.onrender.com/api/trips/${id}`
      );

      const updatedTrips =
        localTrips.filter(
          (trip) => trip._id !== id
        );

      setLocalTrips(updatedTrips);

      alert("Trip Deleted 🗑");

    } catch (error) {

      console.log(error);

      alert("Delete Failed ❌");

    }

  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 pb-16">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-10 py-6">

        <h1 className="text-4xl font-bold text-purple-700">
          TripTales
        </h1>

        <div className="flex items-center gap-4 relative">

          {/* Create Post */}
          <button
            onClick={() =>
              navigate("/create-post")
            }
            className="bg-white/50 backdrop-blur-lg px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
          >

            Create Post

          </button>

          {/* Profile */}
          <div
            onClick={() =>
              setShowMenu(!showMenu)
            }
            className="w-12 h-12 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 shadow-lg cursor-pointer hover:scale-105 transition-all duration-300"
          ></div>

          {/* Dropdown */}
          {showMenu && (

            <div className="absolute top-16 right-0 w-56 bg-white rounded-3xl shadow-2xl overflow-hidden z-50">

              <button
                onClick={() =>
                  navigate("/settings")
                }
                className="w-full text-left px-6 py-4 hover:bg-purple-100 transition-all duration-200"
              >

                ⚙ Settings

              </button>

              <button
                onClick={() =>
                  navigate("/help")
                }
                className="w-full text-left px-6 py-4 hover:bg-purple-100 transition-all duration-200"
              >

                ❓ Help

              </button>

              <button
                onClick={() =>
                  navigate("/about")
                }
                className="w-full text-left px-6 py-4 hover:bg-purple-100 transition-all duration-200"
              >

                ℹ About Us

              </button>

              <button
                onClick={handleLogout}
                className="w-full text-left px-6 py-4 text-red-500 hover:bg-red-100 transition-all duration-200"
              >

                🚪 Logout

              </button>

            </div>

          )}

        </div>

      </nav>

      {/* Hero */}
      <section className="text-center mt-10 px-4">

        <h2 className="text-5xl md:text-7xl font-bold text-gray-800 leading-tight">

          Discover journeys
          <br />
          shared by travelers.

        </h2>

        <p className="text-gray-600 mt-6 text-xl">

          Real itineraries, real budgets,
          real experiences.

        </p>

      </section>

      {/* Filters */}
      <div className="max-w-6xl mx-auto mt-12 bg-white/40 backdrop-blur-xl rounded-[40px] shadow-2xl p-8">

        <div className="grid md:grid-cols-3 gap-6">

          {/* Search */}
          <input
            type="text"
            placeholder="Search destination..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
            className="p-4 rounded-2xl bg-white/60 border border-white/40 outline-none text-lg"
          />

          {/* Type */}
          <select
            value={selectedType}
            onChange={(e) =>
              setSelectedType(e.target.value)
            }
            className="p-4 rounded-2xl bg-white/60 border border-white/40 outline-none text-lg"
          >

            <option value="All">
              All Travelers
            </option>

            <option value="Solo">
              Solo
            </option>

            <option value="Group">
              Friends / Group
            </option>

            <option value="Family">
              Family
            </option>

          </select>

          {/* Budget */}
          <select
            value={selectedBudget}
            onChange={(e) =>
              setSelectedBudget(e.target.value)
            }
            className="p-4 rounded-2xl bg-white/60 border border-white/40 outline-none text-lg"
          >

            <option value="All">
              All Budgets
            </option>

            <option value="3000">
              Under ₹3,000
            </option>

            <option value="5000">
              Under ₹5,000
            </option>

            <option value="7000">
              Under ₹7,000
            </option>

            <option value="10000">
              Under ₹10,000
            </option>

            <option value="15000">
              Under ₹15,000
            </option>

          </select>

        </div>

      </div>

      {/* Trips */}
      <section className="grid md:grid-cols-3 gap-10 px-6 md:px-10 mt-16">

        {filteredTrips.length > 0 ? (

          filteredTrips.map((trip) => (

            <div
              key={trip._id}
              className="bg-white/40 backdrop-blur-xl rounded-[35px] overflow-hidden shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >

              {/* Image */}
              <img
                src={trip.image}
                alt={trip.title}
                className="w-full h-[260px] object-cover"
              />

              {/* Content */}
              <div className="p-8">

                <h2 className="text-3xl font-bold text-gray-800">

                  {trip.title}

                </h2>

                <div className="flex items-center justify-between mt-5">

                  <p className="text-gray-600 text-lg">

                    {trip.type}

                  </p>

                  <p className="text-gray-700 text-xl font-semibold">

                    {trip.displayBudget}

                  </p>

                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-8">

                  <button
                    onClick={() =>
                      navigate(
                        `/itinerary/${trip._id}`
                      )
                    }
                    className="flex-1 bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white py-4 rounded-3xl text-lg font-semibold shadow-xl hover:scale-105 transition-all duration-300"
                  >

                    View

                  </button>

                  <button
                    onClick={() =>
                      handleDelete(trip._id)
                    }
                    className="bg-red-500 text-white px-5 rounded-3xl hover:bg-red-600 transition-all duration-300"
                  >

                    🗑

                  </button>

                </div>

              </div>

            </div>

          ))

        ) : (

          <div className="col-span-full flex items-center justify-center text-4xl font-bold text-purple-700 mt-20">

            No Trips Found 😔

          </div>

        )}

      </section>

    </div>

  );

}

export default Explore;