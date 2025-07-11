
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { User, Settings, Crown, Calendar, Trophy, Target, LogOut } from "lucide-react";

const ProfileModule = () => {
  const [userProfile] = useState({
    name: "Alpha King",
    email: "alphauser@example.com",
    joinDate: "January 2024",
    level: "Chad",
    xp: 1250,
    streak: 15,
    completedMissions: 47,
    subscription: "Premium"
  });

  const [subscriptionPlans] = useState([
    {
      name: "Free",
      price: "₹0",
      features: [
        "Basic missions",
        "Limited AI coach access",
        "Basic progress tracking"
      ],
      current: false
    },
    {
      name: "Alpha",
      price: "₹299",
      period: "/month",
      features: [
        "All missions unlocked",
        "Unlimited AI coach",
        "Advanced analytics",
        "Priority support"
      ],
      current: true
    },
    {
      name: "Godmode",
      price: "₹999",
      period: "/month",
      features: [
        "Everything in Alpha",
        "1-on-1 coaching calls",
        "Exclusive community access",
        "Custom meal & workout plans",
        "VIP support"
      ],
      current: false
    },
    {
      name: "Elite",
      price: "₹4999",
      period: "/month",
      features: [
        "Everything in Godmode",
        "Weekly personal coaching",
        "Direct mentor access",
        "Exclusive events & networking",
        "Lifestyle concierge services"
      ],
      current: false
    }
  ]);

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card className="bg-gray-900 border-red-900/20">
        <CardContent className="pt-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{userProfile.name}</h2>
              <p className="text-gray-400">{userProfile.email}</p>
              <div className="flex items-center space-x-2 mt-2">
                <Badge className="bg-blue-600 text-white">
                  <Crown className="h-3 w-3 mr-1" />
                  {userProfile.level}
                </Badge>
                <Badge className="bg-red-600 text-white">
                  {userProfile.subscription}
                </Badge>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-500">{userProfile.xp}</div>
              <div className="text-sm text-gray-400">Total XP</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500">{userProfile.streak}</div>
              <div className="text-sm text-gray-400">Day Streak</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500">{userProfile.completedMissions}</div>
              <div className="text-sm text-gray-400">Missions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-500">{userProfile.joinDate}</div>
              <div className="text-sm text-gray-400">Member Since</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Account Settings */}
      <Card className="bg-gray-900 border-red-900/20">
        <CardHeader>
          <CardTitle className="flex items-center text-red-500">
            <Settings className="h-5 w-5 mr-2" />
            Account Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div>
              <Label htmlFor="name" className="text-gray-300">Display Name</Label>
              <Input
                id="name"
                value={userProfile.name}
                className="bg-gray-800 border-gray-600 text-white"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-gray-300">Email</Label>
              <Input
                id="email"
                type="email"
                value={userProfile.email}
                className="bg-gray-800 border-gray-600 text-white"
              />
            </div>
          </div>
          <Button className="bg-red-600 hover:bg-red-700">
            Update Profile
          </Button>
        </CardContent>
      </Card>

      {/* Subscription Plans */}
      <Card className="bg-gray-900 border-red-900/20">
        <CardHeader>
          <CardTitle className="flex items-center text-red-500">
            <Crown className="h-5 w-5 mr-2" />
            Subscription Plans
          </CardTitle>
          <CardDescription>
            Upgrade your membership to unlock premium features
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {subscriptionPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`bg-gray-800 border-2 ${
                  plan.current 
                    ? 'border-red-500 bg-red-900/10' 
                    : 'border-gray-700 hover:border-gray-600'
                } transition-colors`}
              >
                <CardContent className="pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-white flex items-center">
                        {plan.name}
                        {plan.current && (
                          <Badge className="ml-2 bg-red-600 text-white">Current</Badge>
                        )}
                      </h4>
                      <div className="text-2xl font-bold text-yellow-500">
                        {plan.price}
                        {plan.period && <span className="text-sm text-gray-400">{plan.period}</span>}
                      </div>
                    </div>
                    {!plan.current && (
                      <Button 
                        className={plan.name === "Free" ? "bg-gray-600 hover:bg-gray-700" : "bg-red-600 hover:bg-red-700"}
                      >
                        {plan.name === "Free" ? "Downgrade" : "Upgrade"}
                      </Button>
                    )}
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Statistics */}
      <Card className="bg-gray-900 border-red-900/20">
        <CardHeader>
          <CardTitle className="flex items-center text-red-500">
            <Trophy className="h-5 w-5 mr-2" />
            Your Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Looks Rating Improvement</span>
              <span className="text-green-500 font-semibold">+2.3 points</span>
            </div>
            <Separator className="bg-gray-700" />
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Dating Success Rate</span>
              <span className="text-green-500 font-semibold">+45%</span>
            </div>
            <Separator className="bg-gray-700" />
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Confidence Level</span>
              <span className="text-green-500 font-semibold">8.7/10</span>
            </div>
            <Separator className="bg-gray-700" />
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Monthly Income Growth</span>
              <span className="text-green-500 font-semibold">+₹15,000</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Logout */}
      <Card className="bg-gray-900 border-red-900/20">
        <CardContent className="pt-6">
          <Button variant="outline" className="w-full border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileModule;
