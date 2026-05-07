import { useNavigate } from "react-router-dom";

import { useState } from "react";

import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  auth,
  googleProvider,
} from "../firebase";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [isSignup, setIsSignup] = useState(false);

  const handleGoogleLogin = async () => {

    try {

      await signInWithPopup(
        auth,
        googleProvider
      );

      navigate("/explore");

    } catch (error) {

      console.log(error);

    }

  };

  const handleAuth = async () => {

    try {

      if (isSignup) {

        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      } else {

        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

      }

      navigate("/explore");

    } catch (error) {

      console.log(error.message);

      alert(error.message);

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 px-4">

      <div className="w-full max-w-lg bg-white/40 backdrop-blur-lg rounded-[30px] shadow-2xl p-8">

        {/* Heading */}
        <div className="text-center">

          <h1 className="text-5xl font-bold text-purple-700">
            TripTales
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            Travel through real stories.
          </p>

        </div>

        {/* Form */}
        <div className="mt-10 space-y-5">

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 rounded-2xl bg-white/60 border border-white/40 outline-none text-lg"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 rounded-2xl bg-white/60 border border-white/40 outline-none text-lg"
          />

          {/* Login / Signup Button */}
          <button
            onClick={handleAuth}
            className="w-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-white py-4 rounded-2xl text-lg font-semibold shadow-xl"
          >

            {isSignup ? "Create Account" : "Login"}

          </button>

          {/* Divider */}
          <div className="flex items-center gap-4">

            <div className="flex-1 h-[1px] bg-gray-300"></div>

            <p className="text-gray-500">
              OR
            </p>

            <div className="flex-1 h-[1px] bg-gray-300"></div>

          </div>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-white text-black py-4 rounded-2xl text-lg font-semibold shadow-xl hover:scale-105 transition-all duration-300"
          >

            Continue with Google

          </button>

          {/* Footer */}
          <p className="text-center text-gray-600 mt-6">

            {isSignup
              ? "Already have an account?"
              : "Don’t have an account?"}

            <span
              onClick={() =>
                setIsSignup(!isSignup)
              }
              className="text-purple-700 font-semibold cursor-pointer ml-2"
            >

              {isSignup
                ? "Login"
                : "Create Account"}

            </span>

          </p>

        </div>

      </div>

    </div>

  );
}

export default Login;