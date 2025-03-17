
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const MOODS = [
  { emoji: "😊", label: "Happy", value: "happy" },
  { emoji: "😌", label: "Calm", value: "calm" },
  { emoji: "😐", label: "Neutral", value: "neutral" },
  { emoji: "😔", label: "Sad", value: "sad" },
  { emoji: "😩", label: "Stressed", value: "stressed" },
];

export function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [notes, setNotes] = useState("");
  const [checkedIn, setCheckedIn] = useState(false);

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
  };

  const handleSubmit = () => {
    if (!selectedMood) {
      toast.error("Please select a mood first");
      return;
    }

    // In a real app, this would be sent to a backend
    const moodEntry = {
      mood: selectedMood,
      notes: notes,
      timestamp: new Date().toISOString(),
    };

    // Save to localStorage for demo purposes
    const existingEntries = JSON.parse(localStorage.getItem("moodEntries") || "[]");
    localStorage.setItem(
      "moodEntries",
      JSON.stringify([...existingEntries, moodEntry])
    );

    setCheckedIn(true);
    toast.success("Mood tracked successfully");
  };

  if (checkedIn) {
    return (
      <Card className="w-full glass-card animate-fade-in">
        <CardHeader className="pb-3">
          <CardTitle className="text-xl font-normal">Daily Check-in</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-6 space-y-3">
            <div className="text-5xl animate-float">✓</div>
            <p className="text-muted-foreground">You've checked in today!</p>
            <Button 
              variant="ghost" 
              className="mt-2"
              onClick={() => setCheckedIn(false)}
            >
              Update my mood
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full glass-card animate-fade-in">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-normal">How are you feeling today?</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-6">
          {MOODS.map((mood) => (
            <div
              key={mood.value}
              onClick={() => handleMoodSelect(mood.value)}
              className={`flex flex-col items-center cursor-pointer transition-all p-3 rounded-full ${
                selectedMood === mood.value
                  ? "bg-primary/10 scale-110"
                  : "hover:bg-muted"
              }`}
            >
              <span className="text-3xl mb-1 transition-transform hover:scale-110">
                {mood.emoji}
              </span>
              <span className="text-xs text-muted-foreground">
                {mood.label}
              </span>
            </div>
          ))}
        </div>

        <Textarea
          placeholder="Add some notes about how you're feeling... (optional)"
          className="resize-none mb-4"
          rows={2}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />

        <Button 
          onClick={handleSubmit} 
          className="w-full"
          disabled={!selectedMood}
        >
          Save
        </Button>
      </CardContent>
    </Card>
  );
}
