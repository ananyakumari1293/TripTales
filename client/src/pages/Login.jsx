import { useNavigate } from "react-router-dom";

import { useState } from "react";

import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

import {
  auth,
  googleProvider,
} from "../firebase";

import axios from "axios";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [isSignup, setIsSignup] =
    useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const handleGoogleLogin = async () => {

    try {

      setLoading(true);

      const result =
        await signInWithPopup(
          auth,
          googleProvider
        );

      const user = result.user;

      await axios.post(
        "https://triptales-1-pb97.onrender.com/api/users",
        {
          firebaseUid: user.uid,

          username:
            user.displayName ||
            "TripTales User",

          email: user.email,

          profilePhoto:
            user.photoURL || "",
        }
      );

      navigate("/explore");

    } catch (error) {

      console.log(error);

      alert(error.message);

    } finally {

      setLoading(false);

    }

  };

  const handleAuth = async () => {

    if (!email || !password) {

      alert("Please fill all fields");

      return;

    }

    try {

      setLoading(true);

      let result;

      if (isSignup) {

        result =
          await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );

        const user = result.user;

        await axios.post(
          "https://triptales-1-pb97.onrender.com/api/users",
          {
            firebaseUid: user.uid,

            username:
              email.split("@")[0],

            email: user.email,

            profilePhoto: "",
          }
        );

        alert(
          "Account Created Successfully 🎉"
        );

      } else {

        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        alert(
          "Login Successful 🚀"
        );

      }

      navigate("/explore");

    } catch (error) {

      console.log(error.message);

      alert(error.message);

    } finally {

      setLoading(false);

    }

  };

  const handleForgotPassword =
    async () => {

      if (!email) {

        alert(
          "Enter your email first"
        );

        return;

      }

      try {

        await sendPasswordResetEmail(
          auth,
          email
        );

        alert(
          "Password reset email sent 📩"
        );

      } catch (error) {

        console.log(error);

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
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full p-4 rounded-2xl bg-white/60 border border-white/40 outline-none text-lg"
          />

          {/* Password */}
          <div className="relative">

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full p-4 rounded-2xl bg-white/60 border border-white/40 outline-none text-lg"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-600"
            >

              {showPassword
                ? "🙈"
                : "👁️"}

            </button>

          </div>

          {/* Forgot Password */}
          {!isSignup && (

            <div className="text-right">

              <button
                onClick={
                  handleForgotPassword
                }
                className="text-purple-700 text-sm font-semibold hover:underline"
              >

                Forgot Password?

              </button>

            </div>

          )}

          {/* Login / Signup Button */}
          <button
            onClick={handleAuth}
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-white py-4 rounded-2xl text-lg font-semibold shadow-xl"
          >

            {loading
              ? "Please Wait..."
              : isSignup
              ? "Create Account"
              : "Login"}

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
            disabled={loading}
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