
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ProgressCardProps {
  title: string;
  value: number;
  target: number;
  unit?: string;
  icon: React.ReactNode;
}

export function ProgressCard({
  title,
  value,
  target,
  unit = "",
  icon,
}: ProgressCardProps) {
  const percentage = Math.min(Math.round((value / target) * 100), 100);

  return (
    <Card className="glass-card animate-fade-in">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-md font-medium">{title}</CardTitle>
        <div className="text-primary/80">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-light mb-2">
          {value}
          <span className="text-sm text-muted-foreground ml-1">{unit}</span>
          <span className="text-sm text-muted-foreground ml-1">/ {target} {unit}</span>
        </div>
        <Progress value={percentage} className="h-2" />
        <p className="text-xs text-muted-foreground mt-2">
          {percentage}% of daily target
        </p>
      </CardContent>
    </Card>
  );
}
