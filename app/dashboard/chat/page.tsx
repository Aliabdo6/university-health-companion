"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Dr. David Chen",
      role: "Cardiologist",
      message: "Hello Sarah, how are you feeling today? Have you been monitoring your heart rate as we discussed in your last appointment?",
      time: "10:30 AM",
      isDoctor: true
    },
    {
      id: 2,
      sender: "You",
      message: "Hi Dr. Chen! Yes, I've been tracking it daily. My resting heart rate has been averaging around 68 bpm, which is better than before.",
      time: "10:32 AM",
      isDoctor: false
    },
    {
      id: 3,
      sender: "Dr. David Chen",
      role: "Cardiologist",
      message: "That's excellent progress! How about your exercise routine? Have you been able to maintain the 30-minute daily walks?",
      time: "10:35 AM",
      isDoctor: true
    },
    {
      id: 4,
      sender: "You",
      message: "Mostly, yes. I missed two days last week due to exams, but I've been consistent otherwise. I've also started tracking my steps with the Health app.",
      time: "10:38 AM",
      isDoctor: false
    }
  ]);

  const doctors = [
    {
      name: "Dr. David Chen",
      role: "Cardiologist",
      status: "Online",
      lastMessage: "10:45 AM"
    },
    {
      name: "Dr. Jennifer Smith",
      role: "General Physician",
      status: "Offline",
      lastMessage: "Yesterday"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Psychiatrist",
      status: "Away",
      lastMessage: "Wed"
    },
    {
      name: "Dr. Sarah Khan",
      role: "Nutritionist",
      status: "Online",
      lastMessage: "Mon"
    }
  ];

  return (
    <div className="h-screen flex">
      {/* Doctors List */}
      <div className="w-80 border-r bg-white">
        <div className="p-4 border-b">
          <Input type="search" placeholder="Search doctors..." className="w-full" />
        </div>
        <ScrollArea className="h-[calc(100vh-65px)]">
          <div className="p-2">
            {doctors.map((doctor, i) => (
              <button
                key={i}
                className="w-full p-3 flex items-start gap-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <Avatar />
                <div className="flex-1 text-left">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{doctor.name}</span>
                    <span className="text-xs text-gray-500">{doctor.lastMessage}</span>
                  </div>
                  <div className="text-sm text-gray-600">{doctor.role}</div>
                  <div className="flex items-center gap-1 mt-1">
                    <div className={`w-2 h-2 rounded-full ${
                      doctor.status === "Online" ? "bg-green-500" :
                      doctor.status === "Away" ? "bg-yellow-500" : "bg-gray-500"
                    }`} />
                    <span className="text-xs text-gray-500">{doctor.status}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {/* Chat Header */}
        <div className="p-4 border-b bg-white">
          <div className="flex items-center gap-3">
            <Avatar />
            <div>
              <h2 className="font-semibold">Dr. David Chen</h2>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm text-gray-600">Online</span>
              </div>
            </div>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isDoctor ? "justify-start" : "justify-end"}`}
              >
                <div className={`max-w-[70%] ${message.isDoctor ? "order-2" : "order-1"}`}>
                  {message.isDoctor && (
                    <div className="flex items-center gap-2 mb-1">
                      <Avatar className="w-6 h-6" />
                      <span className="font-medium text-sm">{message.sender}</span>
                      <span className="text-xs text-gray-500">{message.role}</span>
                    </div>
                  )}
                  <div
                    className={`rounded-lg p-3 ${
                      message.isDoctor
                        ? "bg-white"
                        : "bg-[#5BB5BE] text-white"
                    }`}
                  >
                    <p className="text-sm">{message.message}</p>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {message.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Message Input */}
        <div className="p-4 border-t bg-white">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Type a message..."
              className="flex-1"
            />
            <Button>Send</Button>
          </div>
        </div>
      </div>
    </div>
  );
}