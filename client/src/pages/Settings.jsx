import { useNavigate } from "react-router-dom";

function Settings() {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-6">

      <div className="max-w-4xl mx-auto">

        {/* TITLE */}
        <h1 className="text-5xl font-bold text-purple-700 mb-10">

          Settings ⚙️

        </h1>

        {/* SETTINGS CARD */}
        <div className="bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl p-8 space-y-6">

          {/* ACCOUNT */}
          <div className="bg-white/50 rounded-2xl p-6 shadow-lg">

            <h2 className="text-2xl font-bold text-gray-800">

              Account

            </h2>

            <p className="text-gray-600 mt-2">

              Manage your profile and preferences.

            </p>

          </div>

          {/* NOTIFICATIONS */}
          <div className="bg-white/50 rounded-2xl p-6 shadow-lg">

            <h2 className="text-2xl font-bold text-gray-800">

              Notifications

            </h2>

            <p className="text-gray-600 mt-2">

              Notification system coming soon 🔔

            </p>

          </div>

          {/* PRIVACY */}
          <div className="bg-white/50 rounded-2xl p-6 shadow-lg">

            <h2 className="text-2xl font-bold text-gray-800">

              Privacy

            </h2>

            <p className="text-gray-600 mt-2">

              Your data stays secure with TripTales 🔒

            </p>

          </div>

          {/* BUTTON */}
          <button
            onClick={() =>
              navigate("/")
            }
            className="w-full bg-black text-white py-4 rounded-2xl hover:scale-[1.02] transition-all duration-300"
          >

            Back To Explore

          </button>

        </div>

      </div>

    </div>

  );

}

export default Settings;