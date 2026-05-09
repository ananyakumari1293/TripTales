import { useState } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import { auth } from "../firebase";

function CreatePost() {

  const navigate = useNavigate();

  const [title, setTitle] =
    useState("");

  const [type, setType] =
    useState("Solo");

  const [budget, setBudget] =
    useState("");

  const [image, setImage] =
    useState("");

  const [uploading, setUploading] =
    useState(false);

  const [overview, setOverview] =
    useState("");

  const [day1, setDay1] =
    useState("");

  const [day2, setDay2] =
    useState("");

  const [day3, setDay3] =
    useState("");

  const [dos, setDos] =
    useState("");

  const [donts, setDonts] =
    useState("");

  const handleImageUpload =
    async (e) => {

      const file =
        e.target.files[0];

      if (!file) return;

      const formData =
        new FormData();

      formData.append(
        "image",
        file
      );

      try {

        setUploading(true);

        const response =
          await axios.post(
            "https://triptales-1-pb97.onrender.com/api/upload",
            formData
          );

        setImage(
          response.data.imageUrl
        );

      } catch (error) {

        console.log(error);

        alert(
          "Image Upload Failed ❌"
        );

      } finally {

        setUploading(false);

      }

    };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      const newTrip = {

        title,

        destination: title,

        type,

        budget:
          Number(budget),

        displayBudget:
          `₹${budget}`,

        image,

        overview,

        day1,

        day2,

        day3,

        dos: dos
          .split(",")
          .map((item) =>
            item.trim()
          ),

        donts: donts
          .split(",")
          .map((item) =>
            item.trim()
          ),

        userId:
          auth.currentUser?.uid || "",

        userName:
          auth.currentUser
            ?.displayName ||
          auth.currentUser
            ?.email ||
          "Anonymous",

        userPhoto:
          auth.currentUser
            ?.photoURL || "",

      };

      try {

        const response =
          await axios.post(
            "https://triptales-1-pb97.onrender.com/api/trips",
            newTrip
          );

        console.log(
          response.data
        );

        alert(
          "Trip Published Successfully 🔥"
        );

        navigate("/explore");

        window.location.reload();

      } catch (error) {

        console.log(error);

        alert(
          "Failed to publish trip ❌"
        );

      }

    };

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#fff1f7] via-[#ffe4ee] to-[#ffeef8] py-10 px-4">

      <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-xl rounded-[35px] shadow-2xl p-8">

        {/* Heading */}
        <div className="text-center">

          <h1 className="text-5xl font-bold text-[#1f1f1f]">

            Create Your Trip ✨

          </h1>

          <p className="text-gray-500 mt-4 text-lg">

            Share your journey beautifully.

          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={
            handleSubmit
          }
          className="mt-10 space-y-6"
        >

          {/* Top Grid */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* Destination */}
            <div>

              <label className="block text-gray-700 font-semibold mb-2">

                Destination

              </label>

              <input
                type="text"
                placeholder="Enter destination"
                value={title}
                onChange={(e) =>
                  setTitle(
                    e.target.value
                  )
                }
                required
                className="w-full p-4 rounded-2xl bg-white outline-none"
              />

            </div>

            {/* Trip Type */}
            <div>

              <label className="block text-gray-700 font-semibold mb-2">

                Trip Type

              </label>

              <select
                value={type}
                onChange={(e) =>
                  setType(
                    e.target.value
                  )
                }
                className="w-full p-4 rounded-2xl bg-white outline-none"
              >

                <option>
                  Solo
                </option>

                <option>
                  Group
                </option>

                <option>
                  Family
                </option>

              </select>

            </div>

            {/* Budget */}
            <div>

              <label className="block text-gray-700 font-semibold mb-2">

                Budget

              </label>

              <input
                type="number"
                placeholder="10000"
                value={budget}
                onChange={(e) =>
                  setBudget(
                    e.target.value
                  )
                }
                required
                className="w-full p-4 rounded-2xl bg-white outline-none"
              />

            </div>

            {/* Upload */}
            <div>

              <label className="block text-gray-700 font-semibold mb-2">

                Upload Trip Image

              </label>

              <input
                type="file"
                accept="image/*"
                onChange={
                  handleImageUpload
                }
                className="w-full p-4 rounded-2xl bg-white outline-none"
              />

            </div>

          </div>

          {/* Uploading */}
          {uploading && (

            <p className="text-pink-500 font-semibold">

              Uploading image...

            </p>

          )}

          {/* Preview */}
          {image && (

            <img
              src={image}
              alt="preview"
              className="w-full h-[320px] object-cover rounded-[30px]"
            />

          )}

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
                setOverview(
                  e.target.value
                )
              }
              className="w-full p-4 rounded-2xl bg-white outline-none resize-none"
            ></textarea>

          </div>

          {/* Days */}
          <div className="grid md:grid-cols-3 gap-6">

            <div>

              <label className="block text-gray-700 font-semibold mb-2">

                Day 1

              </label>

              <textarea
                rows="5"
                placeholder="Day 1..."
                value={day1}
                onChange={(e) =>
                  setDay1(
                    e.target.value
                  )
                }
                className="w-full p-4 rounded-2xl bg-white outline-none resize-none"
              ></textarea>

            </div>

            <div>

              <label className="block text-gray-700 font-semibold mb-2">

                Day 2

              </label>

              <textarea
                rows="5"
                placeholder="Day 2..."
                value={day2}
                onChange={(e) =>
                  setDay2(
                    e.target.value
                  )
                }
                className="w-full p-4 rounded-2xl bg-white outline-none resize-none"
              ></textarea>

            </div>

            <div>

              <label className="block text-gray-700 font-semibold mb-2">

                Day 3

              </label>

              <textarea
                rows="5"
                placeholder="Day 3..."
                value={day3}
                onChange={(e) =>
                  setDay3(
                    e.target.value
                  )
                }
                className="w-full p-4 rounded-2xl bg-white outline-none resize-none"
              ></textarea>

            </div>

          </div>

          {/* Dos Donts */}
          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <label className="block text-gray-700 font-semibold mb-2">

                Do’s

              </label>

              <textarea
                rows="5"
                placeholder="Carry warm clothes..."
                value={dos}
                onChange={(e) =>
                  setDos(
                    e.target.value
                  )
                }
                className="w-full p-4 rounded-2xl bg-white outline-none resize-none"
              ></textarea>

            </div>

            <div>

              <label className="block text-gray-700 font-semibold mb-2">

                Don’ts

              </label>

              <textarea
                rows="5"
                placeholder="Avoid littering..."
                value={donts}
                onChange={(e) =>
                  setDonts(
                    e.target.value
                  )
                }
                className="w-full p-4 rounded-2xl bg-white outline-none resize-none"
              ></textarea>

            </div>

          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={uploading}
            className="w-full bg-black hover:scale-[1.01] transition-all duration-300 text-white py-4 rounded-2xl text-lg font-semibold shadow-xl"
          >

            Publish Trip 🚀

          </button>

        </form>

      </div>

    </div>

  );

}

export default CreatePost;