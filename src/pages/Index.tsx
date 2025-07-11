
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Target, Brain, MessageSquare, Camera, Crown, Flame, Star } from "lucide-react";
import LooksMaxingModule from "@/components/LooksMaxingModule";
import MindsetModule from "@/components/MindsetModule";
import AICoachModule from "@/components/AICoachModule";
import LuxuryPlannerModule from "@/components/LuxuryPlannerModule";
import MissionsModule from "@/components/MissionsModule";
import ProfileModule from "@/components/ProfileModule";

const Index = () => {
  const [userLevel, setUserLevel] = useState("Beta");
  const [userXP, setUserXP] = useState(1250);
  const [maxXP] = useState(2000);

  const getLevelColor = (level: string) => {
    switch(level) {
      case "Beta": return "bg-gray-600";
      case "Chad": return "bg-blue-600";
      case "Alpha": return "bg-red-600";
      case "Godmode": return "bg-yellow-600";
      default: return "bg-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-red-900/20 bg-black/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Crown className="h-8 w-8 text-red-500" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
                AlphaX
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className={`${getLevelColor(userLevel)} text-white px-3 py-1`}>
                <Crown className="h-4 w-4 mr-1" />
                {userLevel}
              </Badge>
              <div className="text-right">
                <div className="text-sm text-gray-400">XP: {userXP}/{maxXP}</div>
                <Progress value={(userXP / maxXP) * 100} className="w-20 h-2" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <Tabs defaultValue="home" className="w-full">
          <TabsList className="grid w-full grid-cols-6 bg-gray-900 border border-red-900/20 mb-6">
            <TabsTrigger value="home" className="data-[state=active]:bg-red-600">
              <Flame className="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="looks" className="data-[state=active]:bg-red-600">
              <Camera className="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="mindset" className="data-[state=active]:bg-red-600">
              <Brain className="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="coach" className="data-[state=active]:bg-red-600">
              <MessageSquare className="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="luxury" className="data-[state=active]:bg-red-600">
              <Target className="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="missions" className="data-[state=active]:bg-red-600">
              <Trophy className="h-4 w-4" />
            </TabsTrigger>
          </TabsList>

          <TabsContent value="home">
            <div className="space-y-6">
              {/* Daily Stats */}
              <Card className="bg-gray-900 border-red-900/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-500">
                    <Star className="h-5 w-5 mr-2" />
                    Today's Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-500">3/5</div>
                      <div className="text-sm text-gray-400">Missions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-500">8.5</div>
                      <div className="text-sm text-gray-400">Looks Score</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-500">15</div>
                      <div className="text-sm text-gray-400">Streak Days</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-500">1,250</div>
                      <div className="text-sm text-gray-400">Total XP</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="bg-gray-900 border-red-900/20 hover:border-red-500/50 transition-colors cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-sm flex items-center">
                      <Camera className="h-4 w-4 mr-2 text-red-500" />
                      Analyze Your Look
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      Upload Photo
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-red-900/20 hover:border-red-500/50 transition-colors cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-sm flex items-center">
                      <MessageSquare className="h-4 w-4 mr-2 text-red-500" />
                      AI Dating Coach
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      Get Advice
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-red-900/20 hover:border-red-500/50 transition-colors cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-sm flex items-center">
                      <Trophy className="h-4 w-4 mr-2 text-red-500" />
                      Daily Mission
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xs text-gray-400 mb-2">Approach 2 women today</div>
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      Complete Mission
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Motivational Quote */}
              <Card className="bg-gradient-to-r from-red-900/20 to-yellow-900/20 border-red-500/30">
                <CardContent className="pt-6">
                  <blockquote className="text-lg font-medium text-center italic">
                    "Success is not final, failure is not fatal: it is the courage to continue that counts."
                  </blockquote>
                  <div className="text-center text-sm text-gray-400 mt-2">- Winston Churchill</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="looks">
            <LooksMaxingModule />
          </TabsContent>

          <TabsContent value="mindset">
            <MindsetModule />
          </TabsContent>

          <TabsContent value="coach">
            <AICoachModule />
          </TabsContent>

          <TabsContent value="luxury">
            <LuxuryPlannerModule />
          </TabsContent>

          <TabsContent value="missions">
            <MissionsModule />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
