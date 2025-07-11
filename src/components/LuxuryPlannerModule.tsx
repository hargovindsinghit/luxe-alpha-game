
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Target, Home, Heart, DollarSign, Calendar, Plus, Edit } from "lucide-react";

const LuxuryPlannerModule = () => {
  const [goals] = useState([
    {
      id: 1,
      category: "Dream Home",
      title: "Luxury Villa in Miami",
      target: "$2,500,000",
      current: "$180,000",
      progress: 7.2,
      deadline: "2030",
      icon: Home,
      color: "text-blue-500"
    },
    {
      id: 2,
      category: "Dream Girl",
      title: "Find My Perfect Partner",
      target: "10/10 Quality Woman",
      current: "Dating 7/10s",
      progress: 65,
      deadline: "2025",
      icon: Heart,
      color: "text-red-500"
    },
    {
      id: 3,
      category: "Income Goal",
      title: "Monthly Income",
      target: "$50,000/month",
      current: "$8,500/month",
      progress: 17,
      deadline: "2026",
      icon: DollarSign,
      color: "text-green-500"
    }
  ]);

  const [dailyActions] = useState([
    {
      id: 1,
      goalId: 1,
      action: "Save $200 for house fund",
      completed: true,
      category: "Financial"
    },
    {
      id: 2,
      goalId: 1,
      action: "Research Miami real estate market",
      completed: false,
      category: "Research"
    },
    {
      id: 3,
      goalId: 2,
      action: "Approach 2 high-value women",
      completed: false,
      category: "Social"
    },
    {
      id: 4,
      goalId: 2,
      action: "Complete looksmaxxing routine",
      completed: true,
      category: "Self-Improvement"
    },
    {
      id: 5,
      goalId: 3,
      action: "Apply to 3 higher-paying positions",
      completed: false,
      category: "Career"
    },
    {
      id: 6,
      goalId: 3,
      action: "Work on side business for 2 hours",
      completed: true,
      category: "Business"
    }
  ]);

  const completedActions = dailyActions.filter(action => action.completed).length;
  const totalActions = dailyActions.length;

  return (
    <div className="space-y-6">
      {/* Vision Board */}
      <Card className="bg-gradient-to-r from-red-900/20 to-yellow-900/20 border-red-500/30">
        <CardHeader>
          <CardTitle className="flex items-center text-red-500">
            <Target className="h-5 w-5 mr-2" />
            Vision Board
          </CardTitle>
          <CardDescription>
            Visualize your luxury lifestyle goals
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {goals.map((goal) => {
              const IconComponent = goal.icon;
              return (
                <Card key={goal.id} className="bg-gray-800 border-gray-700">
                  <CardContent className="pt-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <IconComponent className={`h-6 w-6 ${goal.color}`} />
                        <div>
                          <h4 className="font-semibold text-white">{goal.title}</h4>
                          <Badge variant="outline" className="border-gray-500 text-gray-400 text-xs">
                            {goal.category}
                          </Badge>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Current: {goal.current}</span>
                        <span className="text-yellow-500">Target: {goal.target}</span>
                      </div>
                      <Progress value={goal.progress} className="h-2" />
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">{goal.progress.toFixed(1)}% Complete</span>
                        <span className="text-gray-500">Deadline: {goal.deadline}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <Button className="w-full mt-4 bg-red-600 hover:bg-red-700">
            <Plus className="h-4 w-4 mr-2" />
            Add New Goal
          </Button>
        </CardContent>
      </Card>

      {/* Daily Action Steps */}
      <Card className="bg-gray-900 border-red-900/20">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center text-red-500">
              <Calendar className="h-5 w-5 mr-2" />
              Today's Action Steps
            </span>
            <span className="text-sm text-gray-400">
              {completedActions}/{totalActions} completed
            </span>
          </CardTitle>
          <Progress value={(completedActions / totalActions) * 100} className="mt-2" />
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {dailyActions.map((action) => (
              <div key={action.id} className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg">
                <input
                  type="checkbox"
                  checked={action.completed}
                  className="h-4 w-4 rounded border-gray-600 text-red-600 focus:ring-red-500"
                  readOnly
                />
                <div className="flex-1">
                  <div className={`text-sm ${action.completed ? 'line-through text-gray-500' : 'text-white'}`}>
                    {action.action}
                  </div>
                  <Badge 
                    variant="outline" 
                    className="border-red-500 text-red-500 text-xs mt-1"
                  >
                    {action.category}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          <Button className="w-full mt-4 bg-red-600 hover:bg-red-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Action Step
          </Button>
        </CardContent>
      </Card>

      {/* Luxury Lifestyle Inspiration */}
      <Card className="bg-gray-900 border-red-900/20">
        <CardHeader>
          <CardTitle className="text-red-500">Luxury Lifestyle Motivation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-yellow-500">Wealth Mindset</h4>
              <ul className="text-sm space-y-2 text-gray-300">
                <li>• Think in terms of assets, not expenses</li>
                <li>• Invest in yourself first - skills, looks, network</li>
                <li>• Surround yourself with successful people</li>
                <li>• Multiple income streams are essential</li>
                <li>• Delayed gratification builds empires</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-yellow-500">High-Value Lifestyle</h4>
              <ul className="text-sm space-y-2 text-gray-300">
                <li>• Quality over quantity in everything</li>
                <li>• Maintain high standards for yourself and others</li>
                <li>• Continuous self-improvement is non-negotiable</li>
                <li>• Network with other ambitious men</li>
                <li>• Your environment shapes your mindset</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Monthly Milestones */}
      <Card className="bg-gray-900 border-red-900/20">
        <CardHeader>
          <CardTitle className="text-red-500">This Month's Milestones</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-900/20 border border-green-500/30 rounded-lg">
              <span className="text-green-500">✅ Saved $2,000 for house fund</span>
              <Badge className="bg-green-600">Completed</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
              <span className="text-yellow-500">🎯 Get 3 high-quality dates</span>
              <Badge className="bg-yellow-600">In Progress</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-800 border border-gray-600 rounded-lg">
              <span className="text-gray-300">💼 Land $12k/month client</span>
              <Badge variant="outline" className="border-gray-500">Pending</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LuxuryPlannerModule;
