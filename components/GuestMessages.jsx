"use client";
import { useState, useEffect } from "react";
import { MessageCircle, Send, User } from "lucide-react";

const GuestMessages = () => {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const toast = ({ title, description }) => {
    alert(`${title}\n${description}`);
  };

  const fetchMessages = async () => {
    try {
      const res = await fetch("/api/messages", { cache: "no-store" });
      const data = await res.json();
      setMessages(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setMessages([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message }),
      });

      const savedMessage = await res.json();
      setMessages((prev) => [savedMessage, ...prev]);
      setName("");
      setMessage("");

      toast({
        title: "Thank you! 💕",
        description: "Your blessing has been sent!",
      });
    } catch {
      toast({
        title: "Oops 😢",
        description: "Something went wrong.",
      });
    }
  };

  return (
    <section id="wishes" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <MessageCircle className="h-12 w-12 mx-auto mb-6 text-[gold]" />
          <h2 className="text-4xl font-bold text-black mb-4">
            Guest Wishes
          </h2>
          <p className="text-gray-600">
            Leave us your blessings and well wishes!
          </p>
        </div>

        {/* Form */}
        <div className="mb-12 border rounded-xl p-8 bg-white">
          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="
                w-full px-4 py-2 rounded 
                bg-[#F3F7F2] 
                text-black 
                placeholder:text-gray-400
                focus:outline-none focus:ring-2 focus:ring-[#9CAF88]
              "
            />

            <textarea
              placeholder="Write your blessing or message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="
                w-full px-4 py-2 rounded 
                bg-[#F3F7F2] 
                text-black 
                placeholder:text-gray-400
                focus:outline-none focus:ring-2 focus:ring-[#9CAF88]
              "
            />

            <button
              type="submit"
              className="
                w-full py-2 rounded 
                bg-[#9CAF88] 
                text-white 
                font-semibold 
                flex items-center justify-center gap-2
                hover:bg-[#8aa07a] transition
              "
            >
              <Send className="h-4 w-4" />
              Send Blessing
            </button>

          </form>
        </div>

        {/* Messages */}
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {loading ? (
            <p className="text-center text-gray-400">Loading messages…</p>
          ) : messages.length === 0 ? (
            <p className="text-center text-gray-400">No messages yet 💌</p>
          ) : (
            messages.map((msg) => (
              <div key={msg._id} className="bg-white shadow rounded">
                <div className="p-6 flex gap-4">

                  <div className="w-10 h-10 rounded-full bg-[#F3F7F2] flex items-center justify-center">
                    <User className="h-5 w-5 text-[#9CAF88]" />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <h4 className="font-semibold text-black">
                        {msg.name}
                      </h4>
                      <span className="text-sm text-gray-500">
                        {new Date(msg.createdAt).toLocaleDateString()}
                      </span>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                      {msg.message}
                    </p>
                  </div>

                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
};

export default GuestMessages;
