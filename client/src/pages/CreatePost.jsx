import { useState } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

function CreatePost() {

  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  const [type, setType] = useState("Solo");

  const [budget, setBudget] = useState("");

  const [image, setImage] = useState("");

  const [overview, setOverview] = useState("");

  const [day1, setDay1] = useState("");

  const [day2, setDay2] = useState("");

  const [day3, setDay3] = useState("");

  const [dos, setDos] = useState("");

  const [donts, setDonts] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    const newTrip = {

      title,

      destination: title,

      type,

      budget: Number(budget),

      displayBudget: `₹${budget}`,

      image:
        image ||
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",

      overview,

      day1,

      day2,

      day3,

      dos: dos
        .split(",")
        .map((item) => item.trim()),

      donts: donts
        .split(",")
        .map((item) => item.trim()),

    };

    try {

      const response =
        await axios.post(
          "https://triptales-lb3b.onrender.com/api/trips",
          newTrip
        );

      console.log(response.data);

      alert(
        "Trip Published Successfully 🔥"
      );

      navigate("/explore");

    } catch (error) {

      console.log(error);

      alert(
        "Failed to publish trip ❌"
      );

    }

  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 py-10 px-4">

      <div className="max-w-5xl mx-auto bg-white/40 backdrop-blur-lg rounded-3xl shadow-2xl p-8">

        {/* Heading */}
        <div className="text-center">

          <h1 className="text-5xl font-bold text-purple-700">
            Create Your Trip
          </h1>

          <p className="text-gray-700 mt-4 text-lg">
            Share your travel story with the TripTales community.
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6"
        >

          {/* Top Grid */}
          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <label className="block text-gray-700 font-semibold mb-2">
                Destination
              </label>

              <input
                type="text"
                placeholder="Enter destination"
                value={title}
                onChange={(e) =>
                  setTitle(e.target.value)
                }
                required
                className="w-full p-4 rounded-2xl bg-white/50 border border-white/40 outline-none"
              />

            </div>

            <div>

              <label className="block text-gray-700 font-semibold mb-2">
                Trip Type
              </label>

              <select
                value={type}
                onChange={(e) =>
                  setType(e.target.value)
                }
                className="w-full p-4 rounded-2xl bg-white/50 border border-white/40 outline-none"
              >

                <option>Solo</option>

                <option>Group</option>

                <option>Family</option>

              </select>

            </div>

            <div>

              <label className="block text-gray-700 font-semibold mb-2">
                Budget
              </label>

              <input
                type="number"
                placeholder="10000"
                value={budget}
                onChange={(e) =>
                  setBudget(e.target.value)
                }
                required
                className="w-full p-4 rounded-2xl bg-white/50 border border-white/40 outline-none"
              />

            </div>

            <div>

              <label className="block text-gray-700 font-semibold mb-2">
                Image URL
              </label>

              <input
                type="text"
                placeholder="Paste image URL"
                value={image}
                onChange={(e) =>
                  setImage(e.target.value)
                }
                className="w-full p-4 rounded-2xl bg-white/50 border border-white/40 outline-none"
              />

            </div>

          </div>

          {/* Overview */}
          <div>

            <label className="block text-gray-700 font-semibold mb-2">
              Trip Overview
            </label>

            <textarea
              rows="5"
              placeholder="Write about your trip..."
              value={overview}
              onChange={(e) =>
                setOverview(e.target.value)
              }
              className="w-full p-4 rounded-2xl bg-white/50 border border-white/40 outline-none resize-none"
            ></textarea>

          </div>

          {/* Day Plans */}
          <div className="grid md:grid-cols-3 gap-6">

            <div>

              <label className="block text-gray-700 font-semibold mb-2">
                Day 1
              </label>

              <textarea
                rows="5"
                placeholder="Write day 1 plan..."
                value={day1}
                onChange={(e) =>
                  setDay1(e.target.value)
                }
                className="w-full p-4 rounded-2xl bg-white/50 border border-white/40 outline-none resize-none"
              ></textarea>

            </div>

            <div>

              <label className="block text-gray-700 font-semibold mb-2">
                Day 2
              </label>

              <textarea
                rows="5"
                placeholder="Write day 2 plan..."
                value={day2}
                onChange={(e) =>
                  setDay2(e.target.value)
                }
                className="w-full p-4 rounded-2xl bg-white/50 border border-white/40 outline-none resize-none"
              ></textarea>

            </div>

            <div>

              <label className="block text-gray-700 font-semibold mb-2">
                Day 3
              </label>

              <textarea
                rows="5"
                placeholder="Write day 3 plan..."
                value={day3}
                onChange={(e) =>
                  setDay3(e.target.value)
                }
                className="w-full p-4 rounded-2xl bg-white/50 border border-white/40 outline-none resize-none"
              ></textarea>

            </div>

          </div>

          {/* Do's and Don'ts */}
          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <label className="block text-gray-700 font-semibold mb-2">
                Do’s (comma separated)
              </label>

              <textarea
                rows="5"
                placeholder="Carry warm clothes, Start early..."
                value={dos}
                onChange={(e) =>
                  setDos(e.target.value)
                }
                className="w-full p-4 rounded-2xl bg-white/50 border border-white/40 outline-none resize-none"
              ></textarea>

            </div>

            <div>

              <label className="block text-gray-700 font-semibold mb-2">
                Don’ts (comma separated)
              </label>

              <textarea
                rows="5"
                placeholder="Avoid littering, Avoid overpacking..."
                value={donts}
                onChange={(e) =>
                  setDonts(e.target.value)
                }
                className="w-full p-4 rounded-2xl bg-white/50 border border-white/40 outline-none resize-none"
              ></textarea>

            </div>

          </div>

          {/* Publish Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-white py-4 rounded-2xl text-lg font-semibold shadow-xl"
          >

            Publish Trip

          </button>

        </form>

      </div>

    </div>

  );
}

export default CreatePost;