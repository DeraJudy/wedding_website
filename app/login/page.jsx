"use client";

import { useState } from "react";
import { Heart, Lock, User } from "lucide-react";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: replace with real validation / API call
    console.log({ name, code });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-white to-rose-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
        
        {/* Decorative background */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-rose-200 rounded-full opacity-20" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-rose-300 rounded-full opacity-20" />

        {/* Header */}
        <div className="relative text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-full bg-rose-100 flex items-center justify-center">
              <Heart className="text-rose-600" size={28} />
            </div>
          </div>

          <h1 className="text-3xl font-serif text-gray-800">
            Dera & Gozie
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            Welcome to our wedding celebration
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="relative space-y-5">
          
          {/* Name */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Guest Name
            </label>
            <div className="flex items-center border rounded-lg px-3 focus-within:ring-2 focus-within:ring-rose-400">
              <User size={18} className="text-gray-400" />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="w-full px-3 py-3 outline-none text-gray-700"
              />
            </div>
          </div>

          {/* Access Code */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Access Code
            </label>
            <div className="flex items-center border rounded-lg px-3 focus-within:ring-2 focus-within:ring-rose-400">
              <Lock size={18} className="text-gray-400" />
              <input
                type="password"
                required
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Invitation code"
                className="w-full px-3 py-3 outline-none text-gray-700"
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-rose-600 hover:bg-rose-700 transition text-white py-3 rounded-lg font-medium tracking-wide"
          >
            Enter Wedding Site
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-6">
          With love, joy & blessings 💍
        </p>
      </div>
    </div>
  );
}
