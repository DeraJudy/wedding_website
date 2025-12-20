"use client";
import { useState, useEffect } from "react";
import { MessageCircle, Send, User, X, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

const GuestMessages = () => {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", description: "", isSuccess: true });

  const toast = ({ title, description, isSuccess = true }) => {
    setModalContent({ title, description, isSuccess });
    setShowModal(true);
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

  // Auto-rotate messages
  useEffect(() => {
    if (messages.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
      }, 10000); // Change every 10 seconds
      return () => clearInterval(interval);
    }
  }, [messages.length]);

  const nextMessage = () => {
    setCurrentIndex((prev) => (prev + 1) % messages.length);
  };

  const prevMessage = () => {
    setCurrentIndex((prev) => (prev - 1 + messages.length) % messages.length);
  };

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
        isSuccess: true
      });
    } catch {
      toast({
        title: "Oops 😢",
        description: "Something went wrong.",
        isSuccess: false
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

        {/* Messages Slider */}
        <div className="relative min-h-32 overflow-hidden">
          {loading ? (
            <p className="text-center text-gray-400">Loading messages…</p>
          ) : messages.length === 0 ? (
            <p className="text-center text-gray-400">No messages yet 💌</p>
          ) : (
            <>
              <div className="relative w-full">
                {messages.map((msg, index) => (
                  <div
                    key={msg._id}
                    className={`absolute inset-x-0 transition-opacity duration-1000 ${
                      index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="bg-white shadow rounded p-6 flex gap-4 border-t-4 border-[#9CAF88]">
                      <div className="w-10 h-10 rounded-full bg-[#F3F7F2] flex items-center justify-center flex-shrink-0">
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
                ))}
              </div>
              
              {/* Navigation Arrows */}
              {messages.length > 1 && (
                <>
                  <button
                    onClick={prevMessage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-50 transition"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-600" />
                  </button>
                  <button
                    onClick={nextMessage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-50 transition"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-600" />
                  </button>
                </>
              )}
            </>
          )}
        </div>

      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="text-center">
              {modalContent.isSuccess ? (
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              ) : (
                <X className="h-12 w-12 text-red-500 mx-auto mb-4" />
              )}
              <h3 className="text-lg font-semibold mb-2">{modalContent.title}</h3>
              <p className="text-gray-600 mb-4">{modalContent.description}</p>
              <button
                onClick={() => setShowModal(false)}
                className="bg-[#9CAF88] text-white px-4 py-2 rounded hover:bg-[#8aa07a] transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GuestMessages;
