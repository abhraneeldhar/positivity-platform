
import { Navigation } from "@/components/Navigation";
import { useIsMobile } from "@/hooks/use-mobile";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const MentalHealth = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-primary/5" />
      
      <Navigation />

      <main className={`flex-1 ${isMobile ? "pb-16" : "pl-60"}`}>
        <div className="max-w-5xl mx-auto p-6">
          <header className="mb-8 animate-fade-in">
            <div className="flex items-center mb-4">
              <Button variant="ghost" size="icon" asChild className="mr-2">
                <Link to="/dashboard">
                  <ArrowLeft size={20} />
                </Link>
              </Button>
              <h1 className="text-3xl font-light">Mental Health</h1>
            </div>
            <p className="text-muted-foreground">
              Resources to support your mental wellbeing
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="glass-card w-full h-64 flex items-center justify-center animate-fade-in">
              <CardContent className="flex flex-col items-center justify-center text-center p-6">
                <h2 className="text-2xl font-light mb-4">Guided Meditations</h2>
                <p className="text-muted-foreground mb-4">
                  Coming soon in the next update
                </p>
                <Button disabled>Access Meditations</Button>
              </CardContent>
            </Card>

            <Card className="glass-card w-full h-64 flex items-center justify-center animate-fade-in animate-delay-100">
              <CardContent className="flex flex-col items-center justify-center text-center p-6">
                <h2 className="text-2xl font-light mb-4">Breathing Exercises</h2>
                <p className="text-muted-foreground mb-4">
                  Coming soon in the next update
                </p>
                <Button disabled>Try Exercises</Button>
              </CardContent>
            </Card>

            <Card className="glass-card w-full h-64 flex items-center justify-center animate-fade-in animate-delay-200">
              <CardContent className="flex flex-col items-center justify-center text-center p-6">
                <h2 className="text-2xl font-light mb-4">Mindfulness Practices</h2>
                <p className="text-muted-foreground mb-4">
                  Coming soon in the next update
                </p>
                <Button disabled>Explore Mindfulness</Button>
              </CardContent>
            </Card>

            <Card className="glass-card w-full h-64 flex items-center justify-center animate-fade-in animate-delay-300">
              <CardContent className="flex flex-col items-center justify-center text-center p-6">
                <h2 className="text-2xl font-light mb-4">Stress Relief Tools</h2>
                <p className="text-muted-foreground mb-4">
                  Coming soon in the next update
                </p>
                <Button disabled>Discover Tools</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MentalHealth;
