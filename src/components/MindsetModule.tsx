
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Brain, Play, Pause, BookOpen, Volume2 } from "lucide-react";

const MindsetModule = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAffirmation, setCurrentAffirmation] = useState("Confidence Booster");
  const [journalEntry, setJournalEntry] = useState("");
  
  const affirmations = [
    { name: "Confidence Booster", duration: "5:30", category: "Confidence" },
    { name: "Alpha Mindset", duration: "7:15", category: "Mindset" },
    { name: "Seduction Master", duration: "6:45", category: "Seduction" },
    { name: "Focus & Drive", duration: "8:20", category: "Focus" },
    { name: "Social Dominance", duration: "5:55", category: "Social" },
  ];

  const breathworkSessions = [
    { name: "4-7-8 Breathing", duration: "10:00", difficulty: "Beginner" },
    { name: "Box Breathing", duration: "15:00", difficulty: "Intermediate" },
    { name: "Wim Hof Method", duration: "20:00", difficulty: "Advanced" },
  ];

  const journalPrompts = [
    "What made me feel most confident today?",
    "What challenge did I overcome today?",
    "How did I improve my social interactions?",
    "What am I grateful for in my personal growth?",
    "What will I do tomorrow to level up?",
  ];

  const [selectedPrompt, setSelectedPrompt] = useState(journalPrompts[0]);

  return (
    <div className="space-y-6">
      {/* Audio Affirmations */}
      <Card className="bg-gray-900 border-red-900/20">
        <CardHeader>
          <CardTitle className="flex items-center text-red-500">
            <Volume2 className="h-5 w-5 mr-2" />
            Audio Affirmations
          </CardTitle>
          <CardDescription>
            Reprogram your subconscious mind with powerful affirmations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Current Playing */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-yellow-500">{currentAffirmation}</h4>
                    <p className="text-sm text-gray-400">Now Playing</p>
                  </div>
                  <Button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                </div>
                <div className="mt-3 bg-gray-700 h-2 rounded-full">
                  <div className="bg-red-500 h-2 rounded-full w-1/3"></div>
                </div>
              </CardContent>
            </Card>

            {/* Affirmations List */}
            <div className="grid gap-3">
              {affirmations.map((affirmation, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors"
                  onClick={() => setCurrentAffirmation(affirmation.name)}
                >
                  <div>
                    <div className="font-medium">{affirmation.name}</div>
                    <div className="text-sm text-gray-400">{affirmation.duration}</div>
                  </div>
                  <Badge variant="outline" className="border-red-500 text-red-500">
                    {affirmation.category}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Daily Journaling */}
      <Card className="bg-gray-900 border-red-900/20">
        <CardHeader>
          <CardTitle className="flex items-center text-red-500">
            <BookOpen className="h-5 w-5 mr-2" />
            Daily Journaling
          </CardTitle>
          <CardDescription>
            Track your thoughts, wins, and growth journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Journal Prompts */}
            <div>
              <label className="text-sm font-medium text-gray-300 mb-2 block">
                Today's Prompt:
              </label>
              <div className="flex flex-wrap gap-2">
                {journalPrompts.map((prompt, index) => (
                  <Button
                    key={index}
                    variant={selectedPrompt === prompt ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedPrompt(prompt)}
                    className={selectedPrompt === prompt ? "bg-red-600 hover:bg-red-700" : "border-red-500 text-red-500 hover:bg-red-500 hover:text-white"}
                  >
                    {prompt.split(' ').slice(0, 3).join(' ')}...
                  </Button>
                ))}
              </div>
            </div>

            {/* Selected Prompt */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="pt-4">
                <p className="text-yellow-500 font-medium mb-3">{selectedPrompt}</p>
                <Textarea
                  placeholder="Write your thoughts here..."
                  value={journalEntry}
                  onChange={(e) => setJournalEntry(e.target.value)}
                  className="min-h-[120px] bg-gray-900 border-gray-600 text-white"
                />
                <Button className="mt-3 bg-red-600 hover:bg-red-700">
                  Save Entry
                </Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Breathwork & Meditation */}
      <Card className="bg-gray-900 border-red-900/20">
        <CardHeader>
          <CardTitle className="flex items-center text-red-500">
            <Brain className="h-5 w-5 mr-2" />
            Breathwork & Meditation
          </CardTitle>
          <CardDescription>
            Master your breathing for peak performance and clarity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {breathworkSessions.map((session, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors"
              >
                <div>
                  <div className="font-medium">{session.name}</div>
                  <div className="text-sm text-gray-400">{session.duration} • {session.difficulty}</div>
                </div>
                <Button className="bg-red-600 hover:bg-red-700">
                  <Play className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Daily Wins */}
      <Card className="bg-gray-900 border-red-900/20">
        <CardHeader>
          <CardTitle className="text-red-500">Today's Wins</CardTitle>
          <CardDescription>
            Celebrate your victories, no matter how small
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-green-900/20 border border-green-500/30 rounded-lg">
              <div className="text-green-500 font-medium">✅ Completed morning routine</div>
              <div className="text-sm text-gray-400">Started the day with intention and energy</div>
            </div>
            <div className="p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg">
              <div className="text-blue-500 font-medium">✅ Had a great conversation with a stranger</div>
              <div className="text-sm text-gray-400">Practiced social skills and built confidence</div>
            </div>
            <Button variant="outline" className="w-full border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
              Add Today's Win
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MindsetModule;
