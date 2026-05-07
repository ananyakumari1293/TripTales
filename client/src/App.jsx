import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import Login from "./pages/Login";

import Explore from "./pages/Explore";

import Itinerary from "./pages/Itinerary";

import CreatePost from "./pages/CreatePost";

import ProtectedRoute from "./components/ProtectedRoute";

import Settings from "./pages/Settings";

import Help from "./pages/Help";

import About from "./pages/About";

function App() {

  const [trips, setTrips] =
    useState([]);

  useEffect(() => {

    const fetchTrips = async () => {

      try {

        const response =
          await axios.get(
            "https://triptales-1-pb97.onrender.com/api/trips"
          );

        setTrips(response.data);

      } catch (error) {

        console.log(error);

      }

    };

    fetchTrips();

  }, []);

  return (

    <BrowserRouter>

      <Routes>

        {/* Login */}
        <Route
          path="/"
          element={<Login />}
        />

        {/* Explore */}
        <Route
          path="/explore"
          element={
            <ProtectedRoute>
              <Explore trips={trips} />
            </ProtectedRoute>
          }
        />

        {/* Itinerary */}
        <Route
          path="/itinerary/:id"
          element={
            <ProtectedRoute>
              <Itinerary trips={trips} />
            </ProtectedRoute>
          }
        />

        {/* Create Post */}
        <Route
          path="/create-post"
          element={
            <ProtectedRoute>
              <CreatePost />
            </ProtectedRoute>
          }
        />

        {/* Settings */}
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        {/* Help */}
        <Route
          path="/help"
          element={
            <ProtectedRoute>
              <Help />
            </ProtectedRoute>
          }
        />

        {/* About */}
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;