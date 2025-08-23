// src/components/ui/ChatbotWidget.jsx
import { useState } from "react";
import { sendMessage } from "/src/service/Api";

export default function ChatbotWidget() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I help you?" },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // widget open/close state

  const handleSendMessage = async (message) => {
    if (!message.trim()) return;

    try {
      const reply = await sendMessage(message);

      setMessages((prev) => [
        ...prev,
        { sender: "user", text: message },
        { sender: "bot", text: reply },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "user", text: message },
        { sender: "bot", text: "⚠️ Server not responding" },
      ]);
    }
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSendMessage(input);
  };

  return (
    <div className="fixed bottom-5 right-5">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-purple-600 text-white font-bold px-4 py-2 rounded-full shadow-lg"
        >
          Quick Chat
        </button>
      ) : (
        <div className="bg-white border rounded-lg shadow-lg flex flex-col w-100 h-100">
          {/* Header */}
          <div className="p-2 bg-purple-600 text-white font-bold rounded-t-lg flex justify-between items-center">
            Chatbot
            <button
              onClick={() => setIsOpen(false)}
              className="bg-red-500 px-2 py-1 rounded text-white"
            >
              X
            </button>
          </div>

          {/* Messages */}
          <div className="h-64 p-2 overflow-y-auto">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-2 ${
                  msg.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`inline-block px-2 py-1 rounded ${
                    msg.sender === "user"
                      ? "bg-purple-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          {/* Input + Button */}
          <div className="p-2 flex">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 border border-black rounded px-2 bg-white text-black"
              placeholder="Type a message..."
            />
            <button
              onClick={() => handleSendMessage(input)}
              className="ml-2 bg-purple-600 text-white px-3 py-1 rounded"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
