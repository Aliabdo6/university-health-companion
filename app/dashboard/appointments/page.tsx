"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export default function AppointmentsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold mb-2">Appointments</h1>
        <p className="text-gray-600 mb-8">Schedule and manage your healthcare appointments</p>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Schedule New Appointment</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Specialist Type
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select specialist" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gp">General Physician</SelectItem>
                    <SelectItem value="mental-health">Mental Health Counselor</SelectItem>
                    <SelectItem value="nutritionist">Nutritionist</SelectItem>
                    <SelectItem value="physio">Physiotherapist</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Date
                </label>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </div>

              <Button className="w-full bg-[#5BB5BE] hover:bg-[#4A9AA2] text-white">
                Check Available Slots
              </Button>
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
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
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Past Appointments</h2>
              <div className="space-y-4">
                {[
                  {
                    name: "Dr. Emily Rodriguez",
                    role: "Nutritionist",
                    time: "March 15, 2:00 PM",
                    status: "Completed"
                  },
                  {
                    name: "Dr. James Wilson",
                    role: "Physiotherapist",
                    time: "March 10, 11:30 AM",
                    status: "Completed"
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
                    <span className="text-sm text-gray-500">{appointment.status}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}