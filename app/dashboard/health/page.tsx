"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function HealthPage() {
  const nutritionData = [
    { name: "Carbs", value: 45 },
    { name: "Protein", value: 25 },
    { name: "Fat", value: 30 },
  ];

  const COLORS = ["#5BB5BE", "#FF6B6B", "#FFD93D"];

  return (
    <div className="p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold mb-2">Health Tracker</h1>
        <p className="text-gray-600 mb-8">Monitor your daily health metrics</p>

        <Tabs defaultValue="nutrition" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            <TabsTrigger value="fitness">Fitness</TabsTrigger>
            <TabsTrigger value="mental">Mental Health</TabsTrigger>
          </TabsList>

          <TabsContent value="nutrition">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-6">Daily Calorie Intake</h2>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-[#5BB5BE] mb-2">1,650</div>
                  <div className="text-gray-600">of 2,200 cal</div>
                </div>
                <Progress value={75} className="h-2 mb-6" />
                
                <h3 className="font-semibold mb-4">Today's Meals</h3>
                <div className="space-y-4">
                  {[
                    { meal: "Breakfast", calories: 450, items: ["Oatmeal with Berries (320 cal)", "Black Coffee (5 cal)", "Banana (125 cal)"] },
                    { meal: "Lunch", calories: 680, items: ["Chicken Salad Sandwich (450 cal)", "Greek Yogurt (130 cal)", "Apple (100 cal)"] },
                    { meal: "Dinner", calories: 520, items: ["Grilled Salmon (280 cal)", "Quinoa (120 cal)", "Steamed Vegetables (120 cal)"] }
                  ].map((meal, i) => (
                    <div key={i} className="border-t pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">{meal.meal}</h4>
                        <span className="text-sm text-gray-600">{meal.calories} calories</span>
                      </div>
                      <div className="space-y-1">
                        {meal.items.map((item, j) => (
                          <div key={j} className="text-sm text-gray-600">{item}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6">Add Meal</Button>
              </Card>

              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-6">Nutrition Breakdown</h2>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={nutritionData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {nutritionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="font-semibold text-[#5BB5BE]">45%</div>
                    <div className="text-sm text-gray-600">Carbs</div>
                  </div>
                  <div>
                    <div className="font-semibold text-[#FF6B6B]">25%</div>
                    <div className="text-sm text-gray-600">Protein</div>
                  </div>
                  <div>
                    <div className="font-semibold text-[#FFD93D]">30%</div>
                    <div className="text-sm text-gray-600">Fat</div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="fitness">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-6">Activity Tracking</h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Steps</span>
                      <span className="font-medium">8,459 / 10,000</span>
                    </div>
                    <Progress value={84} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Active Minutes</span>
                      <span className="font-medium">45 / 60</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Distance (km)</span>
                      <span className="font-medium">5.2 / 8.0</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-6">Workout Log</h2>
                <div className="space-y-4">
                  {[
                    { activity: "Morning Run", duration: "30 mins", calories: 320 },
                    { activity: "Yoga", duration: "45 mins", calories: 180 },
                    { activity: "Weight Training", duration: "60 mins", calories: 400 }
                  ].map((workout, i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">{workout.activity}</h4>
                        <p className="text-sm text-gray-600">{workout.duration}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{workout.calories}</div>
                        <div className="text-sm text-gray-600">calories</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6">Log Workout</Button>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="mental">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-6">Mood Tracker</h2>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl mb-2">😊</div>
                    <div className="font-medium">Good</div>
                    <div className="text-sm text-gray-600">Today's Mood</div>
                  </div>
                  <div className="grid grid-cols-5 gap-4">
                    {["😊", "😃", "😐", "😕", "😢"].map((emoji, i) => (
                      <button key={i} className="p-4 rounded-lg border hover:bg-gray-50 text-2xl">
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-6">Stress Level</h2>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#5BB5BE] mb-2">Low</div>
                    <div className="text-gray-600">Current Stress Level</div>
                  </div>
                  <Progress value={30} className="h-2" />
                  <div className="text-sm text-gray-600">
                    Your stress levels have decreased by 20% compared to last week.
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}