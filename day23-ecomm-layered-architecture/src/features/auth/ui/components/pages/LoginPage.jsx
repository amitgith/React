import React from "react";
import { Mail, Lock, LogIn } from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import { useAuthHook } from "../../../hooks/useAuthHook";

const LoginPage = () => {
  let { navigate, register, loginForm, handleSubmit, reset, errors } =
    useAuthHook();
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-100 via-white to-blue-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto bg-indigo-600 rounded-full flex items-center justify-center">
            <LogIn className="text-white" size={30} />
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mt-4">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">Login to access your account.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(loginForm)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Username
            </label>

            <div className="flex items-center border rounded-lg px-3 py-3 focus-within:ring-2 focus-within:ring-indigo-500">
              <Mail className="text-gray-400 mr-2" size={20} />
              <input
                {...register("username", {
                  required: "Email is required",
                })}
                type="text"
                placeholder="Enter your username"
                className="w-full outline-none"
              />
            </div>
            {errors.username && <p>{errors.username.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>

            <div className="flex items-center border rounded-lg px-3 py-3 focus-within:ring-2 focus-within:ring-indigo-500">
              <Lock className="text-gray-400 mr-2" size={20} />
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Minimum 8 characters are required",
                  },
                })}
                type="password"
                placeholder="Enter your password"
                className="w-full outline-none"
              />
            </div>
            {errors.password && (
              <p className="text-red">{errors.password.message}</p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
          >
            <LogIn size={20} />
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-indigo-600 font-semibold hover:underline"
          >
            Create Account
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
