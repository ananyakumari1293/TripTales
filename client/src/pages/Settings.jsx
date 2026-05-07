function Settings() {

  return (

    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-8">

      <div className="max-w-4xl mx-auto bg-white/40 backdrop-blur-lg rounded-3xl shadow-2xl p-10">

        <h1 className="text-5xl font-bold text-purple-700">
          Settings
        </h1>

        <p className="text-gray-600 mt-4 text-lg">
          Manage your TripTales preferences.
        </p>

        {/* Options */}
        <div className="mt-10 space-y-6">

          <div className="bg-white/50 rounded-2xl p-6 shadow-md">

            <h2 className="text-2xl font-semibold text-gray-800">
              Profile Settings
            </h2>

            <p className="text-gray-600 mt-2">
              Manage your account details and preferences.
            </p>

          </div>

          <div className="bg-white/50 rounded-2xl p-6 shadow-md">

            <h2 className="text-2xl font-semibold text-gray-800">
              Theme Settings
            </h2>

            <p className="text-gray-600 mt-2">
              Switch between light and dark themes.
            </p>

          </div>

          <div className="bg-white/50 rounded-2xl p-6 shadow-md">

            <h2 className="text-2xl font-semibold text-gray-800">
              Notifications
            </h2>

            <p className="text-gray-600 mt-2">
              Manage travel alerts and updates.
            </p>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Settings;