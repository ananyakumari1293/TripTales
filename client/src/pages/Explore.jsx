import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase";

import {
  FiMoreVertical,
  FiShare2,
  FiBookmark,
  FiEdit,
  FiTrash2,
  FiArchive,
  FiSettings,
  FiInfo,
} from "react-icons/fi";

import { AiFillHeart } from "react-icons/ai";

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

  const [activeMenuId, setActiveMenuId] =
    useState(null);

  useEffect(() => {

    setLocalTrips(trips);

  }, [trips]);

  /* FILTERS */
  const filteredTrips =
    localTrips.filter((trip) => {

      const matchesType =

        selectedType === "All" ||
        trip.type === selectedType;

      const matchesSearch =

        trip.title
          ?.toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          );

      const matchesBudget =

        selectedBudget === "All" ||

        (selectedBudget === "3000" &&
          trip.budget <= 3000) ||

        (selectedBudget === "5000" &&
          trip.budget <= 5000) ||

        (selectedBudget === "10000" &&
          trip.budget <= 10000);

      return (
        matchesType &&
        matchesSearch &&
        matchesBudget
      );

    });

  /* LOGOUT */
  const handleLogout =
    async () => {

      await logout();

      navigate("/");

    };

  /* DELETE */
  const handleDelete =
    async (id) => {

      try {

        await axios.delete(
          `https://triptales-1-pb97.onrender.com/api/trips/${id}`
        );

        const updatedTrips =
          localTrips.filter(
            (trip) =>
              trip._id !== id
          );

        setLocalTrips(
          updatedTrips
        );

        alert(
          "Trip Deleted 🗑"
        );

      } catch (error) {

        console.log(error);

        alert(
          "Delete Failed"
        );

      }

    };

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#fff1f7] via-[#ffe4ee] to-[#ffeef8] pb-16">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 md:px-10 py-6">

        <h1 className="text-4xl font-bold text-black">

          TripTales

        </h1>

        <div className="flex items-center gap-4 relative">

          {/* CREATE */}
          <button
            onClick={() =>
              navigate("/create-post")
            }
            className="bg-black text-white px-6 py-3 rounded-full shadow-lg"
          >

            Create

          </button>

          {/* PROFILE IMAGE */}
          <div
            onClick={() =>
              setShowMenu(!showMenu)
            }
            className="w-12 h-12 rounded-full overflow-hidden cursor-pointer border-2 border-white shadow-lg"
          >

            <img
              src={
                auth.currentUser?.photoURL ||

                "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }

              alt="profile"

              className="w-full h-full object-cover"
            />

          </div>

          {/* NAVBAR MENU */}
          {showMenu && (

            <div className="absolute top-16 right-0 w-60 bg-white rounded-3xl shadow-2xl overflow-hidden z-50">

              <button
                onClick={() =>
                  navigate("/profile")
                }
                className="w-full text-left px-6 py-4 hover:bg-pink-50"
              >

                👤 My Profile

              </button>

              <button
                onClick={() =>
                  navigate("/settings")
                }
                className="w-full text-left px-6 py-4 hover:bg-pink-50 flex items-center gap-3"
              >

                <FiSettings />

                Settings

              </button>

              <button
                onClick={() =>
                  navigate("/about")
                }
                className="w-full text-left px-6 py-4 hover:bg-pink-50 flex items-center gap-3"
              >

                <FiInfo />

                About Us

              </button>

              <button
                onClick={handleLogout}
                className="w-full text-left px-6 py-4 text-red-500 hover:bg-red-50"
              >

                🚪 Logout

              </button>

            </div>

          )}

        </div>

      </nav>

      {/* HERO */}
      <section className="text-center mt-6 px-4">

        <h2 className="text-5xl md:text-6xl font-bold text-black">

          Discover dreamy
          <br />
          travel stories ✨

        </h2>

        <p className="text-gray-500 mt-5 text-lg">

          Explore real experiences
          shared by travelers.

        </p>

      </section>

      {/* FILTERS */}
      <div className="max-w-6xl mx-auto mt-10 bg-white/60 backdrop-blur-xl rounded-[35px] shadow-xl p-5">

        <div className="grid md:grid-cols-3 gap-4">

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search destination..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(
                e.target.value
              )
            }
            className="p-4 rounded-2xl bg-white outline-none"
          />

          {/* TYPE */}
          <select
            value={selectedType}
            onChange={(e) =>
              setSelectedType(
                e.target.value
              )
            }
            className="p-4 rounded-2xl bg-white outline-none"
          >

            <option value="All">
              All Travelers
            </option>

            <option value="Solo">
              Solo
            </option>

            <option value="Group">
              Group
            </option>

            <option value="Family">
              Family
            </option>

          </select>

          {/* BUDGET */}
          <select
            value={selectedBudget}
            onChange={(e) =>
              setSelectedBudget(
                e.target.value
              )
            }
            className="p-4 rounded-2xl bg-white outline-none"
          >

            <option value="All">
              All Budgets
            </option>

            <option value="3000">
              Under ₹3k
            </option>

            <option value="5000">
              Under ₹5k
            </option>

            <option value="10000">
              Under ₹10k
            </option>

          </select>

        </div>

      </div>

      {/* TRIPS */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 md:px-10 mt-14">

        {filteredTrips.length > 0 ? (

          filteredTrips.map((trip) => {

            const isOwner =
              trip.userId ===
              auth.currentUser?.uid;

            return (

              <div
                key={trip._id}
                className="bg-white/70 backdrop-blur-xl rounded-[32px] overflow-visible shadow-xl relative"
              >

                {/* IMAGE */}
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-[190px] object-cover rounded-t-[32px]"
                />

                {/* CONTENT */}
                <div className="p-5">

                  {/* USER */}
                  <div className="flex items-center gap-3">

                    <img
                      src={
                        trip.userPhoto ||

                        "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      }

                      alt="user"

                      className="w-10 h-10 rounded-full object-cover"
                    />

                    <div>

                      <p className="font-semibold text-sm">

                        {trip.userId === auth.currentUser?.uid

  ? userData?.username ||

    "Traveler"

  : trip.userName ||

    "Traveler"}

                      </p>

                      <p className="text-xs text-gray-500">

                        {trip.type} Traveler

                      </p>

                    </div>

                  </div>

                  {/* TITLE */}
                  <h2 className="text-2xl font-bold mt-4">

                    {trip.title}

                  </h2>

                  {/* BUDGET */}
                  <div className="flex items-center justify-between mt-4">

                    <p className="text-gray-500 text-sm">

                      Budget

                    </p>

                    <p className="font-bold text-lg">

                      {trip.displayBudget}

                    </p>

                  </div>

                  {/* ACTIONS */}
                  <div className="flex items-center justify-between mt-5">

                    {/* VIEW */}
                    <button
                      onClick={() =>
                        navigate(
                          `/itinerary/${trip._id}`
                        )
                      }
                      className="bg-black text-white px-5 py-3 rounded-2xl hover:scale-105 transition-all duration-300"
                    >

                      View Itinerary

                    </button>

                    {/* MENU */}
                    <div className="relative">

                      <button

                        onClick={(e) => {

                          e.stopPropagation();

                          setActiveMenuId(

                            activeMenuId === trip._id

                              ? null

                              : trip._id

                          );

                        }}

                        className="bg-white p-3 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
                      >

                        <FiMoreVertical size={20} />

                      </button>

                      {/* DROPDOWN */}
                      {activeMenuId ===
                        trip._id && (

                        <div className="absolute bottom-16 right-0 w-52 bg-white rounded-3xl shadow-2xl overflow-hidden z-50">

                          {isOwner ? (

                            <>
                              {/* EDIT */}
                              <button

                                onClick={() =>
                                  navigate(
                                    `/edit-trip/${trip._id}`
                                  )
                                }

                                className="flex items-center gap-3 w-full px-5 py-4 hover:bg-pink-50"
                              >

                                <FiEdit />

                                Edit

                              </button>

                              {/* ARCHIVE */}
                              <button
                                className="flex items-center gap-3 w-full px-5 py-4 hover:bg-pink-50"
                              >

                                <FiArchive />

                                Archive

                              </button>

                              {/* SHARE */}
                              <button

                                onClick={async (e) => {

                                  e.stopPropagation();

                                  const tripUrl =

                                    `${window.location.origin}/itinerary/${trip._id}`;

                                  try {

                                    if (
                                      navigator.share
                                    ) {

                                      await navigator.share({

                                        title:
                                          trip.title,

                                        text:
                                          "Check out this trip ✨",

                                        url:
                                          tripUrl,

                                      });

                                    } else {

                                      navigator.clipboard.writeText(
                                        tripUrl
                                      );

                                      alert(
                                        "Trip link copied!"
                                      );

                                    }

                                  } catch (error) {

                                    console.log(error);

                                  }

                                }}

                                className="flex items-center gap-3 w-full px-5 py-4 hover:bg-pink-50"
                              >

                                <FiShare2 />

                                Share

                              </button>

                              {/* DELETE */}
                              <button
                                onClick={() =>
                                  handleDelete(
                                    trip._id
                                  )
                                }
                                className="flex items-center gap-3 w-full px-5 py-4 text-red-500 hover:bg-red-50"
                              >

                                <FiTrash2 />

                                Delete

                              </button>

                            </>

                          ) : (

                            <>
                              {/* LIKE */}
                              <button

                                onClick={async (e) => {

                                  e.stopPropagation();

                                  try {

                                    await axios.put(

                                      `https://triptales-1-pb97.onrender.com/api/trips/like/${trip._id}`,

                                      {
                                        userId:
                                          auth.currentUser?.uid,
                                      }

                                    );

                                    const updatedTrips =

                                      localTrips.map((t) => {

                                        if (
                                          t._id ===
                                          trip._id
                                        ) {

                                          const alreadyLiked =

                                            t.likes?.includes(
                                              auth.currentUser?.uid
                                            );

                                          return {

                                            ...t,

                                            likes:
                                              alreadyLiked

                                                ? t.likes.filter(
                                                    (id) =>
                                                      id !==
                                                      auth.currentUser?.uid
                                                  )

                                                : [
                                                    ...(t.likes || []),

                                                    auth.currentUser?.uid,
                                                  ],

                                          };

                                        }

                                        return t;

                                      });

                                    setLocalTrips(
                                      updatedTrips
                                    );

                                  } catch (error) {

                                    console.log(error);

                                  }

                                }}

                                className="flex items-center gap-3 w-full px-5 py-4 hover:bg-pink-50"
                              >

                                <AiFillHeart

                                  className={

                                    trip.likes?.includes(
                                      auth.currentUser?.uid
                                    )

                                      ? "text-red-500"

                                      : "text-black"

                                  }

                                />

                                {trip.likes?.includes(
                                  auth.currentUser?.uid
                                )

                                  ? "Liked"

                                  : "Like"}

                              </button>

                              {/* SAVE */}
                              <button

                                onClick={async (e) => {

                                  e.stopPropagation();

                                  try {

                                    await axios.put(

                                      `https://triptales-1-pb97.onrender.com/api/trips/save/${trip._id}`,

                                      {
                                        userId:
                                          auth.currentUser?.uid,
                                      }

                                    );

                                    const updatedTrips =

                                      localTrips.map((t) => {

                                        if (
                                          t._id ===
                                          trip._id
                                        ) {

                                          const alreadySaved =

                                            t.savedBy?.includes(
                                              auth.currentUser?.uid
                                            );

                                          return {

                                            ...t,

                                            savedBy:
                                              alreadySaved

                                                ? t.savedBy.filter(
                                                    (id) =>
                                                      id !==
                                                      auth.currentUser?.uid
                                                  )

                                                : [
                                                    ...(t.savedBy || []),

                                                    auth.currentUser?.uid,
                                                  ],

                                          };

                                        }

                                        return t;

                                      });

                                    setLocalTrips(
                                      updatedTrips
                                    );

                                  } catch (error) {

                                    console.log(error);

                                  }

                                }}

                                className="flex items-center gap-3 w-full px-5 py-4 hover:bg-pink-50"
                              >

                                <FiBookmark

                                  className={

                                    trip.savedBy?.includes(
                                      auth.currentUser?.uid
                                    )

                                      ? "text-pink-500"

                                      : "text-black"

                                  }

                                />

                                {trip.savedBy?.includes(
                                  auth.currentUser?.uid
                                )

                                  ? "Saved"

                                  : "Save"}

                              </button>

                              {/* SHARE */}
                              <button

                                onClick={async (e) => {

                                  e.stopPropagation();

                                  const tripUrl =

                                    `${window.location.origin}/itinerary/${trip._id}`;

                                  try {

                                    if (
                                      navigator.share
                                    ) {

                                      await navigator.share({

                                        title:
                                          trip.title,

                                        text:
                                          "Check out this trip ✨",

                                        url:
                                          tripUrl,

                                      });

                                    } else {

                                      navigator.clipboard.writeText(
                                        tripUrl
                                      );

                                      alert(
                                        "Trip link copied!"
                                      );

                                    }

                                  } catch (error) {

                                    console.log(error);

                                  }

                                }}

                                className="flex items-center gap-3 w-full px-5 py-4 hover:bg-pink-50"
                              >

                                <FiShare2 />

                                Share

                              </button>

                            </>

                          )}

                        </div>

                      )}

                    </div>

                  </div>

                </div>

              </div>

            );

          })

        ) : (

          <div className="col-span-full text-center text-3xl font-bold text-pink-400 mt-20">

            No Trips Found ✨

          </div>

        )}

      </section>

    </div>

  );

}

export default Explore;