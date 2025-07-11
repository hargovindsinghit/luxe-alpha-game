
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Send, Lightbulb, MessageCircle, Heart } from "lucide-react";

const AICoachModule = () => {
  const [chatMessage, setChatMessage] = useState("");
  const [textToAnalyze, setTextToAnalyze] = useState("");
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("chat");

  const chatHistory = [
    {
      type: "user",
      message: "How do I start a conversation with a girl at a coffee shop?",
      timestamp: "2 mins ago"
    },
    {
      type: "ai",
      message: "Great question! Here's a natural approach: 1) Make genuine eye contact and smile, 2) Comment on something in the environment ('This place has great music' or 'That book looks interesting'), 3) Ask an open-ended question that invites conversation. Keep it light and authentic - confidence comes from being genuinely interested in her as a person, not from pickup lines.",
      timestamp: "2 mins ago"
    },
    {
      type: "user",
      message: "What if she seems busy or not interested?",
      timestamp: "1 min ago"
    },
    {
      type: "ai",
      message: "Read the room, king! If she's giving short responses, looking at her phone, or has body language that's closed off (arms crossed, not facing you), respect her space. Say something like 'Well, I'll let you get back to your day' with a smile. Real alphas know when to gracefully exit - it shows confidence and respect.",
      timestamp: "1 min ago"
    }
  ];

  const quickTips = [
    {
      category: "First Date",
      tip: "Choose an activity where you can talk - avoid movies for first dates. Coffee, mini golf, or a casual walk work great.",
      icon: "💬"
    },
    {
      category: "Texting",
      tip: "Don't double text. If she doesn't respond, wait at least 24 hours before following up once, then move on if no response.",
      icon: "📱"
    },
    {
      category: "Confidence",
      tip: "Stand tall, speak slowly and clearly, and maintain eye contact. Your body language communicates before you even speak.",
      icon: "💪"
    },
    {
      category: "Flirting",
      tip: "Use light teasing and playful banter. Compliment her choices and personality, not just her appearance.",
      icon: "😏"
    }
  ];

  const handleTextAnalysis = () => {
    if (!textToAnalyze.trim()) return;
    
    // Simulate AI analysis
    setAnalysisResult({
      overallScore: 7.2,
      tone: "Friendly but too eager",
      improvements: [
        "Remove excessive enthusiasm - use fewer exclamation marks",
        "Add more mystery - don't reveal everything at once",
        "Use more confident language - avoid phrases like 'maybe' or 'I think'",
        "Create intrigue with open-ended statements"
      ],
      rewrittenVersion: "Hey, just grabbed coffee at that new place downtown. The vibe reminded me of our conversation about hidden gems in the city. What's your take on hole-in-the-wall spots?"
    });
  };

  return (
    <div className="space-y-6">
      {/* Navigation Tabs */}
      <div className="flex space-x-1 bg-gray-800 p-1 rounded-lg">
        <Button
          variant={activeTab === "chat" ? "default" : "ghost"}
          onClick={() => setActiveTab("chat")}
          className={activeTab === "chat" ? "bg-red-600 hover:bg-red-700" : "hover:bg-gray-700"}
        >
          <MessageSquare className="h-4 w-4 mr-2" />
          AI Coach Chat
        </Button>
        <Button
          variant={activeTab === "analyzer" ? "default" : "ghost"}
          onClick={() => setActiveTab("analyzer")}
          className={activeTab === "analyzer" ? "bg-red-600 hover:bg-red-700" : "hover:bg-gray-700"}
        >
          <MessageCircle className="h-4 w-4 mr-2" />
          Text Analyzer
        </Button>
        <Button
          variant={activeTab === "tips" ? "default" : "ghost"}
          onClick={() => setActiveTab("tips")}
          className={activeTab === "tips" ? "bg-red-600 hover:bg-red-700" : "hover:bg-gray-700"}
        >
          <Lightbulb className="h-4 w-4 mr-2" />
          Quick Tips
        </Button>
      </div>

      {/* AI Coach Chat */}
      {activeTab === "chat" && (
        <Card className="bg-gray-900 border-red-900/20">
          <CardHeader>
            <CardTitle className="flex items-center text-red-500">
              <MessageSquare className="h-5 w-5 mr-2" />
              AI Dating Coach
            </CardTitle>
            <CardDescription>
              Get personalized advice on dating, texting, and social situations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Chat History */}
              <div className="max-h-96 overflow-y-auto space-y-3 p-4 bg-gray-800 rounded-lg">
                {chatHistory.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.type === "user"
                          ? "bg-red-600 text-white"
                          : "bg-gray-700 text-white"
                      }`}
                    >
                      <p className="text-sm">{message.message}</p>
                      <p className="text-xs opacity-70 mt-1">{message.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="flex space-x-2">
                <Input
                  placeholder="Ask me anything about dating, confidence, or social skills..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white"
                  onKeyPress={(e) => e.key === "Enter" && setChatMessage("")}
                />
                <Button className="bg-red-600 hover:bg-red-700">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Text Analyzer */}
      {activeTab === "analyzer" && (
        <Card className="bg-gray-900 border-red-900/20">
          <CardHeader>
            <CardTitle className="flex items-center text-red-500">
              <MessageCircle className="h-5 w-5 mr-2" />
              Text Message Analyzer
            </CardTitle>
            <CardDescription>
              Paste your conversation for feedback and improvement suggestions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Textarea
                placeholder="Paste your text conversation here..."
                value={textToAnalyze}
                onChange={(e) => setTextToAnalyze(e.target.value)}
                className="min-h-[120px] bg-gray-800 border-gray-600 text-white"
              />
              <Button 
                onClick={handleTextAnalysis}
                className="bg-red-600 hover:bg-red-700"
              >
                Analyze Conversation
              </Button>

              {analysisResult && (
                <div className="space-y-4">
                  {/* Score */}
                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="pt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Overall Score</span>
                        <span className="text-2xl font-bold text-yellow-500">
                          {analysisResult.overallScore}/10
                        </span>
                      </div>
                      <div className="mt-2">
                        <Badge variant="outline" className="border-yellow-500 text-yellow-500">
                          {analysisResult.tone}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Improvements */}
                  <Card className="bg-gray-800 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-sm text-red-500">Areas for Improvement</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {analysisResult.improvements.map((improvement: string, index: number) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-red-500 mt-1">•</span>
                            <span className="text-sm">{improvement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Rewritten Version */}
                  <Card className="bg-green-900/20 border-green-500/30">
                    <CardHeader>
                      <CardTitle className="text-sm text-green-500">Improved Version</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">{analysisResult.rewrittenVersion}</p>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quick Tips */}
      {activeTab === "tips" && (
        <div className="grid gap-4">
          {quickTips.map((tip, index) => (
            <Card key={index} className="bg-gray-900 border-red-900/20">
              <CardContent className="pt-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">{tip.icon}</span>
                  <div>
                    <Badge className="bg-red-600 text-white mb-2">
                      {tip.category}
                    </Badge>
                    <p className="text-sm text-gray-300">{tip.tip}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AICoachModule;
