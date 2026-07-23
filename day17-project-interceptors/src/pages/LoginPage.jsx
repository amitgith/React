import React from "react";
import { Mail, Lock } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import useAuth from "../hooks/useAuth";

const LoginPage = () => {
  const { register, handleSubmit, loginFormSubmit, navigate, errors } =
    useAuth();
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-gray-900 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">Welcome Back</h1>
          <p className="text-gray-400 mt-2">Login to continue shopping</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(loginFormSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2 text-sm">
              Email Address
            </label>

            <div className="flex items-center bg-white/10 border border-gray-700 rounded-xl px-4">
              <Mail size={20} className="text-gray-400" />
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none text-white px-3 py-3 placeholder:text-gray-500"
              />
            </div>
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 mb-2 text-sm">Password</label>

            <div className="flex items-center bg-white/10 border border-gray-700 rounded-xl px-4">
              <Lock size={20} className="text-gray-400" />
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 digits required",
                  },
                  maxLength: {
                    value: 10,
                    message: "Maximum 10 digits required",
                  },
                })}
                type="password"
                placeholder="Enter your password"
                className="w-full bg-transparent outline-none text-white px-3 py-3 placeholder:text-gray-500"
              />
            </div>
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-lime-400 hover:bg-lime-500 text-black font-semibold py-3 rounded-xl transition duration-300 cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-gray-400 mt-6">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            to="/register"
            className="text-lime-400 hover:text-lime-300 font-semibold"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
