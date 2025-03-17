
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MoodTracker } from "@/components/MoodTracker";
import { ProgressCard } from "@/components/ProgressCard";
import { SuggestedActivities } from "@/components/SuggestedActivities";
import { Navigation } from "@/components/Navigation";
import { WellnessCard } from "@/components/WellnessCard";
import { 
  Heart, 
  Droplets, 
  Footprints, 
  Moon, 
  BookOpen, 
  Brain, 
  Dumbbell, 
  Apple
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Dashboard = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  useEffect(() => {
    // Check if user has completed onboarding
    const userData = localStorage.getItem("wellnessUserData");
    if (!userData) {
      navigate("/");
    }
  }, [navigate]);

  // Get user data (in a real app this would come from an API)
  const userData = JSON.parse(localStorage.getItem("wellnessUserData") || "{}");
  const name = userData.name || "there";
  
  // Get time of day for greeting
  const hour = new Date().getHours();
  let greeting = "Good morning";
  if (hour >= 12 && hour < 17) {
    greeting = "Good afternoon";
  } else if (hour >= 17) {
    greeting = "Good evening";
  }

  return (
    <div className="min-h-screen flex">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-primary/5" />
      
      <Navigation />

      <main className={`flex-1 ${isMobile ? "pb-16" : "pl-60"}`}>
        <div className="max-w-5xl mx-auto p-6">
          <header className="mb-8 animate-fade-in">
            <h1 className="text-3xl font-light mb-1">
              {greeting}, <span className="text-primary">{name}</span>
            </h1>
            <p className="text-muted-foreground">
              Track your wellness journey and discover new activities
            </p>
          </header>

          <section className="mb-8">
            <MoodTracker />
          </section>

          <section className="mb-8">
            <h2 className="section-title animate-fade-in">Today's Progress</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <ProgressCard 
                title="Step Count"
                value={6500}
                target={10000}
                unit="steps"
                icon={<Footprints size={18} />}
              />
              <ProgressCard 
                title="Water Intake"
                value={4}
                target={8}
                unit="glasses"
                icon={<Droplets size={18} />}
              />
              <ProgressCard 
                title="Heart Rate"
                value={72}
                target={72}
                unit="bpm"
                icon={<Heart size={18} />}
              />
              <ProgressCard 
                title="Sleep"
                value={7}
                target={8}
                unit="hours"
                icon={<Moon size={18} />}
              />
            </div>
          </section>
          
          <section className="mb-8">
            <SuggestedActivities />
          </section>

          <section className="mb-8">
            <h2 className="section-title animate-fade-in">Wellness Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <WellnessCard
                icon={<Brain />}
                title="Mental Health"
                description="Meditations, breathing exercises, and mindfulness practices"
                className="animate-fade-in animate-delay-100"
                onClick={() => navigate("/mental-health")}
              />
              <WellnessCard
                icon={<Dumbbell />}
                title="Physical Fitness"
                description="Workouts, yoga, and exercise routines"
                className="animate-fade-in animate-delay-200"
                onClick={() => navigate("/fitness")}
              />
              <WellnessCard
                icon={<Apple />}
                title="Nutrition"
                description="Healthy recipes and eating guidance"
                className="animate-fade-in animate-delay-300"
                onClick={() => navigate("/nutrition")}
              />
              <WellnessCard
                icon={<BookOpen />}
                title="Journal"
                description="Track thoughts, feelings, and gratitude"
                className="animate-fade-in animate-delay-400"
                onClick={() => navigate("/journal")}
              />
            </div>
          </section>
        </div>
      </main>

      {/* Decorative elements */}
      <div className="fixed top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse-soft hidden md:block" />
      <div className="fixed bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10 animate-pulse-soft hidden md:block" />
    </div>
  );
};

export default Dashboard;
