"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Send, User } from "lucide-react";

const GuestMessages = () => {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const toast = ({ title, description }) => {
    alert(`${title}\n${description}`);
  };

  useEffect(() => {
    const saved = localStorage.getItem("weddingMessages");
    if (saved) setMessages(JSON.parse(saved));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newMessage = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      timestamp: new Date().toLocaleDateString(),
    };

    const updated = [newMessage, ...messages];
    setMessages(updated);
    localStorage.setItem("weddingMessages", JSON.stringify(updated));

    setName("");
    setMessage("");

    toast({
      title: "Thank you! 💕",
      description: "Your blessing has been sent!",
    });
  };

  return (
    <section id="wishes" className="py-24" style={{ backgroundColor: "white" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <MessageCircle className="h-12 w-12 mx-auto mb-6" style={{ color: "gold" }} />
          <h2 className="font-elegant text-4xl sm:text-5xl font-bold mb-6" style={{ color: "black" }}>
            Guest Wishes
          </h2>
          <p className="text-lg text-gray-600 font-modern">
            Leave us your blessings and well wishes!
          </p>
        </div>

        {/* Form */}
        <div className="shadow-elegant mb-12 animate-fade-in bg-white rounded-xl"
        style={{
            border: "2px solid #F3F7F2"
        }}
        >
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-md"
                style={{
                  backgroundColor: "#F3F7F2",
                  color: "black",
                }}
              />

              <textarea
                placeholder="Write your blessing or message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 rounded-md"
                style={{
                  backgroundColor: "#F3F7F2",
                  color: "black",
                }}
              />

              <button
                type="submit"
                className="w-full py-2 rounded-md flex items-center justify-center gap-2"
                style={{
                  backgroundColor: "#9CAF88",
                  color: "white",
                  fontWeight: "600",
                }}
              >
                <Send className="h-4 w-4" />
                Send Blessing
              </button>

            </form>
          </div>
        </div>

        {/* Messages List */}
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {messages.map((msg) => (
            <div key={msg.id} className="shadow-soft animate-fade-in bg-white rounded-md">
              <div className="p-6 flex items-start gap-4">

                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#F3F7F2" }}
                >
                  <User className="h-5 w-5" style={{ color: "#9CAF88" }} />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold" style={{ color: "black" }}>
                      {msg.name}
                    </h4>
                    <span className="text-sm text-gray-500">{msg.timestamp}</span>
                  </div>

                  <p className="text-gray-600">{msg.message}</p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GuestMessages;
