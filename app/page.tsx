"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, MessageSquare, BarChart3, Home } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#5BB5BE] flex items-center justify-center p-4">
      <div className="w-full max-w-[1200px] grid lg:grid-cols-2 gap-8">
        <div className="text-white space-y-6">
          <div className="w-24 h-24 bg-white/20 rounded-full mb-8" />
          <h1 className="text-4xl font-bold">University Health Companion</h1>
          <p className="text-xl">Your personal health assistant on campus</p>
          
          <div className="space-y-4 mt-12">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-white/20 rounded-full">
                <Calendar className="w-6 h-6" />
              </div>
              <p className="text-lg">Easy appointment scheduling with university doctors</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="p-2 bg-white/20 rounded-full">
                <BarChart3 className="w-6 h-6" />
              </div>
              <p className="text-lg">Track your health metrics in one place</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="p-2 bg-white/20 rounded-full">
                <MessageSquare className="w-6 h-6" />
              </div>
              <p className="text-lg">Direct messaging with healthcare providers</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8">
          <Tabs defaultValue="signin" className="space-y-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-semibold">Welcome Back</h2>
              <p className="text-muted-foreground">
                Please sign in to continue to your health dashboard
              </p>
            </div>
            
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="signin" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" />
              </div>
              <Link href="/dashboard" className="block">
                <Button className="w-full bg-[#5BB5BE] hover:bg-[#4A9AA2]">
                  Sign In
                </Button>
              </Link>
              <div className="text-center">
                <Link href="#" className="text-sm text-[#5BB5BE] hover:underline">
                  Forgot password?
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="signup" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signup-email">Email</Label>
                <Input id="signup-email" type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-password">Password</Label>
                <Input id="signup-password" type="password" placeholder="Create a password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" placeholder="Confirm your password" />
              </div>
              <Button className="w-full bg-[#5BB5BE] hover:bg-[#4A9AA2]">
                Create Account
              </Button>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}