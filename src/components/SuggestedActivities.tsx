
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WellnessCard } from "./WellnessCard";
import { Heart, Brain, Play } from "lucide-react";

export function SuggestedActivities() {
  const navigate = useNavigate();

  return (
    <Card className="glass-card w-full animate-fade-in">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-normal">Suggested For You</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <WellnessCard
            icon={<Brain />}
            title="5-Min Meditation"
            description="Quick mindfulness practice to center yourself"
            className="animate-fade-in animate-delay-100"
            onClick={() => navigate("/meditation")}
          />
          <WellnessCard
            icon={<Play />}
            title="Guided Breathing"
            description="Reduce stress with this breathing exercise"
            className="animate-fade-in animate-delay-200"
            onClick={() => navigate("/breathing")}
          />
          <WellnessCard
            icon={<Heart />}
            title="Evening Stretch"
            description="Gentle stretches to improve sleep quality"
            className="animate-fade-in animate-delay-300"
            onClick={() => navigate("/exercise")}
          />
        </div>
      </CardContent>
    </Card>
  );
}
