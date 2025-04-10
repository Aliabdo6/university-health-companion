"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProfilePage() {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-6 mb-8">
          <Avatar className="w-24 h-24" />
          <div>
            <h1 className="text-3xl font-semibold mb-2">John Doe</h1>
            <p className="text-gray-600">Student • Computer Science</p>
          </div>
        </div>

        <Tabs defaultValue="personal" className="space-y-8">
          <TabsList>
            <TabsTrigger value="personal">Personal Information</TabsTrigger>
            <TabsTrigger value="medical">Medical History</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>

          <TabsContent value="personal">
            <Card className="p-6">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                
                  <Input id="email" type="email" defaultValue="john.doe@university.edu" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="studentId">Student ID</Label>
                  <Input id="studentId" defaultValue="CS2023001" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" defaultValue="123 University Ave, Campus Housing B" />
                </div>

                <Button>Save Changes</Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="medical">
            <Card className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Medical Conditions</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span>Asthma</span>
                      <span className="text-sm text-gray-600">Diagnosed 2018</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span>Pollen Allergy</span>
                      <span className="text-sm text-gray-600">Seasonal</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Current Medications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium">Albuterol Inhaler</div>
                        <div className="text-sm text-gray-600">2 puffs as needed</div>
                      </div>
                      <Button variant="outline" size="sm">Refill</Button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium">Cetirizine</div>
                        <div className="text-sm text-gray-600">10mg daily</div>
                      </div>
                      <Button variant="outline" size="sm">Refill</Button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Allergies</h3>
                  <div className="space-y-2">
                    <div className="p-3 bg-gray-50 rounded-lg">Penicillin</div>
                    <div className="p-3 bg-gray-50 rounded-lg">Pollen</div>
                    <div className="p-3 bg-gray-50 rounded-lg">Dust</div>
                  </div>
                </div>

                <Button>Update Medical Information</Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="preferences">
            <Card className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Notification Preferences</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Appointment Reminders</div>
                        <div className="text-sm text-gray-600">Receive notifications about upcoming appointments</div>
                      </div>
                      <Button variant="outline">Configure</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Health Updates</div>
                        <div className="text-sm text-gray-600">Get notifications about your health metrics</div>
                      </div>
                      <Button variant="outline">Configure</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Messages</div>
                        <div className="text-sm text-gray-600">Notification settings for chat messages</div>
                      </div>
                      <Button variant="outline">Configure</Button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Privacy Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Profile Visibility</div>
                        <div className="text-sm text-gray-600">Control who can see your profile information</div>
                      </div>
                      <Button variant="outline">Manage</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Data Sharing</div>
                        <div className="text-sm text-gray-600">Manage how your health data is shared</div>
                      </div>
                      <Button variant="outline">Manage</Button>
                    </div>
                  </div>
                </div>

                <Button>Save Preferences</Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}