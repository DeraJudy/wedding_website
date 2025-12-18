"use client";

import { useState } from "react";
import { Heart, User, Mail, Lock, MessageSquare } from "lucide-react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    code: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Replace with API call / validation
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-white to-rose-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">

        {/* Decorative shapes */}
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
            Wedding Guest Registration
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            Kindly register to access our wedding site
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="relative space-y-5">

          {/* Full Name */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Full Name
            </label>
            <div className="flex items-center border rounded-lg px-3 focus-within:ring-2 focus-within:ring-rose-400">
              <User size={18} className="text-gray-400" />
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full px-3 py-3 outline-none text-gray-700"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Email Address
            </label>
            <div className="flex items-center border rounded-lg px-3 focus-within:ring-2 focus-within:ring-rose-400">
              <Mail size={18} className="text-gray-400" />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-3 py-3 outline-none text-gray-700"
              />
            </div>
          </div>

          {/* Invitation Code */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Invitation Code
            </label>
            <div className="flex items-center border rounded-lg px-3 focus-within:ring-2 focus-within:ring-rose-400">
              <Lock size={18} className="text-gray-400" />
              <input
                type="password"
                name="code"
                required
                value={formData.code}
                onChange={handleChange}
                placeholder="Provided invitation code"
                className="w-full px-3 py-3 outline-none text-gray-700"
              />
            </div>
          </div>

          {/* Optional Message */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Message for the Couple (optional)
            </label>
            <div className="flex items-start border rounded-lg px-3 focus-within:ring-2 focus-within:ring-rose-400">
              <MessageSquare size={18} className="text-gray-400 mt-3" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your wishes or prayers..."
                rows="3"
                className="w-full px-3 py-3 outline-none text-gray-700 resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-rose-600 hover:bg-rose-700 transition text-white py-3 rounded-lg font-medium tracking-wide"
          >
            Register & Continue
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-6">
          Thank you for celebrating with us 🤍
        </p>
      </div>
    </div>
  );
}
