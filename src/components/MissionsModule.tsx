
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Target, Flame, Crown, Star, CheckCircle, Clock } from "lucide-react";

const MissionsModule = () => {
  const [userStats] = useState({
    level: "Chad",
    xp: 1250,
    maxXP: 2000,
    completedMissions: 47,
    streak: 15
  });

  const [dailyMissions] = useState([
    {
      id: 1,
      title: "Approach 2 women today",
      description: "Practice your social skills and confidence",
      xp: 50,
      difficulty: "Medium",
      category: "Social",
      completed: false,
      icon: "💬"
    },
    {
      id: 2,
      title: "Complete workout routine",
      description: "Hit the gym and work on your physique",
      xp: 30,
      difficulty: "Easy",
      category: "Fitness",
      completed: true,
      icon: "💪"
    },
    {
      id: 3,
      title: "Post high-value content on social media",
      description: "Share something that demonstrates your lifestyle",
      xp: 40,
      difficulty: "Medium",
      category: "Social Media",
      completed: false,
      icon: "📸"
    }
  ]);

  const [weeklyMissions] = useState([
    {
      id: 4,
      title: "Get 3 phone numbers",
      description: "Build your dating pipeline",
      xp: 150,
      difficulty: "Hard",
      category: "Dating",
      progress: 1,
      target: 3,
      completed: false,
      icon: "📱"
    },
    {
      id: 5,
      title: "Earn $500 extra income",
      description: "Hustle and increase your earning potential",
      xp: 200,
      difficulty: "Hard",
      category: "Financial",
      progress: 180,
      target: 500,
      completed: false,
      icon: "💰"
    }
  ]);

  const [leaderboard] = useState([
    { rank: 1, name: "AlphaKing92", level: "Godmode", xp: 8750, avatar: "👑" },
    { rank: 2, name: "ChampionMind", level: "Alpha", xp: 6420, avatar: "🔥" },
    { rank: 3, name: "LuxuryLife", level: "Alpha", xp: 5890, avatar: "💎" },
    { rank: 4, name: "You", level: "Chad", xp: 1250, avatar: "⭐" },
    { rank: 5, name: "RiseAbove", level: "Chad", xp: 1100, avatar: "🚀" }
  ]);

  const getLevelColor = (level: string) => {
    switch(level) {
      case "Beta": return "text-gray-400";
      case "Chad": return "text-blue-400";
      case "Alpha": return "text-red-400";
      case "Godmode": return "text-yellow-400";
      default: return "text-gray-400";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case "Easy": return "bg-green-600";
      case "Medium": return "bg-yellow-600";
      case "Hard": return "bg-red-600";
      default: return "bg-gray-600";
    }
  };

  return (
    <div className="space-y-6">
      {/* User Stats */}
      <Card className="bg-gray-900 border-red-900/20">
        <CardContent className="pt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className={`text-2xl font-bold ${getLevelColor(userStats.level)}`}>
                {userStats.level}
              </div>
              <div className="text-sm text-gray-400">Current Level</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-500">{userStats.xp}</div>
              <div className="text-sm text-gray-400">Total XP</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500">{userStats.completedMissions}</div>
              <div className="text-sm text-gray-400">Missions Done</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-500">{userStats.streak}</div>
              <div className="text-sm text-gray-400">Day Streak</div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Progress to Alpha</span>
              <span>{userStats.xp}/{userStats.maxXP} XP</span>
            </div>
            <Progress value={(userStats.xp / userStats.maxXP) * 100} className="h-3" />
          </div>
        </CardContent>
      </Card>

      {/* Daily Missions */}
      <Card className="bg-gray-900 border-red-900/20">
        <CardHeader>
          <CardTitle className="flex items-center text-red-500">
            <Target className="h-5 w-5 mr-2" />
            Daily Missions
          </CardTitle>
          <CardDescription>
            Complete these challenges to earn XP and level up
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {dailyMissions.map((mission) => (
              <Card key={mission.id} className={`bg-gray-800 border-gray-700 ${mission.completed ? 'opacity-75' : ''}`}>
                <CardContent className="pt-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">{mission.icon}</span>
                      <div>
                        <h4 className={`font-semibold ${mission.completed ? 'line-through text-gray-500' : 'text-white'}`}>
                          {mission.title}
                        </h4>
                        <p className="text-sm text-gray-400 mb-2">{mission.description}</p>
                        <div className="flex space-x-2">
                          <Badge className={getDifficultyColor(mission.difficulty)}>
                            {mission.difficulty}
                          </Badge>
                          <Badge variant="outline" className="border-red-500 text-red-500">
                            +{mission.xp} XP
                          </Badge>
                          <Badge variant="outline" className="border-gray-500 text-gray-400">
                            {mission.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className={`${mission.completed ? 'bg-green-600' : 'bg-red-600 hover:bg-red-700'}`}
                      disabled={mission.completed}
                    >
                      {mission.completed ? <CheckCircle className="h-4 w-4" /> : "Complete"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Weekly Missions */}
      <Card className="bg-gray-900 border-red-900/20">
        <CardHeader>
          <CardTitle className="flex items-center text-red-500">
            <Flame className="h-5 w-5 mr-2" />
            Weekly Challenges
          </CardTitle>
          <CardDescription>
            Bigger challenges for serious XP gains
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {weeklyMissions.map((mission) => (
              <Card key={mission.id} className="bg-gray-800 border-gray-700">
                <CardContent className="pt-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">{mission.icon}</span>
                      <div>
                        <h4 className="font-semibold text-white">{mission.title}</h4>
                        <p className="text-sm text-gray-400">{mission.description}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Badge className={getDifficultyColor(mission.difficulty)}>
                        {mission.difficulty}
                      </Badge>
                      <Badge variant="outline" className="border-yellow-500 text-yellow-500">
                        +{mission.xp} XP
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-white">{mission.progress}/{mission.target}</span>
                    </div>
                    <Progress value={(mission.progress / mission.target) * 100} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Leaderboard */}
      <Card className="bg-gray-900 border-red-900/20">
        <CardHeader>
          <CardTitle className="flex items-center text-red-500">
            <Trophy className="h-5 w-5 mr-2" />
            Global Leaderboard
          </CardTitle>
          <CardDescription>
            See how you rank against other alphas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {leaderboard.map((user, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-3 rounded-lg ${
                  user.name === "You" ? 'bg-red-900/20 border border-red-500/30' : 'bg-gray-800'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`text-lg font-bold ${
                    user.rank === 1 ? 'text-yellow-500' : 
                    user.rank === 2 ? 'text-gray-300' : 
                    user.rank === 3 ? 'text-yellow-600' : 'text-gray-400'
                  }`}>
                    #{user.rank}
                  </div>
                  <span className="text-xl">{user.avatar}</span>
                  <div>
                    <div className={`font-semibold ${user.name === "You" ? 'text-red-400' : 'text-white'}`}>
                      {user.name}
                    </div>
                    <div className={`text-sm ${getLevelColor(user.level)}`}>
                      {user.level}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-yellow-500">{user.xp.toLocaleString()}</div>
                  <div className="text-xs text-gray-400">XP</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Achievement Badges */}
      <Card className="bg-gray-900 border-red-900/20">
        <CardHeader>
          <CardTitle className="flex items-center text-red-500">
            <Star className="h-5 w-5 mr-2" />
            Recent Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="text-center p-3 bg-gray-800 rounded-lg">
              <div className="text-2xl mb-2">🔥</div>
              <div className="text-xs font-semibold text-yellow-500">15 Day Streak</div>
            </div>
            <div className="text-center p-3 bg-gray-800 rounded-lg">
              <div className="text-2xl mb-2">💪</div>
              <div className="text-xs font-semibold text-blue-500">Gym Regular</div>
            </div>
            <div className="text-center p-3 bg-gray-800 rounded-lg">
              <div className="text-2xl mb-2">👑</div>
              <div className="text-xs font-semibold text-red-500">Chad Status</div>
            </div>
            <div className="text-center p-3 bg-gray-800 rounded-lg opacity-50">
              <div className="text-2xl mb-2">🏆</div>
              <div className="text-xs font-semibold text-gray-500">Alpha Level</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MissionsModule;
