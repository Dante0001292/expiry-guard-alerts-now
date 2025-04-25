
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUp } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  change?: {
    value: string;
    positive: boolean;
  };
  bgClass?: string;
  priority?: 'low' | 'medium' | 'high' | 'normal';
}

export function StatsCard({ title, value, icon, change, bgClass, priority = 'normal' }: StatsCardProps) {
  // Set background color based on priority
  const priorityBg = {
    low: 'bg-green-50',
    medium: 'bg-amber-50',
    high: 'bg-red-50',
    normal: 'bg-white'
  };
  
  // Set icon background color based on priority
  const iconBg = {
    low: 'bg-green-100 text-green-600',
    medium: 'bg-amber-100 text-amber-600',
    high: 'bg-red-100 text-red-600',
    normal: 'bg-brand-purple/10 text-brand-purple'
  };

  return (
    <div className={cn(
      "p-6 rounded-xl border shadow-sm animate-fade-in",
      priorityBg[priority],
      bgClass
    )}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <div className="mt-2 flex items-baseline">
            <p className="text-2xl font-semibold">{value}</p>
            
            {change && (
              <span className={cn(
                "ml-2 text-sm",
                change.positive ? "text-green-600" : "text-red-600"
              )}>
                <span className="flex items-center">
                  {change.positive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                  {change.value}
                </span>
              </span>
            )}
          </div>
        </div>
        
        <div className={cn(
          "p-3 rounded-full",
          iconBg[priority]
        )}>
          {icon}
        </div>
      </div>
    </div>
  );
}
