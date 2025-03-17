
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface WellnessCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  onClick?: () => void;
}

export function WellnessCard({
  icon,
  title,
  description,
  className,
  onClick,
}: WellnessCardProps) {
  return (
    <Card 
      className={cn(
        "glass-card overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        className
      )}
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="text-primary text-4xl mb-2">{icon}</div>
          <h3 className="font-medium text-lg">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
