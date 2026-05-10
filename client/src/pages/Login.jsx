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

  /* GOOGLE LOGIN */
  const handleGoogleLogin = async () => {

    try {

      setLoading(true);

      const result =
        await signInWithPopup(
          auth,
          googleProvider
        );

      const user = result.user;

      /* SAVE USER TO DATABASE */
      await axios.post(

        "https://triptales-1-pb97.onrender.com/api/users",

        {

          firebaseUid:
            user.uid,

          username:
            user.displayName ||
            "TripTales User",

          email:
            user.email,

          profilePhoto:
            user.photoURL || "",

          bio: "",

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

  /* LOGIN + SIGNUP */
  const handleAuth = async () => {

    if (!email || !password) {

      alert("Please fill all fields");

      return;

    }

    try {

      setLoading(true);

      let result;

      /* SIGNUP */
      if (isSignup) {

        result =
          await createUserWithEmailAndPassword(

            auth,

            email,

            password

          );

        const user =
          result.user;

        /* SAVE USER */
        await axios.post(

          "https://triptales-1-pb97.onrender.com/api/users",

          {

            firebaseUid:
              user.uid,

            username:
              email.split("@")[0],

            email:
              user.email,

            profilePhoto: "",

            bio: "",

          }

        );

        alert(
          "Account Created Successfully 🎉"
        );

      }

      /* LOGIN */
      else {

        result =
          await signInWithEmailAndPassword(

            auth,

            email,

            password

          );

        const user =
          result.user;

        /* CREATE USER IF NOT EXISTS */
        await axios.post(

          "https://triptales-1-pb97.onrender.com/api/users",

          {

            firebaseUid:
              user.uid,

            username:
              user.displayName ||

              email.split("@")[0],

            email:
              user.email,

            profilePhoto:
              user.photoURL || "",

            bio: "",

          }

        );

        alert(
          "Login Successful 🚀"
        );

      }

      navigate("/explore");

    } catch (error) {

      console.log(error);

      alert(error.message);

    } finally {

      setLoading(false);

    }

  };

  /* FORGOT PASSWORD */
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

    <div className="min-h-screen flex items-center justify-center bg-[#f6edef] px-4">

      <div className="w-full max-w-lg bg-white/60 backdrop-blur-xl rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-[#f1e4e8] p-10">

        {/* HEADING */}
        <div className="text-center">

          <h1 className="text-6xl font-black tracking-tight text-[#1d1a1b]">

            Trip
            <span className="italic font-serif text-[#b07c8d] font-normal">
              Tales
            </span>

          </h1>

          <p className="text-[#6b6266] mt-5 text-lg leading-relaxed">

            Travel through real stories.

          </p>

        </div>

        {/* FORM */}
        <div className="mt-10 space-y-5">

          {/* EMAIL */}
          <input
            type="email"

            placeholder="Email Address"

            value={email}

            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }

            className="w-full p-5 rounded-2xl bg-[#fbf7f8] border border-[#eadce0] outline-none text-lg text-[#2a2527] placeholder:text-[#9b9094] focus:border-[#b07c8d] transition-all"
          />

          {/* PASSWORD */}
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
                setPassword(
                  e.target.value
                )
              }

              className="w-full p-5 rounded-2xl bg-[#fbf7f8] border border-[#eadce0] outline-none text-lg text-[#2a2527] placeholder:text-[#9b9094] focus:border-[#b07c8d] transition-all"
            />

            <button
              type="button"

              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }

              className="absolute right-5 top-1/2 -translate-y-1/2 text-[#8f7b82]"
            >

              {showPassword
                ? "🙈"
                : "👁"}

            </button>

          </div>

          {/* FORGOT PASSWORD */}
          {!isSignup && (

            <div className="text-right">

              <button
                onClick={
                  handleForgotPassword
                }

                className="text-[#a67686] text-sm font-semibold hover:underline"
              >

                Forgot Password?

              </button>

            </div>

          )}

          {/* LOGIN BUTTON */}
          <button
            onClick={handleAuth}

            disabled={loading}

            className="w-full bg-black hover:opacity-90 transition-all duration-300 text-white py-5 rounded-2xl text-lg font-semibold shadow-xl"
          >

            {loading
              ? "Please Wait..."
              : isSignup
              ? "Create Account"
              : "Login"}

          </button>

          {/* DIVIDER */}
          <div className="flex items-center gap-4 pt-2">

            <div className="flex-1 h-[1px] bg-[#ddd1d5]"></div>

            <p className="text-[#8f8589] text-sm">

              OR

            </p>

            <div className="flex-1 h-[1px] bg-[#ddd1d5]"></div>

          </div>

          {/* GOOGLE LOGIN */}
          <button
            onClick={handleGoogleLogin}

            disabled={loading}

            className="w-full bg-white text-[#1d1a1b] py-5 rounded-2xl text-lg font-semibold shadow-lg border border-[#eadce0] hover:bg-[#fffafb] transition-all duration-300"
          >

            Continue with Google

          </button>

          {/* FOOTER */}
          <p className="text-center text-[#6e6669] mt-8">

            {isSignup
              ? "Already have an account?"
              : "Don’t have an account?"}

            <span
              onClick={() =>
                setIsSignup(
                  !isSignup
                )
              }

              className="text-[#a67686] font-semibold cursor-pointer ml-2 hover:underline"
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