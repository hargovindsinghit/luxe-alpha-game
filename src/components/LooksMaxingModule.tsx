
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Camera, Upload, CheckCircle, Circle } from "lucide-react";

const LooksMaxingModule = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [dailyChecklist, setDailyChecklist] = useState([
    { id: 1, task: "Skincare routine (cleanser + moisturizer)", completed: false },
    { id: 2, task: "Posture check (shoulders back, chin up)", completed: true },
    { id: 3, task: "Teeth brushing + mouthwash", completed: true },
    { id: 4, task: "Grooming (beard trim/clean shave)", completed: false },
    { id: 5, task: "Style check (outfit coordination)", completed: false },
  ]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        // Simulate AI analysis
        setTimeout(() => {
          setAnalysisResult({
            overallScore: 7.8,
            symmetry: 8.2,
            grooming: 6.5,
            style: 8.0,
            suggestions: [
              "Consider a more structured haircut to enhance facial symmetry",
              "Update your skincare routine - focus on moisturizing",
              "Try a beard style that complements your jawline",
              "Consider upgrading your wardrobe with fitted clothing"
            ]
          });
        }, 2000);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleChecklistItem = (id: number) => {
    setDailyChecklist(prev => 
      prev.map(item => 
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const completedTasks = dailyChecklist.filter(item => item.completed).length;
  const totalTasks = dailyChecklist.length;
  const progressPercentage = (completedTasks / totalTasks) * 100;

  return (
    <div className="space-y-6">
      {/* Photo Analysis */}
      <Card className="bg-gray-900 border-red-900/20">
        <CardHeader>
          <CardTitle className="flex items-center text-red-500">
            <Camera className="h-5 w-5 mr-2" />
            AI Photo Analysis
          </CardTitle>
          <CardDescription>
            Upload your photo for personalized grooming and style recommendations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center">
              {uploadedImage ? (
                <div className="space-y-4">
                  <img 
                    src={uploadedImage} 
                    alt="Uploaded" 
                    className="max-w-xs mx-auto rounded-lg"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="photo-upload"
                  />
                  <label htmlFor="photo-upload">
                    <Button variant="outline" className="cursor-pointer">
                      Upload New Photo
                    </Button>
                  </label>
                </div>
              ) : (
                <div>
                  <Upload className="h-12 w-12 mx-auto text-gray-500 mb-4" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="photo-upload"
                  />
                  <label htmlFor="photo-upload">
                    <Button className="bg-red-600 hover:bg-red-700 cursor-pointer">
                      Upload Photo
                    </Button>
                  </label>
                </div>
              )}
            </div>

            {analysisResult && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-500">{analysisResult.overallScore}</div>
                    <div className="text-sm text-gray-400">Overall</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-500">{analysisResult.symmetry}</div>
                    <div className="text-sm text-gray-400">Symmetry</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-500">{analysisResult.grooming}</div>
                    <div className="text-sm text-gray-400">Grooming</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500">{analysisResult.style}</div>
                    <div className="text-sm text-gray-400">Style</div>
                  </div>
                </div>

                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-sm text-yellow-500">Personalized Suggestions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {analysisResult.suggestions.map((suggestion: string, index: number) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Circle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{suggestion}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Daily LooksMaxing Checklist */}
      <Card className="bg-gray-900 border-red-900/20">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center text-red-500">
              <CheckCircle className="h-5 w-5 mr-2" />
              Daily LooksMaxing Routine
            </span>
            <span className="text-sm text-gray-400">
              {completedTasks}/{totalTasks} completed
            </span>
          </CardTitle>
          <Progress value={progressPercentage} className="mt-2" />
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {dailyChecklist.map((item) => (
              <div key={item.id} className="flex items-center space-x-3">
                <Checkbox
                  id={`task-${item.id}`}
                  checked={item.completed}
                  onCheckedChange={() => toggleChecklistItem(item.id)}
                  className="data-[state=checked]:bg-red-600 data-[state=checked]:border-red-600"
                />
                <label
                  htmlFor={`task-${item.id}`}
                  className={`text-sm cursor-pointer ${
                    item.completed ? 'line-through text-gray-500' : 'text-white'
                  }`}
                >
                  {item.task}
                </label>
              </div>
            ))}
          </div>
          
          {completedTasks === totalTasks && (
            <div className="mt-4 p-4 bg-green-900/20 border border-green-500/30 rounded-lg text-center">
              <div className="text-green-500 font-semibold">🔥 Perfect Day! +50 XP</div>
              <div className="text-sm text-gray-400 mt-1">You've completed all your looksmaxxing tasks!</div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Style Tips */}
      <Card className="bg-gray-900 border-red-900/20">
        <CardHeader>
          <CardTitle className="text-red-500">Style & Grooming Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-yellow-500 mb-2">Grooming Essentials</h4>
              <ul className="text-sm space-y-1 text-gray-300">
                <li>• Consistent skincare routine</li>
                <li>• Well-maintained facial hair</li>
                <li>• Regular haircuts (every 3-4 weeks)</li>
                <li>• Clean, trimmed nails</li>
                <li>• Good oral hygiene</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-500 mb-2">Style Fundamentals</h4>
              <ul className="text-sm space-y-1 text-gray-300">
                <li>• Clothes that fit properly</li>
                <li>• Quality over quantity</li>
                <li>• Neutral color palette</li>
                <li>• Invest in good shoes</li>
                <li>• Minimal, quality accessories</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LooksMaxingModule;
