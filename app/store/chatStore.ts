import { create } from "zustand";

export type ChatMessage = {
    id: string;
    sender: "user" | "drona";
    text: string;
  };

type ChatStore = {
  messages: ChatMessage[];
  addUserMessage: (text: string) => void;
  addDronaMessage: (text: string) => void;
  clearChat: () => void;
};

export const useChatStore = create<ChatStore>((set) => ({
  messages: [
    {
    id: crypto.randomUUID(),
      sender: "drona",
      text: "Hi 👋 I'm Drona. I'm here to help you achieve your fitness goals.",
    },
  ],

  addUserMessage: (text) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
            id: crypto.randomUUID(),
          sender: "user",
          text,
        },
      ],
    })),

  addDronaMessage: (text) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
            id: crypto.randomUUID(),
          sender: "drona",
          text,
        },
      ],
    })),

  clearChat: () =>
    set({
      messages: [],
    }),
}));