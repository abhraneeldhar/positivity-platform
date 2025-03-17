
import { OnboardingForm } from "@/components/OnboardingForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user has already completed onboarding
    const userData = localStorage.getItem("wellnessUserData");
    if (userData) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-primary/5" />
      
      <header className="p-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
            W
          </div>
          <span className="text-xl font-light">Wellness</span>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="glass-card rounded-xl p-8 w-full max-w-md shadow-xl backdrop-blur-lg border border-white/20">
          <OnboardingForm />
        </div>
      </main>

      <footer className="text-center p-6 text-sm text-muted-foreground">
        <p>© 2023 Wellness. Your personal journey to mindfulness.</p>
      </footer>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse-soft" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10 animate-pulse-soft" />
    </div>
  );
};

export default Index;
