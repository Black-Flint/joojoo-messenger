"use client";

import { Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Chat() {
  const ws = useRef<WebSocket | null>(null);

  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:4000/ws");

    ws.current.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]);
    };

    return () => {
      ws.current?.close();
    };
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!message.trim()) return;

    ws.current?.send(message);

    setMessage("");
  }

  return (
    <div className="h-full">
      <div className="flex flex-col gap-2 p-4">
        {messages.map((item) => (
          <div key={item} className="flex justify-end">
            <span className="max-w-[70%] wrap-break-word rounded-2xl bg-primary px-4 py-2 text-primary-foreground">
              {item}
            </span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="border-t bg-background">
        <div className="flex items-center gap-2 p-4">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write a message..."
            autoComplete="off"
          />

          <Button type="submit">
            <Send className="size-4" />
          </Button>
        </div>
      </form>
    </div>
  );
}
