"use client";

import { Calendar, MessageSquare, BarChart3, Home, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white h-screen p-6 fixed border-r">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#5BB5BE] rounded-lg" />
            <span className="text-lg font-semibold text-[#5BB5BE]">Health Companion</span>
          </div>
          
          <nav className="space-y-2">
            <Link 
              href="/dashboard" 
              className={`flex items-center gap-3 p-3 rounded-lg ${
                pathname === "/dashboard" 
                  ? "bg-gray-100 text-gray-900" 
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>
            <Link 
              href="/dashboard/appointments" 
              className={`flex items-center gap-3 p-3 rounded-lg ${
                pathname === "/dashboard/appointments" 
                  ? "bg-gray-100 text-gray-900" 
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Calendar className="w-5 h-5" />
              <span>Appointments</span>
            </Link>
            <Link 
              href="/dashboard/health" 
              className={`flex items-center gap-3 p-3 rounded-lg ${
                pathname === "/dashboard/health" 
                  ? "bg-gray-100 text-gray-900" 
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <BarChart3 className="w-5 h-5" />
              <span>Health Tracker</span>
            </Link>
            <Link 
              href="/dashboard/chat" 
              className={`flex items-center gap-3 p-3 rounded-lg ${
                pathname === "/dashboard/chat" 
                  ? "bg-gray-100 text-gray-900" 
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <MessageSquare className="w-5 h-5" />
              <span>Chat</span>
            </Link>
            <Link 
              href="/dashboard/profile" 
              className={`flex items-center gap-3 p-3 rounded-lg ${
                pathname === "/dashboard/profile" 
                  ? "bg-gray-100 text-gray-900" 
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <User className="w-5 h-5" />
              <span>Profile</span>
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-64">
          {children}
        </main>
      </div>
    </div>
  );
}