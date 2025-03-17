
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const STEPS = [
  {
    id: "welcome",
    title: "Welcome to Wellness",
    subtitle: "Your personal journey to mindfulness and health starts here.",
  },
  {
    id: "personal",
    title: "Tell us about yourself",
    subtitle: "We'll personalize your experience based on your preferences.",
  },
  {
    id: "goals",
    title: "What are your goals?",
    subtitle: "Select what you'd like to focus on.",
  },
  {
    id: "complete",
    title: "You're all set!",
    subtitle: "Your wellness journey begins now.",
  },
];

export function OnboardingForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    goals: {
      stress: false,
      sleep: false,
      fitness: false,
      nutrition: false,
      mindfulness: false,
    },
  });
  
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (goalName: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      goals: {
        ...prev.goals,
        [goalName]: checked,
      },
    }));
  };

  const handleNext = () => {
    if (step < STEPS.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      // Save user data (would connect to backend in production)
      localStorage.setItem("wellnessUserData", JSON.stringify(formData));
      // Navigate to dashboard
      navigate("/dashboard");
    }
  };

  const currentStep = STEPS[step];

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-8 text-center animate-fade-in">
        <h2 className="text-3xl font-light tracking-tight mb-2">
          {currentStep.title}
        </h2>
        <p className="text-muted-foreground">{currentStep.subtitle}</p>
      </div>

      <div className="space-y-6 animate-fade-in">
        {step === 0 && (
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="relative w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center animate-pulse-soft">
              <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-light">
                  W
                </div>
              </div>
            </div>
            <p className="text-center text-muted-foreground max-w-xs">
              Let's create your personal wellness profile to customize your experience.
            </p>
          </div>
        )}

        {step === 1 && (
          <>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="h-12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email (optional)</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="h-12"
                />
                <p className="text-xs text-muted-foreground">
                  We'll use this to save your progress (optional)
                </p>
              </div>
            </div>
          </>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground mb-4">
              Select all that apply:
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="stress"
                  checked={formData.goals.stress}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("stress", checked === true)
                  }
                />
                <Label htmlFor="stress" className="cursor-pointer">Reduce stress & anxiety</Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="sleep"
                  checked={formData.goals.sleep}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("sleep", checked === true)
                  }
                />
                <Label htmlFor="sleep" className="cursor-pointer">Improve sleep quality</Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="fitness"
                  checked={formData.goals.fitness}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("fitness", checked === true)
                  }
                />
                <Label htmlFor="fitness" className="cursor-pointer">Build fitness habits</Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="nutrition"
                  checked={formData.goals.nutrition}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("nutrition", checked === true)
                  }
                />
                <Label htmlFor="nutrition" className="cursor-pointer">Better nutrition</Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="mindfulness"
                  checked={formData.goals.mindfulness}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("mindfulness", checked === true)
                  }
                />
                <Label htmlFor="mindfulness" className="cursor-pointer">Practice mindfulness</Label>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="relative w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center animate-pulse-soft">
              <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-light">
                  ✓
                </div>
              </div>
            </div>
            <p className="text-center text-muted-foreground max-w-xs">
              Based on your preferences, we've created a personalized experience for you.
            </p>
          </div>
        )}
      </div>

      <div className="mt-8 animate-fade-in">
        <Button
          className="w-full h-12 group"
          onClick={handleNext}
        >
          {step === STEPS.length - 1 ? "Get Started" : "Continue"}
          <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
        
        {step > 0 && step < STEPS.length - 1 && (
          <button
            onClick={() => setStep((prev) => prev - 1)}
            className="w-full text-center mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Go back
          </button>
        )}
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {STEPS.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === step ? "w-8 bg-primary" : "w-2 bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
