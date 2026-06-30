"use client";

import { useEffect, useRef, useState } from "react";
import PrimaryButton from "../ui/PrimaryButton";
import { useChatStore } from "../../app/store/chatStore";
import { askDrona } from "../../app/services/ai";
import { useUserStore } from "../../app/store/userStore";
import { useDailyStore } from "../../app/store/dailyStore";

type ChatScreenProps = {
  onBack: () => void;
};

export default function ChatScreen({
  onBack,
}: ChatScreenProps) {
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const messages = useChatStore((state) => state.messages);
  const addUserMessage = useChatStore((state) => state.addUserMessage);
  const addDronaMessage = useChatStore((state) => state.addDronaMessage);
  const user = useUserStore((state) => state.user);
  const progress = useDailyStore((state) => state.progress);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  async function sendMessage() {
    const text = input.trim();

    if (!text) return;

    addUserMessage(text);

    setInput("");

    setIsTyping(true);

    try {
      const reply = await askDrona(
        text,
        user,
        progress
      );
      setIsTyping(false);

      addDronaMessage(reply);
    } catch (error) {
      console.error("Chat Error:", error);

      setIsTyping(false);

      addDronaMessage(
        "Sorry, I couldn't reach Drona right now."
      );
    }
  }

  return (
    <section className="min-h-screen bg-gray-100 flex flex-col">

      {/* Header */}

      <div className="bg-green-600 text-white p-5 flex items-center gap-4">

        <button
          onClick={onBack}
          className="text-2xl"
        >
          ←
        </button>

        <div>
          <h1 className="text-xl font-bold">
            🤖 Drona
          </h1>

          <p className="text-green-100 text-sm">
            Your Personal AI Coach
          </p>
        </div>

      </div>

      {/* Messages */}

      

      {messages.map((message) => (
  <div
    key={message.id}
    className={`flex ${
      message.sender === "user"
        ? "justify-end"
        : "justify-start"
    }`}
  >
    <div
      className={`flex items-start gap-3 max-w-[85%] ${
        message.sender === "user"
          ? "flex-row-reverse"
          : ""
      }`}
    >
      <div className="text-3xl">
        {message.sender === "user" ? "👨" : "🤖"}
      </div>

      <div
        className={`rounded-2xl p-4 shadow whitespace-pre-wrap ${
          message.sender === "user"
            ? "bg-green-600 text-white"
            : "bg-white text-gray-900"
        }`}
      >
        {message.text}
      </div>
    </div>
  </div>
))}

      {/* Input */}

      <div className="bg-white border-t p-4">

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          placeholder="Ask Drona anything..."
          className="w-full rounded-xl border border-gray-300 p-4 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <div className="mt-4">

          <PrimaryButton onClick={sendMessage}>
            Send
          </PrimaryButton>

        </div>

      </div>

    </section>
  );
}