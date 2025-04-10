"use client";

import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold mb-2">Welcome back, John!</h1>
        <p className="text-gray-600 mb-8">Here's your health overview for today.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex flex-col items-start">
              <Calendar className="w-8 h-8 text-[#5BB5BE] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Book Appointment</h3>
              <p className="text-gray-600 mb-4">Schedule a consultation with one of our healthcare providers.</p>
              <Button variant="outline">Schedule Now</Button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex flex-col items-start">
              <BarChart3 className="w-8 h-8 text-[#5BB5BE] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Track Health</h3>
              <p className="text-gray-600 mb-4">Monitor your daily nutrition, fitness, and mental wellbeing.</p>
              <Button variant="outline">View Stats</Button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex flex-col items-start">
              <MessageSquare className="w-8 h-8 text-[#5BB5BE] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Messages</h3>
              <p className="text-gray-600 mb-4">Chat with doctors and other healthcare professionals.</p>
              <Button variant="outline">Open Chat</Button>
            </div>
          </Card>
        </div>

        <div className="bg-white rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Upcoming Appointments</h2>
            <Button variant="link" className="text-[#5BB5BE]">View All</Button>
          </div>

          <div className="space-y-4">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Mental Health Counselor",
                time: "Today, 3:00 PM",
                status: "Confirmed"
              },
              {
                name: "Dr. Michael Chen",
                role: "General Physician",
                time: "Tomorrow, 10:30 AM",
                status: "Confirmed"
              }
            ].map((appointment, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <Avatar />
                  <div>
                    <h4 className="font-semibold">{appointment.name}</h4>
                    <p className="text-sm text-gray-600">{appointment.role}</p>
                    <p className="text-sm text-gray-600">{appointment.time}</p>
                  </div>
                </div>
                <span className="text-sm text-[#5BB5BE]">{appointment.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}